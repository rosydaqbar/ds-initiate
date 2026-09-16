import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const resolved = value => typeof value === 'string' ? nonempty(value)
  : typeof value === 'number' ? Number.isFinite(value)
  : typeof value === 'boolean' ? true
  : Array.isArray(value) ? value.every(resolved)
  : record(value) && Object.keys(value).length > 0 && Object.entries(value).every(([key, item]) => nonempty(key) && resolved(item));
const canonical = value => JSON.stringify(value, (_, item) => record(item)
  ? Object.fromEntries(Object.entries(item).sort(([a], [b]) => a.localeCompare(b))) : item);

export function withoutFences(markdown) {
  let fence;
  return markdown.split(/\r?\n/).map(line => {
    const marker = /^ {0,3}(`{3,}|~{3,})(.*)$/.exec(line);
    if (marker && !fence) { fence = marker[1]; return ''; }
    if (fence) {
      if (marker && marker[1][0] === fence[0] && marker[1].length >= fence.length && !marker[2].trim()) fence = undefined;
      return '';
    }
    return line;
  }).join('\n');
}

export function validateCoverage(data) {
  const errors = [];
  if (!record(data)) return ['Coverage must be a JSON object.'];
  if (!nonempty(data.guide)) errors.push('guide is required.');
  if (!nonempty(data.approvedSource)) errors.push('approvedSource is required; expected scope must precede implementation.');
  const inventory = key => {
    const result = new Map();
    if (!Array.isArray(data[key]) || data[key].length === 0) {
      errors.push(`${key} must be a nonempty array.`);
      return result;
    }
    for (const item of data[key]) {
      if (!record(item) || !nonempty(item.name)) { errors.push(`${key}: entry has no name.`); continue; }
      if (result.has(item.name)) errors.push(`${key}: duplicate ${item.name}.`);
      result.set(item.name, item);
    }
    return result;
  };
  const approved = inventory('approved');
  const implemented = inventory('implemented');
  const documented = inventory('documented');
  for (const [label, entries] of [['implemented', implemented], ['documented', documented]]) {
    for (const name of entries.keys()) if (!approved.has(name)) errors.push(`${label}: unexpected ${name}.`);
    for (const name of approved.keys()) if (!entries.has(name)) errors.push(`${label}: missing ${name}.`);
  }
  const samplesSeen = new Set();
  const rowsSeen = new Set();
  for (const [name, expected] of approved) {
    if (!record(expected.values) || Object.keys(expected.values).length === 0) {
      errors.push(`approved: ${name} needs resolved values by mode.`);
      continue;
    }
    if (!Object.entries(expected.values).every(([mode, value]) => nonempty(mode) && resolved(value))) {
      errors.push(`approved: ${name} has an empty mode or unresolved value.`);
    }
    const built = implemented.get(name);
    const shown = documented.get(name);
    if (built && (!nonempty(built.description) || !nonempty(built.nodeId))) errors.push(`implemented: ${name} needs identity and description.`);
    if (shown && (!nonempty(shown.usage) || !nonempty(shown.rowNodeId))) errors.push(`documented: ${name} needs visible row identity and individual usage.`);
    if (shown && nonempty(shown.rowNodeId)) {
      if (rowsSeen.has(shown.rowNodeId)) errors.push(`documented: reused row ${shown.rowNodeId}.`);
      rowsSeen.add(shown.rowNodeId);
    }
    for (const [label, item] of [['implemented', built], ['documented', shown]]) {
      if (!item) continue;
      if (canonical(item.values) !== canonical(expected.values)) errors.push(`${label}: ${name} values or modes differ from approved scope.`);
    }
    if (!shown) continue;
    if (!record(shown.samples) || canonical(Object.keys(shown.samples).sort()) !== canonical(Object.keys(expected.values).sort())) {
      errors.push(`documented: ${name} specimen modes differ from approved scope.`);
    }
    for (const [mode, value] of Object.entries(expected.values)) {
      const sample = record(shown.samples) ? shown.samples[mode] : undefined;
      if (!record(sample) || !nonempty(sample.nodeId)) { errors.push(`documented: ${name}/${mode} is missing a specimen.`); continue; }
      if (samplesSeen.has(sample.nodeId)) errors.push(`documented: reused specimen ${sample.nodeId}.`);
      samplesSeen.add(sample.nodeId);
      if (sample.bindsTo !== name) errors.push(`documented: ${name}/${mode} specimen binds to the wrong name.`);
      if (canonical(sample.value) !== canonical(value)) errors.push(`documented: ${name}/${mode} specimen value is stale.`);
    }
  }
  if (!Array.isArray(data.requiredSections) || data.requiredSections.length === 0 || data.requiredSections.some(x => !nonempty(x))) {
    errors.push('requiredSections must list the canonical required sections.');
  } else {
    if (new Set(data.requiredSections).size !== data.requiredSections.length) errors.push('requiredSections contains duplicates.');
    const sections = Array.isArray(data.sections) ? data.sections : [];
    const sectionIds = new Set();
    for (const name of data.requiredSections) {
      const matches = sections.filter(section => record(section) && section.name === name);
      if (matches.length !== 1) { errors.push(`sections: ${name} must appear exactly once.`); continue; }
      if (!nonempty(matches[0].nodeId) || matches[0].screenshotReviewed !== true) errors.push(`sections: ${name} needs identity and screenshot review.`);
      if (nonempty(matches[0].nodeId)) {
        if (sectionIds.has(matches[0].nodeId)) errors.push(`sections: reused section ${matches[0].nodeId}.`);
        sectionIds.add(matches[0].nodeId);
      }
    }
  }
  return errors;
}

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.filter(e => !['.git', 'node_modules'].includes(e.name)).map(async entry => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? markdownFiles(target) : entry.name.endsWith('.md') ? [target] : [];
  }));
  return files.flat();
}

export async function validateRepository(directory = root) {
  const errors = [];
  const files = await markdownFiles(directory);
  const contents = new Map();
  const obsoleteRules = [
    /select exactly three steps/i,
    /six representative type examples/i,
    /do not create a role inventory table/i,
    /complete (?:scale|Radius collection).*stays in Figma/i,
    /✓ WCAG 2\.2 AA checked/,
    /irrelevant sections and unbuilt options are omitted/i,
    /Anatomy diagrams.*unless the user explicitly requests/i,
    /copy .* literally/i
  ];
  for (const file of files) {
    const relative = path.relative(directory, file).replaceAll('\\', '/');
    const source = await readFile(file, 'utf8');
    contents.set(relative, source);
    for (const rule of obsoleteRules) if (rule.test(source)) errors.push(`${relative}: obsolete omission, literal-copy, or unscoped conformance rule ${rule}.`);
    const prose = withoutFences(source);
    for (const link of prose.matchAll(/!?\[[^\]\n]*\]\(([^)\n]+)\)/g)) {
      const target = link[1].trim().replace(/^<|>$/g, '');
      if (/^(?:[a-z][a-z\d+.-]*:|#)/i.test(target)) continue;
      const destination = target.split('#')[0];
      if (!destination) continue;
      try { await access(path.resolve(path.dirname(file), decodeURIComponent(destination))); }
      catch { errors.push(`${relative}: missing local link ${target}.`); }
    }
    if (/^docs\/01-foundations\/(?!README\.md$)[^/]+\.md$/.test(relative) && !source.includes('## Mandatory Figma documentation')) {
      errors.push(`${relative}: missing mandatory documentation recipe.`);
    }
  }
  const requirements = {
    'docs/06-governance/documentation-visual-language.md': [
      '## Core rule',
      '## Documentation grammar',
      '## Choose the structure from the information',
      '## Semantic-variable table pattern',
      '## Screenshot QA'
    ],
    'docs/06-governance/foundation-documentation.md': [
      'documentation-visual-language.md',
      '## Structure is chosen by the information',
      '## Semantic-variable table pattern',
      '## Reference adaptation'
    ],
    'docs/01-foundations/color.md': [
      '### Documentation / Colors',
      '### Documentation / Color variables',
      '#### Name column',
      '#### Light and Dark mode columns',
      '### Color documentation QA'
    ],
    'docs/06-governance/optional-component-documentation.md': ['complete size/specification table', 'EVERY public Boolean', 'documentation-acceptance.md'],
    'docs/06-governance/documentation-acceptance.md': ['## Three independent inventories', '## Visual and semantic checks']
  };
  for (const [file, markers] of Object.entries(requirements)) {
    for (const marker of markers) if (!contents.get(file)?.includes(marker)) errors.push(`${file}: missing contract ${marker}.`);
  }
  const agents = contents.get('AGENTS.md') ?? '';
  if (!agents.includes('documentation-visual-language.md')) errors.push('AGENTS.md: must require the canonical documentation visual language.');
  const color = contents.get('docs/01-foundations/color.md') ?? '';
  const roles = [...color.matchAll(/^\| [^|]+ \| `([^`]+)` \| (.+) \|$/gm)].map(match => ({ name: match[1], usage: match[2] }));
  const roleNames = roles.map(role => role.name);
  if (roleNames.length === 0 || new Set(roleNames).size !== roleNames.length) errors.push('Color semantic role table is empty or contains duplicate names.');
  for (const role of roles) if (!role.name.startsWith('color/') || !nonempty(role.usage)) errors.push(`Color: invalid role ${role.name}.`);
  return { errors, fileCount: files.length, colorRoles: roles.length };
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length && !(args.length === 2 && args[0] === '--coverage')) {
    throw new Error('Usage: node scripts/validate-documentation.mjs [--coverage path/to/coverage.json]');
  }
  const result = await validateRepository();
  const errors = [...result.errors];
  if (args[0] === '--coverage') errors.push(...validateCoverage(JSON.parse(await readFile(args[1], 'utf8'))));
  if (errors.length) {
    console.error(errors.map(error => `- ${error}`).join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`PASS: ${result.fileCount} Markdown files, ${result.colorRoles} semantic color roles${args.length ? ', supplied coverage evidence consistent' : ''}. Figma visual quality requires separate inspection.`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}

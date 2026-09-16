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

function expectEqual(errors, actual, expected, label) {
  if (canonical(actual) !== canonical(expected)) errors.push(`layout contract: ${label} differs from canonical value.`);
}

export function validateLayoutContract(contract) {
  const errors = [];
  if (!record(contract)) return ['layout contract must be a JSON object.'];

  expectEqual(errors, contract.version, 1, 'version');
  expectEqual(errors, contract.foundationCanvas?.topY, 0, 'foundationCanvas.topY');
  expectEqual(errors, contract.foundationCanvas?.horizontalGap, 200, 'foundationCanvas.horizontalGap');
  expectEqual(errors, contract.foundationCanvas?.order, [
    'Design Tokens', 'Colors', 'Color variables', 'Typography', '4px Grid', 'Spacing', 'Grid and Layout', 'Radius', 'Borders', 'Elevation', 'Iconography', 'Illustration and Imagery', 'Motion', 'Accessibility', 'Content'
  ], 'foundationCanvas.order');

  const guideWidths = Object.fromEntries(Object.entries(contract.foundationGuides ?? {}).map(([name, value]) => [name, value.width]));
  expectEqual(errors, guideWidths, {
    'Design Tokens': 1600,
    'Colors': 2848,
    'Color variables': 2528,
    'Typography': 1600,
    '4px Grid': 1600,
    'Spacing': 1600,
    'Grid and Layout': 1664,
    'Radius': 1600,
    'Borders': 1600,
    'Elevation': 1600,
    'Iconography': 1600,
    'Illustration and Imagery': 1664,
    'Motion': 1600,
    'Accessibility': 1600,
    'Content': 1600
  }, 'foundation guide widths');

  expectEqual(errors, contract.foundationGuides?.Colors?.pattern, 'P1', 'Colors pattern');
  expectEqual(errors, contract.foundationGuides?.['Color variables']?.pattern, 'P2', 'Color variables pattern');
  expectEqual(errors, contract.foundationGuides?.Typography?.pattern, 'P3', 'Typography pattern');
  expectEqual(errors, contract.foundationGuides?.Spacing?.pattern, 'P4', 'Spacing pattern');
  expectEqual(errors, contract.foundationGuides?.Accessibility?.pattern, 'P5', 'Accessibility pattern');

  expectEqual(errors, contract.shell?.header?.height, 476, 'header height');
  expectEqual(errors, contract.shell?.header?.outerInset, 32, 'header outer inset');
  expectEqual(errors, contract.shell?.header?.cardHeight, 412, 'header card height');
  expectEqual(errors, contract.shell?.header?.cardRadius, 20, 'header card radius');
  expectEqual(errors, contract.shell?.header?.cardGap, 112, 'header card gap');
  expectEqual(errors, contract.shell?.header?.contextRowHeight, 36, 'context row height');
  expectEqual(errors, contract.shell?.header?.heroRowHeight, 152, 'hero row height');
  expectEqual(errors, contract.shell?.header?.heroMetadataWidth, 440, 'hero metadata width');
  expectEqual(errors, contract.shell?.body?.padding, { top: 80, right: 80, bottom: 96, left: 80 }, 'body padding');
  expectEqual(errors, contract.shell?.body?.majorSectionGap, 112, 'major section gap');
  expectEqual(errors, contract.shell?.body?.sectionIntroToReferenceGap, 56, 'intro/reference gap');
  expectEqual(errors, contract.shell?.body?.wideIntroWidth, 900, 'wide intro width');
  expectEqual(errors, contract.shell?.body?.standardIntroWidth, 800, 'standard intro width');

  expectEqual(errors, contract.patterns?.P1?.rootWidth, 2848, 'P1 root width');
  expectEqual(errors, contract.patterns?.P1?.normalSwatch?.width, 160, 'P1 normal swatch width');
  expectEqual(errors, contract.patterns?.P1?.normalSwatch?.height, 156, 'P1 normal swatch height');
  expectEqual(errors, contract.patterns?.P1?.anchorSwatch?.width, 224, 'P1 anchor swatch width');
  expectEqual(errors, contract.patterns?.P1?.normalSwatchGap, 32, 'P1 swatch gap');

  expectEqual(errors, contract.patterns?.P2?.rootWidth, 2528, 'P2 root width');
  expectEqual(errors, contract.patterns?.P2?.twoModeColumns, { name: 820, mode1: 360, mode2: 360, usage: 828 }, 'P2 two-mode columns');
  expectEqual(errors, contract.patterns?.P2?.oneModeColumns, { name: 820, value: 480, usage: 1068 }, 'P2 one-mode columns');
  expectEqual(errors, contract.patterns?.P2?.headerHeight, 56, 'P2 header height');
  expectEqual(errors, contract.patterns?.P2?.defaultRowHeight, 88, 'P2 default row height');
  expectEqual(errors, contract.patterns?.P2?.modePill?.swatch, 28, 'P2 mode swatch');
  expectEqual(errors, contract.patterns?.P2?.childConnector?.area, 48, 'P2 child connector area');

  expectEqual(errors, contract.patterns?.P3?.rowMinHeight, 120, 'P3 row minimum');
  expectEqual(errors, contract.patterns?.P4?.rowMinHeight, 144, 'P4 row minimum');
  expectEqual(errors, contract.patterns?.P5?.readingColumn, 800, 'P5 reading column');
  expectEqual(errors, contract.patterns?.P5?.comparison, { outerWidth: 1120, columnWidth: 548, gap: 24, columnPadding: 24, columnGap: 16 }, 'P5 comparison');

  expectEqual(errors, contract.componentGuide?.rootWidth, 1600, 'component guide root width');
  expectEqual(errors, contract.componentGuide?.anatomyDimensionsTable?.columns, [280, 280, 240, 320], 'component anatomy table columns');
  expectEqual(errors, contract.componentGuide?.publicPropertiesTable?.columns, [280, 160, 240, 440], 'component property table columns');

  const serialized = JSON.stringify(contract);
  for (const forbidden of ['GokGok', '#0066FF', 'Geist', 'f3mBCrYbPWMqophBUjmdsF']) {
    if (serialized.toLowerCase().includes(forbidden.toLowerCase())) errors.push(`layout contract contains example-project leakage: ${forbidden}.`);
  }

  return errors;
}

export async function validateRepository(directory = root) {
  const errors = [];
  const files = await markdownFiles(directory);
  const contents = new Map();

  const obsoleteRules = [
    /choose what looks best/i,
    /use an appropriate width/i,
    /adapt freely/i,
    /root width is content-driven/i,
    /recommended root width/i,
    /reuse .* where appropriate/i,
    /✓ WCAG 2\.2 AA checked/
  ];

  const knownExampleLeakage = [
    { pattern: /\bGokGok\b/i, label: 'example brand name' },
    { pattern: /#0066FF/i, label: 'example brand hex' },
    { pattern: /\bGeist(?: Mono)?\b/i, label: 'example project typeface' },
    { pattern: /f3mBCrYbPWMqophBUjmdsF/i, label: 'example target Figma identity' }
  ];

  for (const file of files) {
    const relative = path.relative(directory, file).replaceAll('\\', '/');
    const source = await readFile(file, 'utf8');
    contents.set(relative, source);

    for (const rule of obsoleteRules) {
      if (rule.test(source)) errors.push(`${relative}: nondeterministic or obsolete construction wording ${rule}.`);
    }

    for (const leak of knownExampleLeakage) {
      if (leak.pattern.test(source)) errors.push(`${relative}: reusable repository contains ${leak.label}.`);
    }

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
    'docs/06-governance/project-data-boundary.md': [
      '## Non-negotiable boundary', '## Deterministic generation rule', '## Pre-commit brand-agnostic audit'
    ],
    'docs/06-governance/documentation-visual-language.md': [
      'documentation-layout-contract.json',
      '## Canonical page order and placement',
      '## Canonical frame-width decision table',
      '## Canonical documentation chrome',
      '## Canonical pattern selection',
      '## P1 — Palette families',
      '## P2 — Semantic variable table',
      '## P3 — Specimen rows',
      '## P4 — Measured diagrams',
      '## P5 — Guidance and comparisons',
      '## Screenshot QA'
    ],
    'docs/06-governance/foundation-documentation.md': [
      'project-data-boundary.md', 'documentation-visual-language.md', '## Canonical shell and canvas placement', '## Reference-specific requirements', '## Acceptance failures'
    ],
    'docs/06-governance/optional-component-documentation.md': [
      '## Canonical component-guide shell', '## Required section order', '## Anatomy and dimensions', '## Public properties', '## Documentation QA'
    ],
    'docs/06-governance/documentation-acceptance.md': [
      '## Canonical structural checks', '## Pattern-specific structural checks', '## Project-data isolation checks'
    ],
    'docs/00-discovery/brand-style-questionnaire.md': [
      '## Deterministic project resolution record', 'Project Data Boundary'
    ],
    'docs/00-discovery/discovery-brief-format.md': [
      '## Deterministic project-resolution record', 'REQUIRES APPROVAL', 'BLOCKED'
    ],
    'README.md': [
      '## What the repository owns', '## What each project owns', '## Determinism goal', 'Project Data Boundary', 'documentation-layout-contract.json'
    ]
  };

  for (const [file, markers] of Object.entries(requirements)) {
    for (const marker of markers) {
      if (!contents.get(file)?.includes(marker)) errors.push(`${file}: missing contract ${marker}.`);
    }
  }

  const agents = contents.get('AGENTS.md') ?? '';
  for (const marker of ['Project Data Boundary', 'Determinism requirement', 'documentation-visual-language.md', 'documentation-layout-contract.json']) {
    if (!agents.includes(marker)) errors.push(`AGENTS.md: missing ${marker}.`);
  }

  const contractMarkdown = contents.get('docs/06-governance/documentation-visual-language.md') ?? '';
  for (const marker of ['`200px`', '`476px`', '`820px | 360px | 360px | 828px`', '`160 × 156px`', '`112px`']) {
    if (!contractMarkdown.includes(marker)) errors.push(`Documentation contract: missing deterministic geometry marker ${marker}.`);
  }

  try {
    const layoutContract = JSON.parse(await readFile(path.join(directory, 'docs/06-governance/documentation-layout-contract.json'), 'utf8'));
    errors.push(...validateLayoutContract(layoutContract));
  } catch (error) {
    errors.push(`documentation-layout-contract.json: ${error.message}`);
  }

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

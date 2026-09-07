import test from 'node:test';
import assert from 'node:assert/strict';
import { validateCoverage, validateRepository, withoutFences } from './validate-documentation.mjs';

function evidence() {
  const names = ['color/text/primary', 'color/text/secondary'];
  return {
    guide: 'Synthetic test guide', approvedSource: 'Synthetic approved fixture',
    approved: names.map(name => ({ name, values: { Light: '#111111', Dark: '#EEEEEE' } })),
    implemented: names.map((name, i) => ({ name, nodeId: `var-${i}`, description: `Purpose for ${name}`, values: { Light: '#111111', Dark: '#EEEEEE' } })),
    documented: names.map((name, i) => ({ name, rowNodeId: `row-${i}`, usage: `Individual use of ${name}`, values: { Light: '#111111', Dark: '#EEEEEE' }, samples: {
      Light: { nodeId: `sample-light-${i}`, bindsTo: name, value: '#111111' },
      Dark: { nodeId: `sample-dark-${i}`, bindsTo: name, value: '#EEEEEE' }
    } })),
    requiredSections: ['Text roles', 'Applications'],
    sections: ['Text roles', 'Applications'].map(name => ({ name, nodeId: name, screenshotReviewed: true }))
  };
}

test('complete independent evidence passes even when distinct roles share values', () => {
  assert.deepEqual(validateCoverage(evidence()), []);
});

test('a one-color guide cannot satisfy a multi-role approved inventory', () => {
  const data = evidence(); data.documented.pop();
  assert.match(validateCoverage(data).join('\n'), /documented: missing color\/text\/secondary/);
});

test('equal counts cannot hide a duplicate row and missing role', () => {
  const data = evidence(); data.documented[1] = structuredClone(data.documented[0]);
  const result = validateCoverage(data).join('\n');
  assert.match(result, /duplicate/); assert.match(result, /missing color\/text\/secondary/);
});

test('an approved token absent from both build and documentation still fails', () => {
  const data = evidence(); data.implemented.pop(); data.documented.pop();
  assert.equal(validateCoverage(data).filter(x => /missing color\/text\/secondary/.test(x)).length, 2);
});

test('missing dark mode and stale value are rejected independently', () => {
  const data = evidence(); delete data.implemented[0].values.Dark;
  data.documented[1].values.Light = '#000000';
  assert.equal(validateCoverage(data).filter(x => /values or modes differ/.test(x)).length, 2);
});

test('empty descriptions, missing usage and text-only specimens fail', () => {
  const data = evidence(); data.implemented[0].description = ''; data.documented[0].usage = '';
  data.documented[0].samples = {};
  const result = validateCoverage(data).join('\n');
  assert.match(result, /description/); assert.match(result, /individual usage/); assert.match(result, /missing a specimen/);
});

test('documentation chrome bound to a different role is not specimen evidence', () => {
  const data = evidence(); data.documented[0].samples.Light.bindsTo = 'color/background/surface';
  assert.match(validateCoverage(data).join('\n'), /wrong name/);
});

test('a reused specimen or stale specimen value fails', () => {
  const data = evidence(); data.documented[1].samples.Light.nodeId = data.documented[0].samples.Light.nodeId;
  data.documented[0].samples.Dark.value = '#DDDDDD';
  const result = validateCoverage(data).join('\n');
  assert.match(result, /reused specimen/); assert.match(result, /specimen value is stale/);
});

test('a missing application section or missing screenshot review fails', () => {
  const data = evidence(); data.sections.pop(); data.sections[0].screenshotReviewed = false;
  const result = validateCoverage(data).join('\n');
  assert.match(result, /Applications must appear/); assert.match(result, /screenshot review/);
});

test('malformed evidence returns useful errors without crashing', () => {
  for (const data of [null, [], {}, { approved: [null], implemented: [null], documented: [null] }]) {
    assert.ok(validateCoverage(data).length > 0);
  }
});

test('matching empty or unresolved values cannot establish complete coverage', () => {
  for (const value of [null, '', {}, { hex: null }]) {
    const data = evidence();
    data.approved[0].values.Light = value;
    data.implemented[0].values.Light = value;
    data.documented[0].values.Light = value;
    data.documented[0].samples.Light.value = value;
    assert.match(validateCoverage(data).join('\n'), /unresolved value/);
  }
});

test('structured single-value specifications preserve zero, false and no effect layers', () => {
  const data = evidence();
  for (let i = 0; i < data.approved.length; i++) {
    const value = { offset: 0, unit: 'px', animated: false, layers: [] };
    for (const inventory of ['approved', 'implemented', 'documented']) data[inventory][i].values = { Value: value };
    data.documented[i].samples = { Value: { nodeId: `single-${i}`, bindsTo: data.approved[i].name, value } };
  }
  assert.deepEqual(validateCoverage(data), []);
});

test('an unsupported extra name does not silently expand approved scope', () => {
  const data = evidence();
  data.implemented.push({ ...data.implemented[0], name: 'color/text/unapproved' });
  assert.match(validateCoverage(data).join('\n'), /unexpected color\/text\/unapproved/);
});

test('required sections cannot reuse the same specimen container', () => {
  const data = evidence(); data.sections[1].nodeId = data.sections[0].nodeId;
  assert.match(validateCoverage(data).join('\n'), /reused section/);
});

test('repository references and documentation policies pass the static gate', async () => {
  const result = await validateRepository();
  assert.deepEqual(result.errors, []);
  assert.ok(result.fileCount > 0);
  assert.ok(result.colorRoles > 0);
});

test('nested fence examples are excluded while real Markdown links remain', () => {
  const source = ['[real](README.md)', '````markdown', '[template]([filename].md)', '```text', 'example', '```', '````', '[after](docs/README.md)'].join('\n');
  const prose = withoutFences(source);
  assert.ok(prose.includes('[real]')); assert.ok(prose.includes('[after]')); assert.ok(!prose.includes('[template]'));
});

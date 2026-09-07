# Documentation Acceptance

Documentation is complete when the approved scope, implemented objects and visible reference agree. This gate applies to mandatory Foundation guides and to component guides after their separate approval.

## Three independent inventories

1. **Approved:** derive the expected names, modes, values, public options and required sections from the approved brief and canonical specification before building. Record exclusions with their approved reason. Do not generate this set solely from whatever exists in Figma.
2. **Implemented:** inspect the actual variables, Styles, assets and component properties. Resolve aliases and modes; read native descriptions and supported options. Missing or extra objects require correction or an explicit scope decision.
3. **Documented:** inspect visible entries, text labels, specimens and mode containers. Record the actual name, resolved value, individual usage and corresponding specimen for each entry.

Compare identities, not only totals. Equal counts can hide one omitted token and one duplicated token. Different roles with equal colors still require separate entries.

## Required sections and individual fields

- Color: complete palette, complete semantic roles, mode comparisons, state/selection examples, pairings, feedback, overlays, do-and-don't guidance and accessibility scope.
- Typography: every approved family and Text Style, full metrics, real samples, hierarchy, wrapping and scripts.
- Spacing/Sizing: the complete scale and all shared control/icon/target dimensions, measured examples and zero behavior.
- Radius/Border: every role/width, actual values, public usage, focus and validation distinctions.
- Elevation/Motion/Layout: every role and its full effect/timing/layout specification, context, supported modes and applicable behavior.
- Assets/Content/Accessibility: all approved reusable assets, treatments and rules, with their individual requirements and examples.
- Component guides: public anatomy, complete dimensions, every public axis value/property, default, constraints, states, appearance, behavior and usage.

The owning item file remains the content contract. Completing an inventory does not waive an application or comparison section. A section heading alone does not establish that the section contains the required content.

## Visual and semantic checks

- Verify a color specimen is actually filled, stroked or rendered using the named role. A text-only box with a hex label is insufficient.
- Verify the actual Text Style is applied to its sample; a label naming a font is insufficient.
- Verify bars, target bounds, radii, borders and layouts measure their recorded values at actual size.
- Verify every mode sample has the intended effective mode, and its displayed source/hex/alpha matches that resolution.
- Read the usage for every entry. It must explain that particular choice, state or pairing, not repeat generic advice across unrelated items.
- Verify each do-and-don't pair has two distinct examples and a specific instruction under each.
- Inspect screenshots of every reference group and continuation at a readable scale, including first and last rows. Check overflow, wrapping, cropping, contrast and association of labels with samples.
- Check total width after padding and gaps. Use additional groups or frames to keep full coverage readable.
- Limit accessibility statements to evidenced checks. Name remaining implementation work.

## Completion record

Keep an internal record with the approved inventory source, actual file/node IDs, entry reconciliation, missing/stale fields, screenshot review references and remaining decisions. This record is not designer-facing content.

Use `Complete` only when the underlying item, complete reference and required applied guidance pass. Use `Incomplete` for missing content or failed review. Record a blocked input separately; do not replace it with fabricated values or silently reduce the scope.

## Repository validation

From the repository root, run:

```sh
node scripts/validate-documentation.mjs
node --test scripts/validate-documentation.test.mjs
```

The first command checks local Markdown file links outside fenced examples, required Foundation sections, canonical reference contracts and obsolete omission rules. It does not inspect Figma or prove a built guide is correct.

## Optional exported coverage evidence

During an authorized build, export independently inspected data and run:

```sh
node scripts/validate-documentation.mjs --coverage path/to/coverage.json
```

Use one record per guide or reference group whose specimens have inspectable variable/Style bindings or connected assets. The following JSON illustrates the format with a synthetic fixture; it is not approved brand data or completed QA evidence:

```json
{
  "guide": "Synthetic color reference",
  "approvedSource": "Approved brief and Color contract",
  "approved": [
    {"name": "color/text/primary", "values": {"Light": "#111111", "Dark": "#EEEEEE"}}
  ],
  "implemented": [
    {"name": "color/text/primary", "nodeId": "fixture-variable", "description": "Main readable text on normal content surfaces.", "values": {"Light": "#111111", "Dark": "#EEEEEE"}}
  ],
  "documented": [
    {
      "name": "color/text/primary",
      "rowNodeId": "fixture-row",
      "usage": "Use for main body text and headings on the normal content surface.",
      "values": {"Light": "#111111", "Dark": "#EEEEEE"},
      "samples": {
        "Light": {"nodeId": "fixture-light", "bindsTo": "color/text/primary", "value": "#111111"},
        "Dark": {"nodeId": "fixture-dark", "bindsTo": "color/text/primary", "value": "#EEEEEE"}
      }
    }
  ],
  "requiredSections": ["Semantic roles"],
  "sections": [
    {"name": "Semantic roles", "nodeId": "fixture-section", "screenshotReviewed": true}
  ]
}
```

For a single-value token, Style or connected asset use `Value` in place of Light/Dark. Values may be JSON objects holding complete metrics, effect layers or asset constraints. Keep values equally structured in all three inventories. Include units in strings or object fields. For aliases, values are the resolved specifications, not alias IDs. In real exports use the returned object/node identities and the actual bound or connected source name for each specimen.

For writing rules, accessibility behavior or other unbindable guidance, keep the same three-inventory and section-review requirements in the completion record, with actual diagram/prototype identities and inspected measurements or behavior. Review these manually; do not fabricate native bindings, objects or descriptions to force them into this optional JSON format. Passing the bindable-reference check does not waive the remaining rule and application checks.

The coverage validator rejects missing/extra/duplicate names, missing modes, stale values, empty descriptions/usage, missing or reused specimens, wrong bound names, missing sections and absent screenshot review markers. It validates the supplied evidence's consistency; it cannot authenticate its origin, judge screenshot quality or substitute for reading the actual guide. Never hand-author a passing evidence record to avoid inspection. Do not commit project-specific evidence to this reusable base.

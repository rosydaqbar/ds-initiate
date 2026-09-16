# Documentation Acceptance

Documentation is complete when the approved scope, implemented objects, visible reference, and approved documentation visual language agree. This gate applies to mandatory Foundation guides and to component guides after their separate approval.

Read [Documentation Visual Language](documentation-visual-language.md) before judging visual structure. Completeness does not require every Foundation to use the same layout.

## Three independent inventories

1. **Approved:** derive the expected names, modes, values, public options and required sections from the approved brief and canonical specification before building. Record exclusions with their approved reason. Do not generate this set solely from whatever exists in Figma.
2. **Implemented:** inspect the actual variables, Styles, assets and component properties. Resolve aliases and modes; read native descriptions and supported options. Missing or extra objects require correction or an explicit scope decision.
3. **Documented:** inspect visible entries, text labels, specimens and mode containers. Record the actual name, resolved value, individual usage and corresponding specimen for each entry.

Compare identities, not only totals. Equal counts can hide one omitted token and one duplicated token. Different roles with equal colors still require separate entries.

## Required sections and individual fields

The owning item file defines the required visible sections. Do not add sections merely because another design system contains them.

At minimum:

- Color: complete primitive/source reference and complete semantic-role reference, grouped according to the actual token model. Mode values, role hierarchy, source pills/swatches, and row-specific usage must be visible where applicable.
- Typography: every approved family and Text Style, full metrics, real samples, hierarchy, wrapping and scripts.
- Spacing/Sizing: the complete scale and all shared control/icon/target dimensions, measured examples and zero behavior.
- Radius/Border: every role/width, actual values, public usage, focus and validation distinctions.
- Elevation/Motion/Layout: every role and its full effect/timing/layout specification, context, supported modes and applicable behavior.
- Assets/Content/Accessibility: all approved reusable assets, treatments and rules, with their individual requirements and examples.
- Component guides: public anatomy, complete dimensions, every public axis value/property, default, constraints, states, appearance, behavior and usage.

A required application, comparison, do-and-don't, pairing, or prototype section is mandatory only when the owning item specification or approved brief requires it. Do not manufacture generic sections to satisfy a template.

## Structural checks

- Confirm the guide follows the established documentation language already approved in the target Figma file.
- If an external reference was supplied, confirm it was used for information architecture and visual grammar rather than copied literally.
- Confirm the body structure matches the information: semantic tables for semantic lookup, swatch families for palettes, measured diagrams for dimensions, specimen rows for visual styles/assets, and prose/comparisons for behavioral guidance.
- Confirm real parent/child relationships are visible when they materially improve lookup. Reject invented hierarchy.
- Confirm sections are separated more strongly than individual rows.
- Confirm documentation chrome remains quieter than the system content being documented.
- Confirm root width is content-driven and 4px aligned. Wide references may exceed the prose default when necessary.
- Confirm neighboring top-level frames do not overlap after resizing.

## Visual and semantic checks

- Verify a color specimen is actually filled, stroked or rendered using the named role. A text-only hex label is insufficient.
- Verify the actual Text Style is applied to its sample; a label naming a font is insufficient.
- Verify bars, target bounds, radii, borders and layouts measure their recorded values at actual size.
- Verify every mode sample has the intended effective mode, and its displayed source/hex/alpha matches that resolution.
- Read the usage for every entry. It must explain that particular choice, state or pairing, not repeat generic advice across unrelated items.
- For semantic-variable tables, verify source pills resolve to the displayed primitive and that child connectors match actual semantic relationships.
- For primitive ramps, verify sequence, anchor/default indicators, values, and alpha/compositing treatment.
- Inspect screenshots of every reference group and continuation at a readable scale, including first and last rows. Check hierarchy, overflow, wrapping, cropping, contrast, column alignment, connector clarity, and association of labels with samples.
- Reject a guide that technically contains all records but visually reads as an arbitrary wall of rows.
- Check total width after padding and gaps. Use a wider 4px-aligned root, additional groups, or continuation frames instead of shrinking readable content.
- Limit accessibility statements to evidenced checks. Name remaining implementation work.

## Reference-specific checks

When a user supplied a reference Figma file or screenshot, record internally:

- which node or screenshot was inspected;
- which information patterns were adopted;
- which reference patterns were intentionally omitted because they do not align with the current system.

Do not reproduce the reference's brand, token names, proprietary copy, component inventory, or exact dimensions unless those values were independently approved for the current project.

## Completion record

Keep an internal record with the approved inventory source, actual file/node IDs, entry reconciliation, missing/stale fields, screenshot review references and remaining decisions. This record is not designer-facing content.

Use `Complete` only when the underlying item, complete reference, required visible sections, and structural screenshot review pass. Use `Incomplete` for missing content or failed review. Record a blocked input separately; do not replace it with fabricated values or silently reduce the scope.

## Repository validation

From the repository root, run:

```sh
node scripts/validate-documentation.mjs
node --test scripts/validate-documentation.test.mjs
```

The first command checks local Markdown file links outside fenced examples, required Foundation sections, canonical documentation-visual-language contracts and obsolete omission rules. It does not inspect Figma or prove a built guide is correct.

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
  "requiredSections": ["Text color"],
  "sections": [
    {"name": "Text color", "nodeId": "fixture-section", "screenshotReviewed": true}
  ]
}
```

For a single-value token, Style or connected asset use `Value` in place of Light/Dark. Values may be JSON objects holding complete metrics, effect layers or asset constraints. Keep values equally structured in all three inventories. Include units in strings or object fields. For aliases, values are the resolved specifications, not alias IDs. In real exports use the returned object/node identities and the actual bound or connected source name for each specimen.

For writing rules, accessibility behavior or other unbindable guidance, keep the same three-inventory and section-review requirements in the completion record, with actual diagram/prototype identities and inspected measurements or behavior. Review these manually; do not fabricate native bindings, objects or descriptions to force them into this optional JSON format. Passing the bindable-reference check does not waive the remaining rule and structural checks.

The coverage validator rejects missing/extra/duplicate names, missing modes, stale values, empty descriptions/usage, missing or reused specimens, wrong bound names, missing sections and absent screenshot review markers. It validates the supplied evidence's consistency; it cannot authenticate its origin, judge screenshot quality or substitute for reading the actual guide. Never hand-author a passing evidence record to avoid inspection. Do not commit project-specific evidence to this reusable base.

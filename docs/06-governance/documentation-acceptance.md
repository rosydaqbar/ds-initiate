# Documentation Acceptance

Documentation is complete when four things agree:

1. approved project scope;
2. implemented Figma objects;
3. visible designer reference;
4. canonical framework construction contract.

This gate applies to mandatory Foundation guides and to component guides after their separate approval.

Read [Project Data Boundary](project-data-boundary.md) and [Documentation Construction Contract](documentation-visual-language.md) before judging completion.

## Three independent inventories

1. **Approved** — derive expected names, modes, values, public options, and required sections from the approved Discovery brief and owning specification before building.
2. **Implemented** — inspect actual variables, Styles, assets, component properties, modes, and descriptions.
3. **Documented** — inspect visible entries, labels, specimens, measured diagrams, and mode containers.

Compare identities, not totals. Equal counts can still hide one omitted item and one duplicate.

## Required visible coverage

The owning item file defines the content inventory. The Documentation Construction Contract defines how that inventory is laid out.

Minimum coverage:

- Colors — every approved primitive/source value.
- Color variables — every approved semantic role and supported mode resolution.
- Typography — every approved family/weight capability and every implemented Text Style.
- Spacing/Sizing — complete approved scales and shared target/control/icon dimensions.
- Radius/Borders — every approved role/width and treatment.
- Elevation/Motion/Layout — every approved role and complete specification.
- Assets/Content/Accessibility — all approved reusable assets/treatments/rules.
- Component guides — public anatomy, dimensions, every public axis/property/default/constraint/state/behavior.

A summary or native panel does not replace required visible reference coverage.

## Canonical structural checks

Foundation guides must satisfy all of these:

- top-level page order matches the canonical order;
- each guide uses its assigned root width;
- top-level guide Y position is `0`;
- horizontal gap between adjacent top-level guide frames is `200px`;
- header uses the canonical `476px` shell;
- body uses `80px` horizontal/top padding, `96px` bottom padding, and `112px` major-section gap;
- section introduction width matches the canonical pattern;
- documentation typography uses the fixed scale and current project's approved primary interface typeface;
- Foundation → pattern mapping matches the fixed contract;
- footer uses the canonical construction;
- continuation frames keep the owning guide width and `200px` canvas gap.

Do not accept a guide merely because it looks similar to a reference.

## Pattern-specific structural checks

### P1 — Palette families

Verify:

- root width `2848px`;
- body width `2688px`;
- family label/reference alignment follows the canonical row geometry;
- normal swatches are `160×156px`;
- an approved anchor card, when one exists, is `224×156px`;
- swatch radius `12px`;
- preview height `80px`;
- horizontal normal-swatch gap `32px`;
- ordering matches approved source sequence;
- no anchor/default is invented.

### P2 — Semantic variable table

For a two-mode system verify:

- root width `2528px`;
- body width `2368px`;
- table columns exactly `820 | 360 | 360 | 828`;
- table header height `56px`;
- default row height `88px` before content-driven wrapping;
- `1px` dividers;
- name-pill and mode-pill anatomy match the construction contract;
- mode swatches are `28×28px`;
- child connector area is `48×48px` and appears only for explicit semantic relationships.

For one mode verify the canonical `820 | 480 | 1068` columns.

For more than two modes verify the required continuation-frame rule rather than compressed extra columns.

### P3 — Specimen rows

Verify:

- correct canonical root width;
- specimen row minimum `120px`;
- `32px` vertical row padding;
- `24px` specimen/annotation gap;
- fixed annotation width for the assigned root width;
- actual connected Style/asset/component specimen at `100%` scale.

### P4 — Measured diagrams

Verify:

- row minimum `144px`;
- `32px` vertical padding;
- `360px` label/specification column;
- `32px` gap;
- true-size measured specimen;
- no convenience scaling.

### P5 — Guidance and comparisons

Verify:

- root width `1600px`;
- centered `800px` reading column;
- comparison outer width `1120px`;
- comparison columns `548px + 24px + 548px`;
- callout/comparison geometry matches the construction contract.

## Visual and semantic checks

- Color specimens must actually render the named value/role.
- Text samples must use the named Text Style.
- Spacing/size/radius/border/layout samples must measure the recorded value.
- Mode samples must resolve under the intended effective mode.
- Alias/source labels must match actual resolved values.
- Usage copy must be specific to each entry.
- Semantic child connectors must match explicit relationships.
- Connected assets/components must remain connected.
- First and last rows of every reference group must be inspected in screenshots.
- Whole-guide screenshots must show clear section hierarchy and no overlap.
- Text, labels, pills, focus rings, menus, and effects must not clip.

## Project-data isolation checks

A framework run fails if it uses project-sensitive values without current-project approval.

Confirm:

- brand/product names come from the current project;
- concrete colors/palettes come from the current project;
- typefaces/weights come from the current project;
- assets/copy/component inventory come from the current project;
- external references were not treated as brand defaults;
- example-project values did not leak into another project.

## Completion record

Keep an execution record containing:

- approved inventory source;
- actual file/node IDs;
- implemented/documented reconciliation;
- canonical pattern and expected geometry;
- missing/stale fields;
- screenshot review references;
- remaining user decisions.

This record is not designer-facing content.

Use `Complete` only when underlying implementation, visible reference, canonical geometry, and screenshot review pass.

Use `Incomplete` for missing content or structural/visual failure. Record blocked project input separately rather than fabricating a value.

## Optional exported coverage evidence

During an authorized build:

```sh
node scripts/validate-documentation.mjs --coverage path/to/coverage.json
```

Use one record per guide/reference group with inspectable bindings or connected assets.

Synthetic fixture example:

```json
{
  "guide": "Synthetic semantic reference",
  "approvedSource": "Synthetic approved fixture",
  "approved": [
    {"name": "color/text/primary", "values": {"Mode A": "#111111", "Mode B": "#EEEEEE"}}
  ],
  "implemented": [
    {"name": "color/text/primary", "nodeId": "fixture-variable", "description": "Main readable text.", "values": {"Mode A": "#111111", "Mode B": "#EEEEEE"}}
  ],
  "documented": [
    {
      "name": "color/text/primary",
      "rowNodeId": "fixture-row",
      "usage": "Use for the highest-emphasis readable text on the normal content surface.",
      "values": {"Mode A": "#111111", "Mode B": "#EEEEEE"},
      "samples": {
        "Mode A": {"nodeId": "fixture-a", "bindsTo": "color/text/primary", "value": "#111111"},
        "Mode B": {"nodeId": "fixture-b", "bindsTo": "color/text/primary", "value": "#EEEEEE"}
      }
    }
  ],
  "requiredSections": ["Text color"],
  "sections": [
    {"name": "Text color", "nodeId": "fixture-section", "screenshotReviewed": true}
  ]
}
```

Synthetic fixture values are test data only and are not project defaults.

The coverage validator checks identity/value consistency. It does not replace structural/screenshot review or project-data isolation review.
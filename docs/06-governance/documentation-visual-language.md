# Documentation Construction Contract

This file defines the deterministic construction grammar for designer-facing Figma documentation generated from this repository.

Read [Project Data Boundary](project-data-boundary.md) first. This contract fixes layout and presentation behavior. It does not fix any project's brand name, palette, typeface, token values, component inventory, or product content.

Canonical numeric geometry is also stored in [documentation-layout-contract.json](documentation-layout-contract.json). Executors must read both files. The JSON file is authoritative for numeric geometry; this Markdown file is authoritative for semantics, behavior, and explanation. If the two conflict, stop and repair the repository contract before generating Figma output.

## Core rule

For the same repository revision and the same approved project inputs, independent runs must produce the same documentation structure and geometry.

External references and example projects may be inspected to understand why a pattern works, but they do not override this contract and must never become a source of project-specific values.

When a user supplies a reference Figma file or screenshot:

1. Inspect the referenced node or screenshot.
2. Identify which canonical pattern below matches the information being documented.
3. Use that canonical pattern exactly.
4. Populate it only with the current project's approved values, names, assets, and copy.
5. Do not invent an additional layout pattern unless the existing patterns cannot represent the approved information. If a new pattern is truly required, stop and obtain approval before adding it to this repository.

## Authority

Designer-documentation construction follows this order:

1. User's latest explicit instruction.
2. Approved project Discovery and supplied production values.
3. This documentation construction contract and `documentation-layout-contract.json`.
4. Item-specific documentation recipe.
5. Existing Figma objects that are confirmed to be the current approved implementation.
6. External reference files.

An existing example-project guide is not allowed to override this contract with its brand-specific values.

## Canonical page order and placement

The `Foundations` page uses this left-to-right order when the items are in scope:

1. `Documentation / Design Tokens`
2. `Documentation / Colors`
3. `Documentation / Color variables`
4. `Documentation / Typography`
5. `Documentation / 4px Grid`
6. `Documentation / Spacing`
7. `Documentation / Grid and Layout`
8. `Documentation / Radius`
9. `Documentation / Borders`
10. `Documentation / Elevation`
11. `Documentation / Iconography`
12. `Documentation / Illustration and Imagery`
13. `Documentation / Motion`
14. `Documentation / Accessibility`
15. `Documentation / Content`

All top-level documentation frames use `Y = 0`. Place the first in-scope frame at `X = 0`. Every following frame begins exactly `200px` after the previous frame's right edge. If an item is excluded, close the gap; do not reserve an empty slot.

Do not arrange Foundation guides vertically, on a free-form grid, or at arbitrary canvas coordinates.

## Canonical frame-width decision table

The root width is selected by Foundation name, not by taste or content-length estimation.

| Guide | Root width |
| --- | ---: |
| Design Tokens | `1600px` |
| Colors | `2848px` |
| Color variables | `2528px` |
| Typography | `1600px` |
| 4px Grid | `1600px` |
| Spacing | `1600px` |
| Grid and Layout | `1664px` |
| Radius | `1600px` |
| Borders | `1600px` |
| Elevation | `1600px` |
| Iconography | `1600px` |
| Illustration and Imagery | `1664px` |
| Motion | `1600px` |
| Accessibility | `1600px` |
| Content | `1600px` |

Do not choose another width because a reference file used one. If an approved item cannot fit its assigned pattern at 100% scale, use a continuation frame with the same width and naming `Documentation / {Foundation} / {Group}` rather than changing the canonical width.

## Canonical documentation chrome

Every Foundation guide uses the same header and footer construction. Brand expression comes from the current project's approved typeface and semantic color roles, not from changing the geometry.

### Root

`Documentation / {Foundation}` is an unpublished regular `FRAME` with:

- fixed width from the width table;
- Hug height after content is complete;
- vertical Auto Layout;
- `0px` root padding;
- `0px` root gap;
- project semantic canvas fill.

### Header

The header is always `476px` high.

```text
Header [Fill width × 476]
  Header card [root width - 64 × 412]
    Context row [root width - 160 × 36]
    Hero row [root width - 160 × 152]
```

Header card construction:

- position: `32px` from every outer edge;
- radius: `20px`;
- padding: top `48px`, right `48px`, bottom `64px`, left `48px`;
- vertical gap between Context row and Hero row: `112px`;
- fill: project semantic subtle/background grouping surface;
- no decorative shadow.

Context row:

- height `36px`;
- horizontal Auto Layout;
- section label, arrow, guide name, flexible divider, compact system metadata;
- `16px` gap between text items unless a flexible divider occupies the remaining width;
- divider: `1px` using the project's subtle border role.

Hero row:

- height `152px`;
- horizontal Auto Layout;
- left content = Fill;
- right metadata column = `440px` only when mode/system metadata materially exists; otherwise keep the column but leave irrelevant fields out rather than changing layout;
- gap between left and right = `64px`.

Hero title:

- current project's approved primary interface typeface;
- nearest approved weight to `600`;
- `60px` size;
- `72px` line height;
- maximum two lines; if the Foundation name exceeds two lines, use the exact Foundation name but reduce only this title to `52/64`, never smaller.

Hero description:

- same typeface;
- nearest approved weight to `400`;
- `20px` size;
- `30px` line height;
- placed `20px` below the title;
- maximum two lines;
- one concise Foundation definition, not project marketing copy.

Metadata labels use `18px` / auto line height / nearest weight `600`. Metadata values use `16px` / `24px` / nearest weight `400`.

### Documentation body

Every guide body uses:

- horizontal padding `80px`;
- top padding `80px`;
- bottom padding `96px`;
- vertical gap between major sections `112px`;
- body content width = root width minus `160px`.

A major section uses vertical Auto Layout with `56px` between the section introduction and its reference/specimen structure.

Section introduction:

- fixed width `900px` on `2528px` and `2848px` guides;
- fixed width `800px` on `1600px` and `1664px` guides;
- vertical gap `12px`.

Section title row:

- title `32px`, nearest weight `600`;
- optional type badge immediately after title with `12px` gap;
- badge radius `8px`, padding `4px 10px`, `14px` text at nearest weight `500`, surface fill and subtle border.

Section description:

- `18px` size;
- `28px` line height;
- nearest weight `400`;
- maximum four lines.

### Footer

Footer construction is fixed:

- height `120px` minimum and Hug if the approved project name wraps;
- horizontal padding `80px`;
- top padding `32px`;
- bottom padding `48px`;
- a `1px` subtle divider across the body content width;
- project/system name on the left;
- `Foundations → {Guide}` on the right;
- use `16px` body text; do not add slogans, traits, URLs, or marketing copy unless explicitly approved for the project.

## Documentation typography mapping

The documentation system uses the project's approved primary interface typeface, but the documentation scale is fixed.

| Role | Size / line | Target weight |
| --- | --- | ---: |
| Hero title | `60 / 72` | `600` |
| Section title | `32 / 40` | `600` |
| Group title | `24 / 32` | `600` |
| Family title | `18 / 28` | `600` |
| Hero description | `20 / 30` | `400` |
| Section description | `18 / 28` | `400` |
| Body / usage | `16 / 24` | `400` |
| Row name / value emphasis | `16 / 24` | `600` |
| Table header / metadata | `14 / 20` | `500` |

Map a target weight to the nearest approved weight numerically. On an equal-distance tie, choose the lighter weight. Do not substitute another font family. If the approved typeface cannot support a readable documentation scale, stop and ask rather than silently changing families.

## Canonical pattern selection

Every Foundation maps to one of the following patterns. The mapping is fixed.

| Foundation | Pattern |
| --- | --- |
| Colors | `P1 — Palette families` |
| Color variables | `P2 — Semantic variable table` |
| Typography | `P3 — Specimen rows` |
| 4px Grid | `P4 — Measured diagrams` |
| Spacing | `P4 — Measured diagrams` |
| Grid and Layout | `P4 — Measured diagrams` |
| Radius | `P4 — Measured diagrams` |
| Borders | `P4 — Measured diagrams` |
| Elevation | `P3 — Specimen rows` |
| Iconography | `P3 — Specimen rows` |
| Illustration and Imagery | `P3 — Specimen rows` |
| Motion | `P3 — Specimen rows` plus prototype examples |
| Accessibility | `P5 — Guidance and comparisons` |
| Content | `P5 — Guidance and comparisons` |
| Design Tokens | `P5 — Guidance and traceability` |

Do not select a different pattern for visual variety.

## P1 — Palette families

Use for primitive/source colors only.

Root width: `2848px`.
Body content width: `2688px`.

Each palette family is one horizontal row:

- family label column: `544px`;
- swatch area begins at `X = 624px` relative to the root after the body left edge is accounted for;
- family rows are `220px` apart vertically;
- family title `18/28`, target weight `600`;
- family description `16/24`, target weight `400`, placed `8px` below the title.

Normal swatch card:

- `160 × 156px`;
- radius `12px`;
- `1px` subtle inside border;
- preview area `160 × 80px`;
- label inset `12px` left/right;
- step/name at `Y = 92px`, `18/28`, target weight `500`;
- resolved value at `Y = 120px`, `16/24`, target weight `400`;
- horizontal gap between normal swatches `32px`.

When the approved palette defines one anchor/default step, that card is `224 × 156px` and contains a `10 × 10px` anchor marker at the top-right with an `8px` inset. If no anchor/default is approved, all cards remain `160px` wide. Do not invent an anchor.

Order values exactly by the approved source sequence. Do not reorder by luminance, usage, or aesthetics.

Contrast labels are omitted by default. Add them only when the project explicitly requires palette-pair contrast documentation. If added, compute them against a named foreground/background pair; never display an unexplained `AA` or `AAA` label.

## P2 — Semantic variable table

Use for semantic variables with appearance modes.

Root width: `2528px`.
Body content width: `2368px`.

Every semantic family is its own major section. Use the actual approved semantic groups, in the order defined by the owning Foundation specification. Do not import group names from an example project.

Table header:

- height `56px`;
- exact columns: `820px | 360px | 360px | 828px`;
- labels: `Name | {Mode 1} | {Mode 2} | Usage` for a two-mode system;
- `14/20`, target weight `500`;
- bottom divider `1px` subtle border.

If the approved system has one mode, use `820px | 480px | 1068px` with `Name | Value | Usage`.

If the approved system has more than two modes, do not squeeze additional columns into this table. Create one continuation frame per additional mode pair using the same `2528px` root and the same first/usage column widths. Name it `Documentation / Color variables / {Mode group}`.

Default data row:

- height `88px`;
- exact columns matching the header;
- vertical center alignment;
- `1px` divider after each row;
- usage text `16/24`, target weight `400`.

Name pill:

- Hug width;
- height `40px` maximum, normally `39px` from font metrics;
- radius `8px`;
- padding `8px 12px`;
- surface fill;
- `1px` subtle border;
- token text `16/24`, target weight `600`.

Mode token pill:

- Hug width;
- height `48px` maximum, normally `46px` from font metrics;
- radius `12px`;
- padding top/bottom `8px`, right `12px`, left `8px`;
- internal gap `8px`;
- swatch `28 × 28px`;
- source label `16/24`, target weight `600`;
- normal project documentation surface for Mode 1;
- inverse/dark documentation surface for Mode 2 only when the approved mode is dark; otherwise use the normal documentation surface.

Parent/child hierarchy is shown only when defined by the owning semantic contract.

Child row name cell:

- connector area `48 × 48px` placed at the left of the name cell;
- vertical connector `1px × 36px` at `X = 12px`;
- horizontal connector `24px × 1px` beginning at `X = 12px`, `Y = 24px`;
- `12px` gap between connector area and child name pill.

Do not create connectors from string similarity alone. Parent/child relationships must be explicitly defined in the Foundation specification.

## P3 — Specimen rows

Use for Typography, Elevation, Iconography, Illustration and Imagery, and Motion.

Root width comes from the canonical width table.

Each reference group uses:

- section intro as defined above;
- specimen list width = body content width;
- each specimen row minimum height `120px`;
- `32px` vertical padding;
- `24px` horizontal gap between specimen and annotation;
- `1px` subtle divider between rows.

The annotation column is fixed `440px` on `1600px` guides and `480px` on `1664px` guides. The specimen occupies the remaining width. Annotation order is `Name → resolved specification → usage`.

Do not turn every specimen into a separate card. Use cards only when the asset itself requires a bounded surface to be legible.

Typography samples use the actual Text Style. Elevation samples use the actual Effect Style. Icons and connected assets remain connected. Motion examples use approved prototype behavior and include the reduced-motion replacement.

## P4 — Measured diagrams

Use for 4px Grid, Spacing, Grid and Layout, Radius, and Borders.

Root width comes from the canonical width table.

Each measured reference row uses:

- minimum height `144px`;
- `32px` vertical padding;
- label/specification column `360px`;
- measured specimen area = remaining width;
- `32px` gap;
- `1px` subtle divider between rows.

Measurement labels use `14/20`, target weight `500`. Primary value labels use `16/24`, target weight `600`. Explanations use `16/24`, target weight `400`.

Render dimensions at true size. Do not scale bars, target bounds, grid columns, corner radii, or stroke widths for convenience. If a true-size specimen cannot fit, use the assigned wider root or a continuation frame.

## P5 — Guidance and comparisons

Use for Design Tokens, Accessibility, and Content.

Root width: `1600px`.

Reading column is fixed `800px` and centered within the body content width.

Guidance section:

- vertical gap `16px` between heading, explanation, and examples;
- body text `16/24`;
- decision callout uses `24px` padding, `12px` radius, subtle surface fill, no shadow.

Comparison block:

- outer width `1120px`;
- two columns `548px` each;
- gap `24px`;
- each side padding `24px`;
- each side vertical gap `16px`;
- correct/incorrect labels are textual and do not rely only on green/red color.

Do not use equal-card dashboards for prose-heavy guidance.

## Project color binding for documentation chrome

Documentation chrome must use the current project's semantic roles, never concrete example-project hex values.

Use these role intentions and map them to the exact approved semantic tokens in the project:

- root canvas → canvas/base background;
- header card and quiet callouts → subtle/grouping background;
- pills/cards → normal surface;
- primary text → primary text;
- supporting text → secondary text;
- dividers/strokes → subtle border;
- inverse mode pill surface → inverse or dark-mode surface appropriate to the mode;
- swatch itself → the exact documented variable or primitive.

If the project's token names differ, bind by approved purpose, not by copying names from another project. If an equivalent role does not exist, resolve the missing Foundation role before documentation.

## Copy rules

Visible documentation copy is project-specific but its function is fixed.

- Foundation definition: one sentence.
- Section description: one or two sentences explaining the decision represented by that section.
- Row usage: one concise sentence specific to that row.
- No filler, marketing slogans, external-system wording, or generic repeated usage.
- Do not mention an example project's brand in reusable repository instructions.

## Canvas and continuation rules

- All top-level coordinates and frame dimensions are whole-number multiples of `4px` except controlled rendering details already allowed by the 4px construction standard.
- Continuation frames use the same root width as the owning guide.
- Place a continuation immediately after the owning guide with the same `200px` canvas gap.
- Continuation header uses the same chrome and title `{Foundation} / {Group}`.
- Do not resize or reposition unrelated guides to create decorative compositions.

## Reference adaptation rule

A reference may help identify which canonical pattern to use, but once selected, the repository pattern controls the build.

Do not copy a reference's:

- brand name or product name;
- typeface family;
- palette or concrete color values;
- token naming;
- component inventory;
- proprietary copy;
- logos, links, resources, or badges;
- arbitrary frame width, column width, padding, or gap that conflicts with this contract.

The reference answers why the pattern is understandable. This repository defines how the pattern is constructed.

## Screenshot QA

Screenshot review is mandatory after each completed guide.

Review at a scale where the whole section hierarchy is visible, then inspect the first and last rows at readable scale.

Fail the guide when any of these are true:

- root width differs from the canonical width without an approved repository change;
- header is not the canonical `476px` shell;
- body padding or `112px` major-section rhythm differs;
- pattern selection does not match the canonical mapping;
- semantic table columns differ from the required widths;
- rows drift in height or alignment without content-driven wrapping;
- parent/child connectors do not represent an explicit semantic relationship;
- text or pills clip;
- top-level frames are not aligned at `Y = 0` with `200px` horizontal gaps;
- project-specific brand values from an example have leaked into another project;
- visual completion depends on an unapproved discretionary layout decision.

A technically complete guide that violates the canonical construction contract is incomplete.
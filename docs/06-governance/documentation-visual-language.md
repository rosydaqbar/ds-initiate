# Documentation Visual Language

This file defines the visual and structural grammar for designer-facing Figma documentation generated from this repository.

It is intentionally **not** a template to copy literally. A reference system may be inspected for information architecture, hierarchy, spacing rhythm, and presentation patterns, but the generated documentation must remain faithful to the approved project's own tokens, typography, components, naming, and scope.

## Core rule

Use external references as **structural evidence**, not as a source of brand decisions.

When a user supplies a Figma reference or screenshot:

1. Inspect the referenced Figma nodes with design context when available.
2. Inspect at least one screenshot at a readable scale.
3. Identify the information pattern that makes the reference useful.
4. Compare that pattern with the actual Foundation or component being documented.
5. Reuse only the parts that improve comprehension for the current system.
6. Preserve the approved brand, token model, naming, typography, component appearance, and 4px construction rules.
7. Screenshot-QA the generated result against the reference for hierarchy and clarity, not pixel-for-pixel similarity.

Do not infer the reference's token architecture, brand colors, typography, component taxonomy, proprietary copy, or exact frame dimensions as requirements for the current project.

## Documentation grammar

Designer-facing guides should feel like one coherent publication even when different Foundations require different presentation patterns.

Use these recurring elements when they help:

- A restrained page header with breadcrumb/context, page title, short explanation, and compact system metadata when useful.
- Generous separation between conceptual sections.
- Strong section titles with concise explanatory copy directly below.
- Thin dividers and aligned columns rather than decorative cards for reference-heavy content.
- Compact pills, swatches, measurements, or connected specimens when they communicate a value more efficiently than prose.
- Hierarchy through spacing, indentation, grouping, and connector lines before adding extra boxes.
- Visible usage guidance next to the exact value or specimen it explains.
- Original project wording; never reproduce another design system's proprietary descriptions.

Documentation chrome should remain visually quieter than the system being documented.

## Choose the structure from the information

Do not force one layout onto every Foundation.

### Use a hierarchical reference table when

- designers need to look up many semantic roles quickly;
- Light/Dark or other modes must be compared side by side;
- parent/child state relationships matter;
- every row needs its own usage explanation.

Recommended columns for semantic variables:

`Name | Light mode | Dark mode | Usage`

Adapt the mode columns to the approved system. Do not add a mode that does not exist.

### Use horizontal swatch families when

- documenting primitive color ramps or comparable visual scales;
- sequence and progression matter more than usage hierarchy;
- each item benefits from an immediately visible value.

### Use measured rows or diagrams when

- documenting spacing, sizing, radius, border, grids, target bounds, or layout behavior;
- the physical dimension is the information.

### Use specimen rows when

- documenting typography, icons, elevation, imagery, motion, or connected component behavior;
- the applied visual result is more useful than a table cell.

### Use prose and comparisons when

- documenting accessibility, content, do-and-don't guidance, or decision rules;
- the key information is behavioral rather than numeric.

A guide may combine these structures when the Foundation contains multiple kinds of information.

## Semantic-variable table pattern

For semantic tokens, follow this pattern when it matches the token model:

```text
Section / {Semantic family}
  Heading row
    {Family title}
    Variables [small badge]
  Description
  Table header
    Name
    Light mode
    Dark mode
    Usage
  Row / {root role}
  Row / {child state}
  Row / {child state}
```

### Name column

- Show the searchable semantic token name without redundant collection prefixes when the page context already establishes the collection.
- Preserve the exact token identity in Figma layer data or adjacent metadata when needed for implementation traceability.
- Use indentation and a light connector line only when a real semantic relationship exists.
- Typical valid parent/child relationships include `default → hover / pressed / disabled`, a status family with `background / text / icon / border`, or another explicitly defined state family.
- Do not invent hierarchy just to make the table look more like a reference.

### Mode columns

- Show the resolved primitive source using a compact pill with a color swatch and familiar source name such as `brand-500` or `neutral-900`.
- Light-mode pills may use the normal documentation surface.
- Dark-mode pills may use a dark neutral container when that makes the source swatch and label easier to read; the pill is documentation chrome, not a new token.
- Preserve the actual mode resolution, including equal values across modes.
- Do not replace designer-facing source names with alias IDs.

### Usage column

- Write one concise sentence for the specific role.
- State what the token is for, not how its hexadecimal value looks.
- Add a misuse restriction only when it materially prevents confusion.
- Do not repeat one generic paragraph for an entire token family when row-specific meaning differs.

### Row styling

- Use subtle horizontal dividers.
- Keep row height compact but allow wrapping when usage text needs it.
- Maintain stable column alignment across the section.
- Avoid enclosing every cell in a heavy card.
- Use whitespace to separate semantic groups more strongly than individual rows.

## Primitive color pattern

Primitive colors are source material, not component permissions.

A palette guide should normally show:

- a family name and one-sentence role;
- the complete approved ramp or base/alpha group;
- one compact swatch card per value;
- step/name and resolved hex or alpha;
- an optional default/anchor indicator when the approved system defines one;
- contrast information only when it is computed for an explicit foreground/background pairing and genuinely useful.

Do not make the primitive guide look like the semantic-variable table unless that is clearer for the actual palette.

## Page width and composition

There is no single mandatory root width.

Choose a width from the content while keeping all structural measurements on the 4px system:

- `1600px` is a good default for prose-heavy or specimen-focused guides.
- Wider reference guides may use `2528px`, `2848px`, or another 4px-aligned width when multiple reference columns or long token names need room.
- Do not shrink text or compress columns to preserve a predetermined frame width.
- Keep top-level documentation frames separated on the canvas and prevent overlap after widths change.

The visual rhythm should remain consistent even when root widths differ.

## Reference adaptation rule

When a reference resembles Untitled UI or another mature system, extract patterns such as:

- section-first information architecture;
- strong but quiet typography hierarchy;
- large breathing room before dense reference data;
- compact token pills and swatches;
- hierarchical naming with connectors where relationships exist;
- clean tabular alignment;
- restrained borders and backgrounds.

Do **not** automatically copy:

- the reference's exact token names;
- its brand palette;
- its font family;
- its component inventory;
- its exact root width or spacing values;
- its website links, resources, logos, badges, or copy;
- sections that do not exist in the current design system.

The reference answers **how information can be presented**. The current project answers **what information exists and what it means**.

## Consistency across generations

Before generating or revising designer-facing documentation:

1. Read this file.
2. Inspect any existing approved guide in the target Figma file before creating a new one.
3. Reuse its documentation chrome, typography hierarchy, row styling, pill styling, divider treatment, and section rhythm when they remain appropriate.
4. Derive content groups from the current specification rather than from the reference file.
5. Use the same vocabulary and token display conventions already established in the target file.
6. Do not silently redesign previously approved documentation language while generating a new Foundation.

When the current file already contains an approved documentation pattern, that pattern has higher authority than a generic example in this repository.

## Screenshot QA

Every generated guide must receive a visual review at a readable scale.

Check:

- section hierarchy is obvious without zooming into individual layers;
- the reference does not feel like a wall of unrelated rows;
- related child states visibly belong to their parent;
- pills and swatches remain legible in both light and dark examples;
- column alignment is stable;
- usage text is readable and not clipped;
- no top-level frames overlap after resizing;
- the guide still looks like the approved project's documentation, not a clone of the reference system.

If the screenshot looks structurally random even when all data is technically present, the documentation has failed and must be reorganized before acceptance.

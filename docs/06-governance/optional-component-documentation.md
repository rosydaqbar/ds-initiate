# Optional Component Documentation

This standard defines the optional designer-facing Figma guide for a finished Atom, Molecule, or Organism. It is created only after the named component passes QA and the user explicitly approves documentation for that component.

Foundations are excluded from this opt-in rule because their guides are mandatory.

Read [Project Data Boundary](project-data-boundary.md) and [Documentation Construction Contract](documentation-visual-language.md) first.

## Component completion boundary

A component is complete when its production Figma objects, variants, properties, variables, interactions, publishing information, and internal QA are complete. A documentation frame is not required for component completion.

Use this sequence:

1. Build and internally validate the component.
2. Ask: `The {Component} component is complete. Should I build its optional designer documentation from {filename}.md?`
3. If declined, create nothing.
4. If approved, inspect the finished public API and build/update `Documentation / {Component}`.

Approval applies only to that named component.

## Project boundary

The guide uses the current project's approved typography, semantic color roles, component instances, and copy. It must not inherit another example project's brand name, palette, font, asset treatment, or product language.

The framework defines documentation construction. The current project supplies the component's visual identity.

## Canonical component-guide shell

Every approved component guide uses the same shell.

Root:

- regular unpublished `FRAME`;
- fixed width `1600px`;
- Hug height;
- vertical Auto Layout;
- project semantic canvas fill;
- no root padding/gap.

Placement:

- on the existing `Components` page;
- outside production component sections;
- top-level X/Y divisible by `4px`;
- `200px` horizontal gap between sibling documentation frames;
- all sibling component-guide frames aligned to the same top Y coordinate within their documentation row.

Header/footer:

- use the exact canonical `476px` header and canonical footer from [Documentation Construction Contract](documentation-visual-language.md);
- context label uses the component's Atomic level (`Atoms`, `Molecules`, or `Organisms`);
- hero title = component name;
- hero description = one-sentence purpose;
- do not change header geometry for individual components.

Body:

- horizontal padding `80px`;
- top padding `80px`;
- bottom padding `96px`;
- `112px` gap between major sections;
- body width `1440px`.

Section intro:

- fixed width `800px`;
- `12px` internal gap;
- section title `32/40`, target weight `600`;
- description `18/28`, target weight `400`.

Documentation typeface uses the current project's approved primary interface typeface with the deterministic weight-mapping rule in the canonical construction contract.

## Required section order

When documentation is approved, use this exact order. Omit a conditional section only when its capability does not exist in the finished public API.

1. `Overview`
2. `Hierarchy` or the component's named primary design decision from its specification
3. `Anatomy and dimensions`
4. `Public properties`
5. `Appearance modes` — conditional
6. `States and options`
7. `Responsive behavior` — conditional
8. `Do and don't` — conditional only when the item specification defines a real misuse pattern
9. `Accessibility`

Do not reorder sections for variety.

## Overview

Use an `800px` reading column followed by one connected recommended instance.

Overview copy contains:

- what the component is;
- when to use it;
- when not to use it;
- why the shown instance is the recommended/default starting point.

Recommended instance block:

- width `1120px` maximum;
- connected instance at `100%` scale;
- `32px` padding;
- `24px` internal gap;
- `12px` radius;
- project subtle/grouping surface;
- no decorative shadow unless the component itself owns one.

## Primary design-decision section

The item specification supplies one stable decision name, for example `Hierarchy`, `Selection behavior`, `Validation`, `Placement`, or `Action priority`.

Use focused connected-instance rows. Do not invent a new decision title during Figma execution.

Instance row:

- horizontal Auto Layout with wrap;
- width `1120px` maximum;
- `24px` row/column gap;
- all instances at `100%` scale.

Instance annotation:

- label `16/24`, target weight `600`;
- resolved option/value `14/20`, target weight `500` when useful;
- usage sentence `16/24`, target weight `400`;
- `8px` between label and value;
- `12px` before usage sentence.

## Anatomy and dimensions

Use one connected instance with visible anatomy labels, followed by the complete size/specification table.

Size/specification table uses body width `1120px` and exact columns:

- Property `280px`
- Value `280px`
- Applies to `240px`
- Usage/constraint `320px`

Header height `56px`. Default row height `72px` and grows only when content wraps. `1px` divider between rows.

Include every applicable public measurement:

- resolved height;
- min/max width;
- padding;
- gap;
- radius;
- icon size;
- Text Style;
- minimum interaction target;
- any other public dimension required by the item specification.

Do not omit a measurement because it is visible in Figma Inspect.

## Public properties

Document every public property.

Property table uses width `1120px` and exact columns:

- Property `280px`
- Type `160px`
- Default `240px`
- Options/constraint `440px`

Header height `56px`. Default row height `72px`, Hug when wrapping. `1px` subtle divider.

Requirements:

- every public Boolean shows default and both outcomes;
- every Text property shows default, required/optional state, wrapping/truncation behavior, and realistic example;
- every instance-swap property shows default, allowed family, and constraints;
- every public variant axis shows all public values and default.

Do not show private helpers or private properties.

## Appearance modes

Include only when the approved component materially differs by appearance mode.

Use two equal connected-instance columns inside an `1120px` row:

- each column `548px`;
- gap `24px`;
- instance at `100%` scale;
- mode label plus one sentence describing the material difference.

For more than two approved modes, create another row rather than compressing columns.

## States and options

Show each public state once in the most representative public style. Add another style row only when state behavior materially changes.

Use connected instances at `100%` scale with visible state labels and one usage/trigger sentence per state.

Never recreate the entire component-set Cartesian product unless the item specification explicitly states that cross-axis interaction changes meaning.

## Responsive behavior

Include only for components that reflow, collapse, scroll, resize, or replace content across approved layout ranges.

Use actual-size connected instances. Do not scale them to fit. If a specimen cannot fit within `1440px` body width, create `Documentation / {Component} / Responsive` as a `1664px` continuation frame using the same canonical header/footer and `200px` canvas gap.

## Do and don't

Create only when the component specification defines a real misuse pattern.

Comparison outer width `1120px`:

- Do column `548px`;
- Don't column `548px`;
- gap `24px`;
- `24px` padding inside each side;
- `16px` internal gap;
- surface fill and subtle border;
- connected public instances only.

Never manufacture an impossible component variant. The incorrect example uses a valid public option in the wrong context/content/composition.

## Accessibility

Accessibility block:

- width `800px`;
- `24px` padding;
- `16px` internal gap;
- `12px` radius;
- subtle/grouping surface.

State:

- approved accessibility target;
- design checks actually performed;
- remaining implementation checks;
- component-specific designer responsibilities.

Do not claim production keyboard or screen-reader behavior from a Figma specimen.

## Keep implementation data out of the visible guide

Do not place these in the designer-facing guide:

- variant-count calculations;
- private helper matrix;
- raw alias traversal or binding dumps;
- internal node/variable IDs;
- code syntax metadata;
- raw accessibility logs;
- screenshot/QA logs;
- complete Cartesian variant matrix.

Public names, dimensions, options, semantic references, and pair-specific evidence remain visible when they help a designer choose correctly.

## Source of truth

Build from the finished Figma component and its owning Markdown specification.

- Use connected instances; never detach or redraw.
- Read actual public variants/properties before documenting.
- If implementation conflicts with the approved specification, fix the component first or obtain explicit scope change.
- Do not hide missing required capability by omitting it from documentation.

## Documentation QA

A component guide fails when:

- root width or canonical shell differs from the framework contract;
- required section order changes;
- displayed instances are detached or scaled;
- a public axis/property/value is missing;
- a private helper is exposed;
- anatomy/dimensions do not match the finished component;
- text, focus, menus, shadows, or overlays clip;
- project-specific values from an example have leaked into the current project;
- screenshot structure is inconsistent with other generated guides;
- the guide becomes a dashboard or raw implementation dump instead of a usage reference.

Use [Documentation Acceptance](documentation-acceptance.md) to reconcile approved, implemented, and documented public choices.
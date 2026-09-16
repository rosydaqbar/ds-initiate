# Design System Executor

## Role

Use this framework to turn approved project input and the Markdown specifications into deterministic, build-ready Figma output while preserving the Atomic Design structure and mandatory 4px construction rule.

The framework defines the generation method. The current project defines its brand and product-specific values.

Do not modify Figma unless the user explicitly requests a Figma build or update.

## Scope

Supported build order:

1. Discovery
2. Foundations
3. Atoms
4. Molecules
5. Organisms

Patterns may be documented only when requested. Do not introduce Templates or Pages as Atomic Design levels, product screens, or product-surface categories.

## Read before generation

Read these files before completing a build or specification:

1. `README.md`
2. `docs/README.md`
3. `docs/00-discovery/brand-style-questionnaire.md`
4. `docs/06-governance/project-data-boundary.md`
5. `docs/06-governance/figma-construction-standard.md`
6. `docs/06-governance/documentation-visual-language.md`
7. `docs/06-governance/documentation-layout-contract.json`
8. `docs/06-governance/component-specification-format.md`
9. `docs/06-governance/foundation-documentation.md`
10. `docs/06-governance/optional-component-documentation.md`
11. The target item specification and every dependency linked from it

The JSON layout contract is the numeric source of truth for documentation geometry. The Markdown construction contract explains semantics and behavior. If they conflict, stop and report the exact conflict instead of choosing one silently.

## Authority order

When information conflicts, use this order:

1. User's latest explicit instruction.
2. Approved Discovery brief or approved answers for the current project.
3. Existing production values/assets explicitly supplied for the current project.
4. Framework construction contracts.
5. Existing confirmed Figma implementation for the current project.
6. Target item specification.
7. External references and example projects.

External references never override the current project's approved brand data.

Do not silently choose between two approved inputs that disagree. State the exact conflict and ask which value wins.

## Project input boundary

Follow [Project Data Boundary](docs/06-governance/project-data-boundary.md).

Do not infer or import these from another project:

- brand or product identity;
- audience or business rules;
- concrete colors or palette values;
- typeface family or licensed weights;
- logos, icon artwork, photography, illustrations, or brand assets;
- appearance-mode requirement;
- control/surface radius character, density, shadow character, or motion character;
- languages or RTL support;
- first-release component scope;
- product-specific copy or behavior;
- Figma node IDs, variable IDs, or file IDs.

If required project input is missing, ask the smallest specific question needed to continue.

## Determinism requirement

For the same framework revision and the same approved project input, independent runs should make the same structural decisions.

Resolve a construction decision through an exact measurement, object/layer recipe, fixed ordering rule, decision table, calculation, or blocking question. Do not replace a defined structural rule with free-form visual taste.

## Discovery

Use the ten-question Discovery file when the visual direction is not approved.

Record exact project values when supplied. Mark unresolved implementation values `REQUIRES APPROVAL` or `BLOCKED` rather than filling gaps from an example project.

Wait for approval before creating project-sensitive Foundations.

## Foundations

Do not build components against missing Foundation roles.

Create only approved Foundation collections and values. Components bind to semantic roles rather than directly to raw primitives unless the approved project architecture explicitly defines otherwise.

Every completed Foundation includes:

- required approved input;
- exact Figma values, Styles, assets, or rules;
- names, modes, types, scopes, and aliases where applicable;
- 4px construction behavior;
- QA;
- mandatory designer-facing documentation.

## Foundation documentation

Read `docs/06-governance/documentation-visual-language.md` and `docs/06-governance/documentation-layout-contract.json`.

Use their exact rules for:

- Foundation page order;
- canvas placement;
- root widths;
- shared header/footer geometry;
- documentation typography scale;
- Foundation → pattern mapping;
- semantic-table anatomy;
- palette-swatch dimensions;
- measured/specimen/guidance layouts;
- screenshot QA.

Populate the fixed construction with the current project's approved values. Do not copy another project's brand identity or arbitrary reference geometry.

## Components

Build Atoms before Molecules and Molecules before Organisms.

For each component:

- use one component when there is no public visual axis;
- use one component set when the public Cartesian product is `≤30` variants;
- split public sets by primary visual style when the product is `>30`;
- use private nested components for repeated independent internal responsibilities;
- use Text properties for editable copy;
- use Boolean properties for optional visibility;
- use instance-swap properties for replaceable icons or approved nested content;
- do not create variants for arbitrary copy, icon choice, or simple visibility.

Every component specification contains:

1. Purpose, Atomic level, library placement, and Figma location.
2. Exact public/private objects.
3. Final layer tree and resizing behavior.
4. Exact construction table.
5. Variant axes, defaults, and calculation.
6. Public properties and defaults.
7. Semantic variable/Style bindings.
8. Prototype behavior.
9. Responsive behavior when relevant.
10. Internal 4px, content, interaction, and accessibility QA.
11. Optional designer-documentation recipe derived from the actual public API.

## Optional component documentation

Component guides are optional after component QA. Ask before building each named component guide.

If approved, follow `docs/06-governance/optional-component-documentation.md` and the canonical documentation shell.

## Figma execution

When the user explicitly authorizes a Figma build or update:

1. Inspect the target file first.
2. Complete and approve Discovery before project-sensitive visual mutation.
3. Build Foundations before dependent components.
4. Build documentation from the canonical framework contracts.
5. Mutate sequentially, one validated unit at a time.
6. Reuse exact returned IDs; never guess IDs.
7. Validate structure and appearance after each unit.
8. Screenshot-review mandatory Foundation documentation.
9. Keep implementation logs out of designer-facing frames.
10. Do not automatically create optional component documentation.

Specification completion does not authorize Figma mutation. Figma inspection does not authorize Figma mutation.

## Output QA

Before reporting a generated item complete:

- confirm approved, implemented, and documented values agree;
- recalculate variant totals;
- confirm every public set contains `≤30` variants;
- confirm structural dimensions follow the 4px rule;
- confirm components use approved semantic variables and Styles;
- confirm Foundation documentation uses the assigned canonical pattern and width;
- confirm top-level Foundation guides use canonical order, `Y=0`, and `200px` horizontal gaps;
- confirm semantic variable tables use the required columns and row anatomy;
- confirm screenshots show correct hierarchy, alignment, wrapping, and relationship cues;
- confirm no example-project identity has been used as current-project input.

Never claim a Figma component, variable, accessibility check, screenshot review, or metadata check is complete unless it was actually performed.

## Reporting

Report completed scope, validation actually performed, unresolved user decisions, and the next dependency-safe step.

# Design System Specification Orchestrator

## Role

Act as the repository orchestrator. Turn approved project input and Markdown specifications into deterministic, build-ready Figma instructions while preserving the Atomic Design structure and mandatory 4px construction rule.

This repository is reusable infrastructure. It owns the **generation method**, not the generated project's brand.

The default task in this repository is specification work. Do not modify Figma unless the user explicitly requests a Figma build or update.

## Non-negotiable project boundary

Read [Project Data Boundary](docs/06-governance/project-data-boundary.md) before any generation or repository maintenance task.

Never promote an example project's values into reusable defaults. The repository must not lock a project name, brand hex, palette, typeface, logo, imagery style, product copy, component inventory, or target Figma identity merely because one example produced a successful result.

Reusable rules may lock construction grammar such as page order, frame geometry, documentation patterns, Auto Layout behavior, 4px measurements, component-property strategy, variant limits, QA sequence, and acceptance criteria.

Project-sensitive values come only from approved Discovery, explicitly supplied production assets/values, or a proposal the user explicitly approves before Figma mutation.

## Scope

Supported build order:

1. Discovery
2. Foundations
3. Atoms
4. Molecules
5. Organisms

Patterns may be documented only when requested. Do not introduce Templates or Pages as Atomic Design levels, product screens, or product-surface categories.

## Read before editing

Read these files before completing any specification:

1. `README.md`
2. `docs/README.md`
3. `docs/00-discovery/brand-style-questionnaire.md`
4. `docs/06-governance/project-data-boundary.md`
5. `docs/06-governance/figma-construction-standard.md`
6. `docs/06-governance/documentation-visual-language.md` for designer-facing Figma documentation
7. `docs/06-governance/component-specification-format.md` for components
8. `docs/06-governance/foundation-documentation.md` for Foundations
9. `docs/06-governance/optional-component-documentation.md` for approved component guides
10. The target item file and every dependency linked from it

## Authority order

When information conflicts, use this order:

1. User's latest explicit instruction.
2. Approved Discovery brief or approved answers for the current project.
3. Existing production values/assets explicitly supplied by the user.
4. Reusable governance contracts in this repository.
5. Existing confirmed Figma implementation for the current project.
6. Target item specification.
7. External references and example projects.

External references never override the current project's brand data.

Do not silently choose between two approved inputs that disagree. State the exact conflict and ask which value wins.

## Determinism requirement

For the same repository revision and the same approved project inputs, independent runs must make the same framework decisions.

Do not leave a construction decision as free-form taste when it can be expressed as:

- an exact measurement;
- an exact object/layer recipe;
- a deterministic decision table;
- a fixed ordering rule;
- a calculation;
- or a blocking question.

Avoid normative phrases such as `choose what looks best`, `use an appropriate width`, `similar to`, `when useful`, `adapt freely`, or `use judgment` when they control structure, layout, or implementation.

## What the orchestrator may resolve automatically

Resolve without asking when the answer follows directly from approved input and repository rules:

- Atomic level and dependency order.
- One component versus component set.
- Public component sets versus private helper components.
- Variant calculation and 30-variant limit.
- Auto Layout direction, sizing, padding, gap, alignment, and layer order when specified by the contract.
- 4px-aligned structural measurements.
- Text, Boolean, and instance-swap component-property strategy.
- Semantic-variable and Style binding strategy.
- Interaction-state and responsive construction defined by the item spec.
- Documentation page order, root width, shell geometry, pattern selection, table anatomy, row geometry, and canvas placement from the Documentation Construction Contract.
- Internal QA procedure.
- Cross-links, naming consistency, and Markdown formatting.

## What the orchestrator must not guess

Do not infer or import from an example project:

- Brand or product identity.
- Audience or business rules.
- Brand colors, palette values, neutral values, or prohibited colors.
- Typeface family or licensed weights.
- Logos, icon artwork, photography, illustrations, or brand assets.
- Appearance-mode requirement when the current project has not approved it.
- Control/surface radius character, density, shadow character, or motion character when unresolved.
- Accessibility target stricter or different from the approved default.
- Languages or RTL support.
- First-release component scope.
- Product-specific copy or behavior.
- Figma node IDs, variable IDs, file IDs, or completed QA evidence.

If a required project-sensitive input is missing, ask the smallest specific question required to continue.

## Gap audit

Before editing, inspect the target and dependencies for:

- `TODO`, `TBD`, unresolved placeholders, empty table cells, or placeholder copy;
- missing exact deliverable type;
- missing or incorrect variant calculations;
- variants incorrectly used for editable text, icon choice, or visibility;
- missing layer types, resizing rules, measurements, or Auto Layout behavior;
- structural values outside the 4px rule;
- generic or hard-coded component colors;
- text/icons sharing the wrong semantic role;
- missing interaction, responsive, or accessibility requirements;
- Foundation documentation that is absent or treated as optional;
- optional component documentation that does not match the finished API;
- documentation whose structure conflicts with the canonical Documentation Construction Contract;
- an example project's brand values acting as defaults;
- broken local links or inconsistent names.

## Completion workflow

### 1. Confirm target and scope

Identify exact requested files and Atomic levels. For whole-system work, follow dependency order and finish one level before the next.

### 2. Resolve Discovery

Use the ten-question Discovery file when the visual direction is not approved. Record exact project-sensitive values when supplied.

If a brand-sensitive implementation value remains unresolved, do not substitute a value from another project. Ask or present a proposal for explicit approval.

### 3. Complete Foundations

Do not build components against missing Foundation roles.

Create only approved Foundation collections and values. Components bind to semantic roles, not directly to primitive raw values.

Every completed Foundation specification defines:

- required approved input;
- exact Figma values/styles/assets/rules to create;
- names, modes, types, scopes, and aliases where applicable;
- 4px construction behavior;
- internal QA;
- mandatory designer-facing documentation content.

### 4. Build mandatory Foundation documentation

Read [Documentation Construction Contract](docs/06-governance/documentation-visual-language.md).

The contract deterministically defines:

- Foundation page order;
- top-level canvas placement;
- exact root widths;
- exact shared header/footer geometry;
- documentation typography scale;
- exact pattern assigned to each Foundation;
- semantic table columns and row anatomy;
- palette swatch dimensions;
- measured/specimen/guidance layouts;
- screenshot QA.

Do not replace these with another reference's arbitrary geometry.

Populate the fixed construction with the current project's approved values and semantic roles. Project-specific visual data remains dynamic; layout grammar is fixed.

### 5. Complete components in dependency order

Use Atoms before Molecules and Molecules before Organisms.

For each component:

- one component when there is no public visual axis;
- one component set when the full visual Cartesian product is `≤30`;
- multiple public sets split by primary visual style when `>30`;
- private nested components for repeated internal responsibilities;
- Text properties for editable copy;
- Boolean properties for optional visibility;
- instance-swap properties for replaceable icons or approved nested content;
- never variants for arbitrary copy, icon choice, or simple visibility.

Every component spec contains:

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
11. Optional designer-documentation recipe derived from the actual API.

### 6. Optional component documentation

Component guides are optional after component QA. Ask before building each named component guide.

If approved, follow [Optional Component Documentation](docs/06-governance/optional-component-documentation.md) and the canonical documentation shell. Do not invent a new documentation visual language for components.

### 7. Propagate shared changes

After changing a shared rule, update every affected index, governance file, item recipe, validation script, and executor example in the same task. Do not leave old and new contracts active simultaneously.

### 8. Validate

Before reporting completion:

- confirm requested files contain required sections;
- recalculate variant totals;
- confirm public sets are `≤30` variants;
- confirm structural dimensions follow 4px rules;
- confirm components use semantic variables and approved Styles;
- confirm Foundation documentation is mandatory and component documentation optional;
- confirm each guide uses its assigned canonical pattern and width;
- confirm top-level Foundation guides use fixed page order, `Y=0`, and `200px` horizontal gaps;
- confirm semantic variable tables use required column widths and row anatomy;
- confirm screenshots show correct hierarchy, alignment, wrapping, and relationship cues;
- confirm no example-project brand, color, font, target Figma identity, or product copy became a reusable default;
- confirm local Markdown links resolve;
- run repository validation scripts;
- review final diff and preserve unrelated user changes.

Never claim a Figma component, variable, accessibility check, screenshot review, or metadata check is complete unless it was actually performed.

## Figma execution boundary

When explicitly authorized to implement in Figma:

1. Read applicable Figma skills before tool use.
2. Inspect the target file before mutation.
3. Complete and approve Discovery before project-sensitive visual mutation.
4. Build Foundations before dependent components.
5. Build documentation from the repository's canonical construction contract, not from free-form interpretation of the example reference.
6. Mutate sequentially, one validated unit at a time.
7. Reuse exact returned IDs; never guess IDs.
8. Validate structure and appearance after each unit.
9. Screenshot-review mandatory Foundation documentation.
10. Keep internal logs out of designer-facing frames.
11. Do not automatically create optional component documentation.

Specification completion does not authorize Figma mutation. Figma inspection does not authorize Figma mutation.

## Reporting

Report what changed, what was validated, any unresolved user decision, and the next dependency-safe step. Do not add private working notes to repository documents.
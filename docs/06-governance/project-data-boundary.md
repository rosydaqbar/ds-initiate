# Project Data Boundary

This repository is a reusable design-system generation framework. It standardizes **how** a design system is resolved, constructed, documented, and validated. The repository owns the generation method, not the identity or visual values of the project being generated.

## Non-negotiable boundary

The reusable repository may hard-code only framework decisions that are intentionally shared by every generated project, such as:

- Atomic Design build order and library organization.
- The 4px structural construction rule.
- Figma object-selection rules, variant limits, component-property rules, and QA procedure.
- Designer-documentation page order, canvas placement, shell geometry, table anatomy, specimen patterns, and validation rules.
- Deterministic rules for choosing one documented presentation pattern from another.

The reusable repository must **not** hard-code project identity or project aesthetics. These are project data and come from approved Discovery input, supplied production assets, or an explicitly approved project-specific resolution step:

- Brand or product name.
- Product description, audience, tasks, or business rules.
- Brand, secondary, accent, neutral, feedback, or prohibited colors.
- A concrete brand hex, palette ramp, or semantic color mapping.
- Typeface family, font license, or project-specific typography treatment.
- Logo, icon artwork, imagery, illustration, or photography treatment.
- Control/surface radius character, shadow character, density, or motion character.
- Product voice, language set, RTL requirement, or project-specific content.
- First-release component inventory or product-specific components.
- Figma node IDs, variable IDs, file IDs, or example-project metadata.

An example project is evidence for reusable **construction grammar only**. Never promote its brand values into repository defaults.

## Deterministic generation rule

For the same approved project inputs and the same repository revision, two independent runs must choose the same:

1. Build order.
2. Figma page and section organization.
3. Documentation pattern for each Foundation or approved component guide.
4. Frame widths, shell geometry, section spacing, row anatomy, and canvas placement defined by the canonical documentation contract.
5. Component object type, public/private split, variant axes, and property strategy when the specification supplies the same component scope.
6. QA sequence and acceptance criteria.

They are allowed to differ only where the approved project inputs differ or where the repository explicitly requires a new user decision.

Do not use phrases such as `choose what looks best`, `use an appropriate width`, `when useful`, `similar to the reference`, or `adapt freely` for a construction decision that can be specified exactly. Replace them with a fixed value, a deterministic decision table, or a blocking question.

## Project-sensitive values

A project-sensitive value has exactly three valid sources, in this order:

1. An explicit approved value from the user or approved Discovery brief.
2. An existing production value or asset explicitly supplied by the user.
3. A generated proposal that the user explicitly approves before Figma mutation.

If none exists, stop and ask the smallest specific question. Do not use another project's value as a fallback. Do not treat an example Figma file as approval to inherit its brand values.

## Reference files and screenshots

A supplied reference may define reusable presentation evidence such as:

- information hierarchy;
- section order;
- row relationships;
- column anatomy;
- spacing rhythm;
- swatch or specimen treatment;
- annotation style.

It never silently defines the current project's brand, tokens, typeface, palette, component inventory, product copy, or asset style.

When an example project produces a successful result, extract only the construction decisions that can remain valid after replacing every project-specific noun, color, font, asset, and token value.

## Repository examples

Examples must use neutral placeholders such as `{Brand}`, `{Project}`, `{Primary font}`, `{Brand 500}`, or synthetic fixture names. A project name, project hex, project font, or real target-node identity must not appear in canonical governance as a default.

Synthetic values in tests must be clearly identified as fixtures and must not be presented as design recommendations.

## Pre-commit brand-agnostic audit

Before finishing a reusable-repository update:

1. Search the diff for the current example project's brand name, product name, colors, typefaces, node IDs, URLs, and distinctive copy.
2. Remove any example-specific value that is acting as a default or normative instruction.
3. Keep only generic placeholders or deterministic framework geometry.
4. Confirm Discovery remains the authority for project-sensitive values.
5. Confirm an executor cannot infer that one example project's visual identity is the intended output for another project.

A reusable-repository update fails this gate if it makes one example project the default brand.
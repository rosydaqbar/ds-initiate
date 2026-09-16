# Project Data Boundary

This framework separates **project input** from **framework rules** so a new project does not inherit another project's identity by accident.

## Framework rules

The framework provides reusable construction behavior that stays consistent across projects, including:

- Atomic Design build order and library organization;
- the 4px structural construction rule;
- component object-selection, property, and variant rules;
- documentation page order, geometry, pattern mapping, and QA;
- deterministic rules for resolving structural decisions.

These rules describe how the system is built. They do not define the project's brand.

## Project input

The current project supplies or explicitly approves project-specific values such as:

- brand and product identity;
- product description, audience, and important tasks;
- brand, secondary, accent, neutral, feedback, and prohibited colors;
- concrete palette values and semantic color mappings;
- typeface families and available weights;
- logos, icons, imagery, illustration, and photography treatment;
- control and surface radius character;
- density, elevation, and motion character;
- appearance modes;
- accessibility, language, RTL, and content requirements;
- first-release component scope;
- product-specific behavior and copy.

## Source priority

A project-specific value can come from:

1. an explicitly approved value from the user or Discovery brief;
2. an existing production value or asset supplied for the current project;
3. a generated proposal that the user explicitly approves before Figma mutation.

If a required value is still unresolved, ask for the smallest specific decision needed to continue. Do not fill the gap with another project's value.

## Example and reference projects

A reference Figma file, screenshot, or example project may help define reusable structure such as:

- information hierarchy;
- section order;
- row relationships;
- column anatomy;
- spacing rhythm;
- swatch or specimen treatment;
- annotation style.

It does not automatically supply the current project's brand, palette, typeface, assets, product copy, token mappings, or component scope.

Use reference projects for structural evidence only unless the user explicitly approves a value for the current project.

## Deterministic generation

For the same framework revision and the same approved project input, independent runs should make the same structural decisions, including:

1. build order;
2. Figma page and section organization;
3. documentation pattern selection;
4. canonical frame geometry and canvas placement;
5. component object type, public/private split, variant axes, and property strategy when scope is the same;
6. QA sequence and acceptance criteria.

The output may differ where the approved project input differs.

# Example: Deterministic Figma Design-System Executor

This example mirrors the active orchestration contract in `AGENTS.md`. When the two files differ, `AGENTS.md` is authoritative.

## Role

Generate a design system from approved project input using the repository's fixed construction rules.

The repository owns the generation method. The current project owns its brand identity and visual values.

Read before execution:

1. `README.md`
2. `AGENTS.md`
3. `docs/00-discovery/brand-style-questionnaire.md`
4. `docs/00-discovery/discovery-brief-format.md`
5. `docs/06-governance/project-data-boundary.md`
6. `docs/06-governance/figma-construction-standard.md`
7. `docs/06-governance/documentation-visual-language.md`
8. `docs/06-governance/foundation-documentation.md`
9. `docs/06-governance/optional-component-documentation.md`
10. The target item specification and dependencies

## Execution boundary

Do not modify Figma unless the user explicitly requests a build/update.

When authorized:

1. Inspect the target Figma file.
2. Complete Discovery and obtain approval.
3. Do not use any project-sensitive value that is not approved or supplied from production.
4. Build Foundations before dependent components.
5. Build mandatory Foundation documentation using the canonical repository geometry.
6. Build Atoms → Molecules → Organisms in dependency order.
7. Do not create optional component documentation until that component passes QA and the user approves its guide.
8. Validate after each unit.

## Project-data rule

Never import a brand name, concrete color, font, logo, imagery treatment, product copy, component inventory, Figma node ID, or token mapping from an example project into a new project.

If current-project data is missing, ask. Do not use an example value as fallback.

## Deterministic documentation rule

Do not reinterpret documentation layout from scratch.

Use `docs/06-governance/documentation-visual-language.md` exactly for:

- Foundation page order;
- top-level `Y = 0` alignment;
- `200px` horizontal guide spacing;
- assigned root width per Foundation;
- canonical `476px` header shell;
- body padding and `112px` major-section rhythm;
- documentation typography scale;
- fixed Foundation → pattern mapping;
- `P1` palette swatch geometry;
- `P2` semantic-table columns/rows/pills/connectors;
- `P3` specimen rows;
- `P4` measured diagrams;
- `P5` guidance/comparisons;
- canonical footer;
- screenshot QA.

External references are evidence for why a pattern works, not alternative geometry.

## Component construction

- One component when there is no public visual axis.
- One component set when the public Cartesian product is `≤30` variants.
- Split public sets by primary visual style when `>30`.
- Use Text properties for editable copy.
- Use Boolean properties for optional visibility.
- Use instance-swap properties for replaceable icons/content.
- Use private nested components for repeated independent internal responsibilities.
- Never create variants for arbitrary text/icon choice/simple visibility.
- Bind production layers to approved semantic variables and Styles.
- Follow the 4px structural rule.

## Validation

Before claiming completion, verify:

- approved/implemented/documented inventories agree;
- canonical documentation root width/shell/body/pattern/canvas placement match the repository contract;
- component variant counts and properties match the specification;
- no hard-coded unapproved project-sensitive values exist;
- no example-project identity leaked into the current project;
- screenshots were actually reviewed;
- local Markdown validation passes.

## Reporting

Report completed scope, changed files/Figma objects, validation actually performed, unresolved decisions, and next dependency-safe work. Do not claim checks that were not run.
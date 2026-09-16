# Figma Design System Build Specifications

This repository is a reusable, brand-agnostic design-system generation framework organized with Atomic Design.

It standardizes **how** a design system is discovered, specified, constructed, documented, and validated. It does not define the identity or visual values of the project being generated.

Foundation documentation is mandatory in the same Figma build. Atom, Molecule, and Organism documentation is optional after component QA and explicit approval.

## What the framework defines

The framework provides:

- Discovery workflow and approval gates.
- Foundations → Atoms → Molecules → Organisms build order.
- Neutral Figma library organization.
- Primitive → semantic → optional component-token architecture.
- 4px structural construction rule.
- Component object-selection rules and `≤30` public-variant limit.
- Auto Layout/property/binding construction rules.
- Deterministic Foundation-documentation page order, frame widths, shell geometry, body-pattern mapping, table anatomy, canvas placement, and QA.
- Release and output-validation procedure.

## What comes from the current project

Project-specific values come from approved Discovery or explicitly supplied production inputs:

- brand/product identity;
- colors and palette values;
- typefaces and licensed weights;
- radius, density, shadow, and motion character;
- logos, icons, imagery, and illustration treatment;
- appearance modes;
- accessibility/language/content requirements;
- first-release component scope;
- product-specific behavior and copy.

An example project is never a source of project-specific values unless the user explicitly approves those values for the current project. See [Project Data Boundary](docs/06-governance/project-data-boundary.md).

## Determinism goal

For the same framework revision and the same approved project input, independent runs should make the same structural decisions and produce the same documentation geometry.

Brand-sensitive output may differ only when project input differs.

The canonical designer-documentation structure is defined in [Documentation Construction Contract](docs/06-governance/documentation-visual-language.md). Numeric geometry is mirrored in [documentation-layout-contract.json](docs/06-governance/documentation-layout-contract.json) so generation does not reinterpret measurements from prose.

## Documents

Start with:

- [Documentation index](docs/README.md)
- [Brand style questionnaire](docs/00-discovery/brand-style-questionnaire.md)
- [Project Data Boundary](docs/06-governance/project-data-boundary.md)
- [4px construction grid](docs/01-foundations/4px-grid.md)
- [Figma construction standard](docs/06-governance/figma-construction-standard.md)
- [Documentation Construction Contract](docs/06-governance/documentation-visual-language.md)
- [Machine-readable documentation layout contract](docs/06-governance/documentation-layout-contract.json)
- [Mandatory Foundation Documentation](docs/06-governance/foundation-documentation.md)
- [Documentation Acceptance](docs/06-governance/documentation-acceptance.md)

`AGENTS.md` defines how an executor should use these specifications during a project build.

## Before implementation

Complete and approve Discovery before creating project-sensitive visual values.

If a required brand-sensitive value is missing, ask for it or propose it for explicit approval. Never reuse another project's value as a fallback.

## Start prompt

```text
Build a design system for [brand and product] in [Figma URL] using this repository.

Start with Discovery: inspect the target file, ask me up to 10 specific brand-style questions, summarize the resolved project direction and first-release scope, list unresolved project-sensitive values, then wait for approval.

After approval, build Foundations → Atoms → Molecules → Organisms using the mandatory 4px construction rule.

Foundation documentation is mandatory. Follow docs/06-governance/documentation-visual-language.md and docs/06-governance/documentation-layout-contract.json exactly for page order, assigned root widths, canonical header/footer shell, body pattern, semantic-table geometry, specimen/measured layouts, canvas placement, and screenshot QA. Populate that fixed construction only with the current project's approved brand values, typography, tokens, assets, and copy. Do not inherit brand values from any example project or external reference.

Component documentation is optional after component QA. Do not introduce Templates or Pages as Atomic Design levels, product screens, or product-surface categories.
```

Short follow-ups:

```text
Discovery approved. Build these Foundations only: [list].
```

```text
Build [component] as an [Atom, Molecule, or Organism] using [specification path].
```

```text
Continue the existing build. Inspect the target Figma state first and resume from the first incomplete validated step. Use the framework's canonical documentation construction; do not reinterpret the layout from scratch.
```

## Figma file boundary

A generated project uses one target Figma file unless the user explicitly changes the architecture.

Atomic Design is the build/composition structure. Product-surface categories do not become library levels.

Foundation documentation is built and validated immediately with its Foundation. Optional component guides are created only after the finished component passes QA and the user explicitly approves the guide.

## Definition of success

A successful generated library:

- reflects the current project's approved identity rather than an example project;
- follows the framework's deterministic construction rules;
- has complete mandatory Foundation documentation;
- uses semantic variables and approved Styles rather than hard-coded component values;
- contains bounded, reusable public component APIs;
- preserves the 4px structural system;
- passes the documented metadata, structural, screenshot, and coverage checks.

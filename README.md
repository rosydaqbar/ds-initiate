# Figma Design System Build Specifications

This repository contains executable Figma construction specifications for a reusable design-system framework organized with Atomic Design.

These files define the Figma objects, construction measurements, bindings, behavior, QA, and adaptive documentation recipes. Foundation documentation is mandatory in the same Figma build; Atom, Molecule, and Organism landing frames are optional. These specifications do not yet modify the Figma file. Once discovery is approved, the implementation becomes the named brand's design system and must not retain generic brand placeholders.

## Direction locked for v1

- Follow the building-block levels currently in scope: foundations, atoms, molecules, and organisms.
- Place those items in neutral Figma sections: Foundations, Base Components, Components, Shared Assets, and Utility.
- Use private base components for implementation details and publish only useful product-facing components.
- Use a clear token architecture: primitives → globally reusable semantic roles → optional component-specific aliases.
- Keep approved brand colors in `Primitives`; express reusable UI purposes through `Color`.
- Create component-specific tokens only when a real component needs an independent, stable contract.
- Resolve colors, typefaces, shape character, and identity assets to the approved brand during implementation.
- Support Light and Dark semantic color modes from the start.
- Add multiple branded themes only when they are explicitly included in the approved project scope.
- Keep examples and business-specific content out of component variant sets.
- Prefer composition, boolean properties, text properties, and instance swaps over large variant matrices.
- Build every structural measurement on the mandatory 4px construction grid.
- Keep every public component set at 30 variants or fewer; split by primary visual style when needed.

## Documents

Open the [documentation index](docs/README.md) to browse the building-block specifications. Start with the [4px construction grid](docs/01-foundations/4px-grid.md), [Figma construction standard](docs/06-governance/figma-construction-standard.md), and [Documentation Visual Language](docs/06-governance/documentation-visual-language.md).

Agents maintaining these specifications must follow the repository [maintainer instructions](AGENTS.md). Downstream Figma execution requires a separate, explicit request and the applicable build documents.

## Before implementation

The architecture is reusable, but its visual values are not predetermined. The [brand style questionnaire](docs/00-discovery/brand-style-questionnaire.md) must be completed and approved before colors, typography, shape, imagery, motion character, or brand-specific assets are created.

## Start prompt

Copy this and replace the brackets:

```text
Build a design system for [brand and product] in [Figma URL] using this repository. Start with Discovery: inspect the file, ask me up to 10 specific brand-style questions, summarize the approved direction and scope, then wait for my approval. After approval, build Foundations → Atoms → Molecules → Organisms using the 4px construction rule. Foundation documentation is mandatory and must follow the repository Documentation Visual Language: inspect any supplied Figma reference and the target file's existing approved guides, extract the information pattern rather than copying the reference literally, and choose the documentation structure that matches the actual content. Semantic variables should use hierarchical mode tables when appropriate; primitive palettes should use swatch families; dimensions should use measured diagrams; visual assets should use focused specimen rows. Screenshot-QA the result for hierarchy, grouping, alignment, legibility, and brand consistency. Component documentation is optional after component QA. Do not introduce Templates or Pages as Atomic Design levels, product screens, or product-surface categories.
```

Short follow-up prompts:

```text
Discovery approved. Build these Foundations only: [list].
```

```text
Build [component] as an [Atom, Molecule, or Organism] using [specification path].
```

```text
Continue the existing build. Inspect the current Figma state first and resume from the first incomplete validated step.
```

## Figma file boundary

The first implementation lives in one Figma file. It uses Atomic Design levels without product-surface library divisions. [Foundation documentation](docs/06-governance/foundation-documentation.md) is built and validated immediately with each Foundation item, without a separate opt-in question. Individual Atom, Molecule, and Organism documentation frames remain optional: finish and validate the component, ask the user, and build the adaptive frame only after approval.

Designer-facing Figma documentation uses one shared visual grammar without forcing one body layout onto every topic. Reuse the approved documentation chrome, section rhythm, typography hierarchy, dividers, value pills, and spacing language already present in the target file. Then choose the body structure from the information: semantic tables for semantic lookup, swatch families for raw palettes, measured diagrams for dimensions, specimen rows for visual systems, and prose/comparisons for behavioral guidance. External references are structural evidence only and must not override the current project's brand, naming, typography, token model, or scope.

Every displayed choice remains traceable to its familiar/searchable name, resolved designer-facing value, supported mode behavior, bound or measured specimen, and usage guidance. Keep IDs, raw API/alias dumps and validation logs internal.

## Definition of success

The eventual Figma library will be successful when it is identified as the approved brand's design system, every built Foundation has validated Figma documentation, and every public component has a complete Markdown construction specification, bounded properties, semantic token bindings, responsive behavior where relevant, and accessibility requirements. Approved component landing frames must use connected instances and represent the finished component accurately. No public component should depend on detached copies, hard-coded brand values, generic brand placeholders, or brand-specific component variants.

## Documentation acceptance

Use [Documentation Acceptance](docs/06-governance/documentation-acceptance.md) to compare approved, implemented and documented names and values. A guide is incomplete if any required entry, sample, mode or section is missing, or if its screenshot is structurally unclear despite technical completeness. Run `node scripts/validate-documentation.mjs` after maintaining the specs. This checks repository contracts; Figma content and appearance require separate inspection during an authorized build.

# Design System Specification Orchestrator

## Role

Act as the repository orchestrator. Turn incomplete Markdown specifications into build-ready Figma instructions while preserving the approved scope, Atomic Design structure, and 4px construction rule.

In this file, a **gap** means missing or unresolved specification content. It does not mean ordinary blank lines or intentional spacing in Markdown.

The default task in this repository is specification work. Do not modify a Figma file unless the user explicitly asks for a Figma build or update.

## Scope

The supported build order is:

1. Discovery
2. Foundations
3. Atoms
4. Molecules
5. Organisms

Patterns may be documented only when the user requests them. Do not introduce Templates or Pages as Atomic Design levels, product screens, or product-surface categories. Do not reorganize Organisms around application type, marketing use, or another product category.

## Read before editing

Read these files before completing any specification:

1. `README.md`
2. `docs/README.md`
3. `docs/00-discovery/brand-style-questionnaire.md`
4. `docs/06-governance/figma-construction-standard.md`
5. `docs/06-governance/component-specification-format.md` for components
6. `docs/06-governance/foundation-documentation.md` for Foundations
7. `docs/06-governance/optional-component-documentation.md` for Atoms, Molecules, and Organisms
8. The target item file and every dependency linked from it

Use familiar component and Figma terms. Do not invent category names or add commentary about how the rules were developed.

## Authority order

When information conflicts, use this order:

1. The user's latest explicit instruction
2. The approved Discovery brief or approved answers in the current task
3. Existing production values or assets explicitly supplied by the user
4. Existing confirmed Figma objects when the user has asked for Figma inspection
5. Shared governance files in this repository
6. The target item specification

Do not silently choose between two approved inputs that disagree. State the exact conflict and ask the user which value wins.

## What the orchestrator may fill

Fill a gap without asking when the answer follows directly from approved information and repository rules. This includes:

- Atomic level and dependency order
- One component versus a component set
- Public component sets and private helper components
- Variant calculations and the 30-variant limit
- Auto Layout direction, resizing, padding, gap, alignment, and layer order
- 4px-aligned structural measurements
- Text, Boolean, and instance-swap component properties
- Semantic variable and Style bindings
- Interaction-state and responsive construction
- Internal QA expectations
- Foundation documentation recipes
- Optional component documentation recipes
- Cross-links, naming consistency, and Markdown formatting

Do not fill a gap by guessing:

- Brand, product, audience, or product voice
- Brand colors or prohibited colors
- Typeface, licensed weights, logos, icons, photography, or illustrations
- Light or Dark mode requirements
- Accessibility target stricter or different from the approved default
- Languages or right-to-left support
- First-release component scope
- Product-specific content or business rules
- A Figma node ID, variable ID, component ID, or completed QA result

If required information is missing, ask only the smallest specific question needed to continue. Use the ten-question Discovery file when the visual direction has not been approved.

## Gap audit

Before editing, inspect the target and its dependencies for:

- `TODO`, `TBD`, unresolved brackets, empty table cells, or placeholder copy
- A deliverable that does not say whether to create one component, one component set, multiple sets, or private helpers
- Missing or incorrect variant calculations
- Variant axes used for editable text, icon choice, or visibility
- Missing layer types, resizing rules, measurements, or Auto Layout behavior
- Structural values that are not multiples of 4
- Generic or hard-coded color bindings
- Text and icons incorrectly sharing one color role
- Missing interaction, responsive, or accessibility requirements
- Optional documentation that does not match the finished component API
- Foundation documentation that is absent or treated as optional
- Foundation documentation described only as a list of topics instead of exact visible Figma content
- A specimen without a required visible name, resolved value, definition, or usage sentence
- Broken local links or inconsistent names

Markdown links, Figma layer annotations such as `[FRAME]` or `[COMPONENT]`, and completed example values are not gaps. Do not replace them merely because they use brackets.

Do not rewrite a complete section merely to change its tone. Preserve correct user-authored decisions and unrelated edits.

## Completion workflow

### 1. Confirm the target

Identify the exact files and Atomic Design levels requested. If the user asks for the whole system, work in dependency order and finish one level before the next.

Do not stop after listing gaps when the missing content is derivable. Apply the edits, propagate shared decisions, validate the affected files, and continue until the requested scope is complete or a real user decision blocks progress.

### 2. Resolve blocking decisions

Compare the gaps with the approved Discovery answers. Ask for missing brand decisions before inserting visual values. Summarize the resolved direction and wait for approval when Discovery is not yet approved.

### 3. Complete Foundations first

Do not complete a component against missing Foundation roles. Define only the collections required by the approved scope:

- `Primitives`: raw approved color values; hidden from normal component use
- `Color`: reusable Light and Dark background, text, icon, border, status, focus, and overlay roles
- `Spacing`: 4px-based spacing values
- `Sizing`: reusable control, icon, target, and shared dimensions
- `Radius`: control, surface, media, large, and pill roles
- `Border`: border and focus-ring widths
- `Layout`: margins, gutters, columns, containers, and responsive examples
- `Motion`: duration and easing roles
- `Typography`: only when atomic typography variables are required

Use Text Styles for usable typography combinations and Effect Styles for elevation. Components bind to semantic roles, not directly to `Primitives`. Text layers use `color/text/*`; icon and vector layers use `color/icon/*`.

Every completed Foundation file must define:

- Required approved input
- Exact Figma values, styles, assets, or rules to create
- Names, modes, types, scopes, and aliases where applicable
- 4px construction behavior
- Internal QA requirements
- A mandatory designer-facing Figma guide recipe

### 4. Complete components in dependency order

Use Atoms before Molecules and Molecules before Organisms. For each component, determine the Figma object before writing measurements:

- Use one component when there is no public visual axis.
- Use one component set when the full visual matrix contains 30 variants or fewer.
- Split into multiple public sets by primary visual style when the matrix would exceed 30.
- Use private nested components for repeated internal parts with an independent responsibility.
- Use Text properties for editable copy.
- Use Boolean properties for optional visibility.
- Use instance-swap properties for replaceable icons or approved nested content.
- Never create a variant for arbitrary copy, icon choice, or visibility.

Every completed Atom, Molecule, and Organism file must contain:

1. Purpose, Atomic level, library placement, Figma location, and exact deliverable
2. Exact public and private objects to create
3. Final layer tree with layer type and resizing
4. Exact construction table for every supported size or layout
5. Variant axes, values, defaults, and calculation
6. Text, Boolean, and instance-swap properties with defaults
7. Layer-by-layer semantic variable and Style bindings
8. Prototype behavior for supported states
9. Responsive behavior when the component can reflow, collapse, scroll, or be replaced
10. Internal 4px, content, interaction, and accessibility QA
11. An optional designer-documentation recipe derived from that component's actual API

Do not leave generic rows such as “when present” when the target component's layers are already known. Remove irrelevant rows and name the exact layer and property being bound.

### 5. Complete the documentation recipe

Foundation documentation is mandatory and is completed with the Foundation. Treat the item file's `Mandatory Figma documentation` section as an executable construction contract, not a topic checklist. Build every specified frame, layer, specimen, label, value, definition, usage sentence, mode comparison, and do-and-don't instruction.

**Documentation is written information supported by specimens; it is not a specimen gallery.** A color box, type sample, spacing bar, radius tile, border tile, shadow, icon, logo, image, layout frame, or motion example without its required visible explanation does not count as documentation.

Each Foundation guide must visibly contain:

- The Foundation name and its one-sentence definition.
- Plain-language overview and usage principles.
- Familiar names for every documented choice.
- Actual resolved designer-facing values: color hex; spacing, size, radius, and border pixels; typography family, weight, size, and line height; elevation name and distinguishing effect summary; layout dimensions; motion duration and easing; or the equivalent asset specification.
- A complete sentence explaining when each role, group, or treatment is used.
- Supported mode values side by side when modes affect designer decisions.
- Applied examples that demonstrate a decision rather than merely display a sample.
- Component- or Foundation-specific do-and-don't examples with written instructions.
- `✓ WCAG 2.2 AA checked` only after the required checks pass, or the approved stricter target.

Do not create a complete implemented inventory or a long Figma table for Foundations. Keep exhaustive lists in Markdown and Figma's native variables, Styles, or Assets panels. Build each guide as a `1600px` editorial frame with a full-width header, centered `800px` reading column, and wider annotated example blocks only when needed. Organize sections around decisions and usage; do not arrange the whole guide as a dashboard of equal cards. Use no more than six specimens in one example block unless a small, meaningful permutation is explicitly required. Every selected specimen still needs its visible name, resolved value, meaning, and usage.

Do not store required copy only in a layer name, Figma description, annotation, prototype note, variable name, or this repository. Create it as visible text in the guide. If the item specification provides exact copy, reproduce that copy; do not summarize or replace it with placeholder text.

Instruction placeholders such as `#RRGGBB`, `{value}`, `{opacity}`, `{Foundation}`, and `{Component}` must never appear literally in Figma. Resolve them from approved inputs and the finished Figma object; if the value is unavailable, stop instead of publishing placeholder documentation.

The instruction to hide internal implementation data applies only to IDs, alias chains, scopes, code syntax, counts, raw calculations, logs, and audit evidence. It never authorizes removing designer-facing names, resolved values, definitions, specifications, or usage guidance.

Documentation for an Atom, Molecule, or Organism is optional. Finish internal component QA first, then ask:

> The {Component} component is complete. Should I build its optional designer documentation from {filename}.md?

If approved, the component file must tell the Figma builder exactly which connected instances to use for:

- Recommended example
- Purpose, when to use, and when not to use
- Actual styles, sizes, states, and editable properties
- Component-specific do-and-don't examples
- Concise accessibility status

Build approved component documentation with the same editorial rhythm: full-width header, readable explanatory copy, then focused connected-instance rows. Do not recreate the component-set cross-product. Show each public style and size once, show states in the most representative style, and add another row only when behavior changes materially. Every instance needs a visible label and a sentence explaining why a designer would choose it.

Do not place internal object inventories, long inventory tables, implementation paths, binding tables, variant calculations, raw contrast ratios, metadata, grid audits, or validation logs in designer-facing Figma documentation. These remain in Markdown or internal build records. A compact set of decision-focused examples with familiar names, resolved values, and usage is documentation and must remain visible.

### 6. Propagate shared decisions

After changing a shared name or rule, update every affected file in the same task. Check at minimum:

- Root and section indexes
- Foundation token names
- Component binding tables
- Cross-component dependencies
- Documentation recipes
- Governance examples

Do not leave both the old and new term active.

### 7. Validate the Markdown

Before reporting completion:

- Confirm every requested file contains all required sections.
- Recalculate every variant total.
- Confirm public component sets contain no more than 30 variants.
- Confirm structural dimensions use 4px increments except documented rendering details.
- Confirm components use semantic variables and approved Styles.
- Confirm component documentation is optional and Foundation documentation is mandatory.
- Confirm Foundation documentation recipes define the exact visible copy, Figma layer structure, construction measurements, names, resolved values, usage, mode behavior, do-and-don't guidance, and concise accessibility status.
- Reject any documentation recipe that can be satisfied by unlabeled boxes, samples, or connected instances.
- Reject any Foundation guide that reproduces the complete implementation inventory or presents it as a long Figma table.
- Reject any Foundation or component guide laid out only as a specimen dashboard without readable headings, explanations, and annotated decisions.
- During screenshot review, read the guide as a designer: confirm its written explanation is visible, legible, complete, and attached to the correct specimen.
- Confirm local Markdown links resolve.
- Search for unresolved placeholders and obsolete names with `rg`.
- Review the final diff and preserve unrelated user changes.

Never claim a Figma component, variable, accessibility check, screenshot review, or metadata check is complete unless that check was actually performed.

## Figma execution boundary

When the user explicitly asks to implement the specifications in Figma:

1. Read the applicable Figma skills completely before using Figma tools.
2. Inspect the target file before creating or editing objects.
3. Complete Discovery and obtain approval before visual mutations.
4. Build Foundations before dependent components.
5. Mutate Figma sequentially, one validated unit at a time.
6. Reuse exact returned IDs; never guess IDs.
7. Validate structure and appearance internally after each unit.
8. Validate Foundation documentation for visible written content as well as visual appearance. Bare specimens fail even when their bindings are correct.
9. Keep internal validation details out of designer-facing frames without removing designer-facing values or specifications.
10. Do not automatically create optional component documentation.

Specification completion does not authorize Figma mutation. Figma inspection does not authorize Figma mutation.

## Reporting

Lead with what was completed. Report:

- Files changed
- Gaps resolved
- User decisions still required
- Validation performed
- The next dependency-safe item, if work remains

Do not add private working notes, comparison commentary, or process narration to the repository documents.

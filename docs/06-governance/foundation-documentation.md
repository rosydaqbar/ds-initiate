# Mandatory Foundation Documentation

Every Foundation item includes a designer-facing Figma guide in the same build. Its values, Styles, assets, or rules and its guide must both pass review before the item is complete. Component guides retain their separate opt-in rule.

Read [Documentation Visual Language](documentation-visual-language.md) before creating or revising any designer-facing guide. That file defines the canonical visual grammar and the rule for adapting external references without copying them literally.

## Documentation outcome

A complete guide provides an introduction, a complete reference for the approved scope, and applied guidance. Designers must be able to find a specific choice, read its specification, and understand when to use it without opening the variables panel or this repository.

Every implemented color, token, Text Style, Effect Style, shared size, and asset treatment must have a visible reference entry. Every approved rule must have visible guidance. A reference entry contains:

- A familiar name and the exact searchable token, Style, or asset name when needed.
- The actual resolved value and unit; all supported mode values where applicable.
- A concise, specific purpose and usage sentence.
- An actual bound specimen, connected instance, or measured diagram.
- Applicable state, permitted pairing, restriction, or alternative.

A family description does not replace the specification of its individual values. A guide documenting only a few selected values is incomplete. Keep individual entries concise and split long references into meaningful sections or continuation frames when necessary.

## Public reference and internal evidence

These are required designer-facing information:

- Complete palette ramps with every approved shade, base color, and alpha value.
- Semantic token references grouped by property and purpose, including each role's usage and Light/Dark values when those modes exist.
- Exact searchable names and the resolved source name, such as `brand-600`, alongside the applied specimen.
- Full typography, spacing, sizing, radius, border, elevation, and motion references.
- Public component properties, dimensions, state behavior, and usage restrictions when documenting a component.
- Named foreground/background pairings and measured contrast results when they help select a valid combination.

These remain internal: node and variable IDs, scopes, serialized bindings, alias traversal logs, raw API responses, test logs, and screenshot evidence.

Do not reproduce external systems' names, logos, proprietary wording, token catalogs, or branding. Write original guidance using this repository's conventions and the approved project's identity.

## Coverage by Foundation

| Foundation | Complete reference required | Applied guidance required |
| --- | --- | --- |
| Color | Every approved palette shade/base/alpha value and every semantic role; exact name, purpose, usage, source, and mode resolution | Pairings, interaction states, feedback, overlays, selection and focus where relevant |
| Typography | Every implemented Text Style; family, available weight, size, line height, letter spacing, casing, intended use, responsive changes | Real samples, hierarchy, wrapping, emphasis, numbers and approved scripts |
| Spacing and sizing | Every spacing and shared control/icon/target size; exact name, pixels, purpose | True-size gap/inset/dimension measurements, including zero and invisible target bounds |
| Radius and borders | Every radius and stroke-width role; values, purposes, applicable border colors | Bound corners and strokes, nested corners, focus, validation, dashed treatment when approved |
| Elevation | Every Effect Style and every layer of each effect; offsets, blur, spread, color, alpha and mode behavior | Surface hierarchy, paired surface roles, border fallback and focus separation |
| Grid and layout | Every breakpoint, column/margin/gutter/container token and behavior; actual dimensions and ranges | True-size grids, reflow, stacking, collapse, scroll and replacement |
| Motion | Every duration and easing role; exact timing, curve, animated property, trigger and reduced-motion replacement | Before/after states and working prototype demonstrations |
| Iconography | Every approved icon with exact name, meaning and usage; every supported treatment and size | Safe area, alignment, surfaces and accessible-label rules |
| Logos | Every approved lockup and appearance, minimum dimensions, clear space and background permission | Connected artwork, measured exclusions and permitted/forbidden background combinations |
| Illustration and imagery | Every approved treatment and ratio, dimensions, crop, source rights and accessibility requirements | Approved media, focal points and missing-media behavior |
| Accessibility | Every approved design requirement with its value/behavior, reason and verification boundary | Target bounds, focus, contrast pairings, text expansion, keyboard order, status and motion |
| Content | Every approved writing/formatting rule with specific correct and incorrect examples | Labels, help, errors, all empty-state meanings, notifications, locale and wrapping |
| Design tokens | Every collection's purpose and naming grammar, with links to the owning complete references | Traceable primitive → semantic role → consumer example, mode behavior and token selection |

Content collections may contain an unlimited number of runtime images or arbitrary user text. Cover every reusable treatment and rule plus approved reference assets; do not attempt to catalog future content.

## Structure is chosen by the information

Do not force every Foundation into the same table, card grid, or article template.

Use the information pattern that best matches the Foundation:

- Semantic variables with mode comparison → hierarchical reference table.
- Primitive color ramps → horizontal swatch families.
- Spacing, sizing, radius, borders, grids → measured rows or diagrams.
- Typography, iconography, elevation, imagery, motion → specimen rows or focused visual examples.
- Accessibility and content rules → prose, comparisons, and applied examples.

The recurring visual language comes from [Documentation Visual Language](documentation-visual-language.md): restrained chrome, clear section hierarchy, consistent typography, compact value pills, subtle dividers, stable alignment, and usage attached to the value it explains.

## Recommended guide anatomy

The exact body changes by Foundation, but the guide should normally contain:

```text
Documentation / {Foundation}
  Page header
    Context / breadcrumb
    {Foundation title}
    Short definition
    Optional compact system metadata
  Section / {Reference group}
    Section heading
      {Group title}
      Optional type badge such as Variables, Styles, Assets, or Guidance
    Concise explanation
    {Reference structure appropriate to this information}
  Section / {Applied decision}
    Specimen / diagram / comparison
    Explanation
  Do and don't, when the Foundation has misuse patterns worth showing
  Accessibility scope or verification boundary, when relevant
  Quiet footer / system context, when used elsewhere in the approved file
```

Do not add a section simply because another design system has it. Do not omit a required section simply because the external reference lacks it.

## Semantic-variable table pattern

When a Foundation contains semantic variables with multiple modes, the preferred reference structure is:

`Name | Light mode | Dark mode | Usage`

Adapt the mode columns to the actual approved modes.

Each row shows:

- the semantic role name;
- its resolved primitive source in each mode as a compact swatch pill;
- one concise usage sentence.

Use indentation and a subtle connector line only when a real parent/child relationship exists, for example:

- `default` with `hover`, `pressed`, and `disabled` children;
- a status family with `background`, `text`, `icon`, and `border` children;
- another explicitly defined state family.

Do not manufacture hierarchy for visual similarity.

## Primitive-scale pattern

When documenting a raw palette or comparable scale:

- show the complete approved sequence;
- use compact swatch cards or measured samples;
- show the familiar step/name and resolved value;
- identify an approved anchor/default when one exists;
- keep the family description separate from per-value labels;
- do not imply that primitives are component-facing permissions.

## Page width and construction

There is no single mandatory documentation-frame width.

Use a 4px-aligned width appropriate to the information:

- `1600px` is a strong default for prose-heavy or specimen-focused guides.
- Wide references may use `2528px`, `2848px`, or another 4px-aligned width when token names, multiple mode columns, or complete ramps need more space.
- Do not shrink text or crush columns to preserve a predetermined width.
- Reposition neighboring top-level frames after a width change so no documentation frames overlap.

All structural padding, gaps, row heights, measurements, and placement still follow the 4px construction rule except documented rendering details.

## Values and bindings

- Read values and names from the implemented variables, Styles and assets. Populate visible labels and native descriptions from the same resolved record.
- A visible hex label is insufficient without a swatch or applied color sample bound to that specific role.
- Set modes explicitly on Light and Dark sample containers. Derive labels under the same effective modes, including cross-collection aliases and alpha.
- Show RGB hex and alpha separately for translucent values and name the compositing surface when relevant.
- Text samples use their actual Text Style. Spacing bars measure their token value; zero is labeled without inventing a visible bar.
- Use connected assets without detaching. Documentation chrome uses approved Text Styles and semantic roles where possible.
- Never resolve placeholders from memory. Missing approved inputs remain explicit blockers for the affected item.

## Reference adaptation

If the user supplies a reference Figma file or screenshot, inspect it before building.

The goal is to understand its information architecture and visual grammar, not to clone it. Reuse aligned patterns such as section hierarchy, table relationships, swatch treatment, spacing rhythm, and density. Preserve the current project's own typography, colors, token structure, language, and asset style.

When an approved guide already exists in the target Figma file, its established documentation pattern outranks a generic external reference. New guides should extend that language rather than redesign it independently.

## Build sequence and acceptance

1. Read the approved brief, item specification, [Documentation Visual Language](documentation-visual-language.md), and dependencies.
2. If the user supplied a reference, inspect its design context and at least one readable screenshot before authoring the guide.
3. Inspect existing approved documentation in the target Figma file and record the established chrome, hierarchy, row styling, pill styling, divider treatment, and spacing rhythm.
4. Record expected names, modes, values and required sections using [Documentation Acceptance](documentation-acceptance.md).
5. Build or repair the underlying Foundation. Check naming, values, modes, aliases and native descriptions.
6. Build the complete reference using a structure derived from the current Foundation, not copied mechanically from the reference.
7. Compare the expected set, implemented set and visibly documented set. Missing, duplicated, stale or unsupported entries fail.
8. Inspect screenshots of every reference group and application at readable scale, including first and last rows.
9. Fix structural randomness, clipping, weak hierarchy, incorrect relationships, or brand drift before accepting the guide.

Documentation fails if any required entry, field, mode, section or visual example is missing. It also fails when all data is technically present but the screenshot reads as an arbitrary wall of rows with no clear grouping or hierarchy.

## Accessibility status

Use a scoped statement such as `Design checks completed: text contrast and target geometry; keyboard and assistive-technology checks pending in implementation.` Name only checks actually performed. Record unresolved requirements explicitly.

A Figma specimen cannot establish production keyboard behavior, screen-reader semantics or whole-product WCAG conformance. Do not print a blanket WCAG checked badge from design-only evidence. Pair-specific contrast labels are permitted with the tested foreground, background, mode and use class. See [Accessibility](../01-foundations/accessibility.md).

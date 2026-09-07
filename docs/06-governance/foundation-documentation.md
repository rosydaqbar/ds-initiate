# Mandatory Foundation Documentation

Every Foundation item includes a designer-facing Figma guide in the same build. Its values, Styles, assets, or rules and its guide must both pass review before the item is complete. Component guides retain their separate opt-in rule.

## Documentation outcome

A complete guide provides an introduction, a complete reference for the approved scope, and applied guidance. Designers must be able to find a specific choice, read its specification, and understand when to use it without opening the variables panel or this repository.

Every implemented color, token, Text Style, Effect Style, shared size, and asset treatment must have a visible reference entry. Every approved rule must have visible guidance. A reference entry contains:

- A familiar name and the exact searchable token, Style, or asset name.
- The actual resolved value and unit; all supported mode values where applicable.
- A concise, specific purpose and usage sentence.
- An actual bound specimen, connected instance, or measured diagram.
- Applicable state, permitted pairing, restriction, or alternative.

A family description does not replace the specification of its individual colors. A guide documenting only a few selected values is incomplete. Keep individual entries concise and split long references into labeled sections or continuation frames.

## Public reference and internal evidence

These are required designer-facing information:

- Complete palette ramps with every approved shade, base color, and alpha value.
- Semantic token tables grouped by property and purpose, including each role's usage and Light/Dark values.
- Exact searchable names and the resolved source name, such as Brand 600, alongside a color value.
- Full typography, spacing, sizing, radius, border, elevation, and motion references.
- Public component properties, dimensions, state behavior, and usage restrictions when documenting a component.
- Named foreground/background pairings and measured contrast results when they help select a valid combination.

These remain internal: node and variable IDs, scopes, serialized bindings, alias traversal logs, raw API responses, test logs, and screenshot evidence. A searchable name, resolved source, numeric specification, or pairing result is useful reference information, even when it originates in implementation data.

Do not reproduce external systems' names, logos, proprietary wording, token catalogs, or branding. Write original guidance using this repository's conventions and the approved project's identity.

## Coverage by Foundation

| Foundation | Complete reference required | Applied guidance required |
| --- | --- | --- |
| Color | Every approved palette shade/base/alpha value and every semantic role; exact name, purpose, usage, source, hex/opacity per mode | Paired foreground/background previews, interaction states, feedback, overlays, selection and focus |
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

## Required guide structure

```text
Documentation / {Foundation} [FRAME, vertical Auto Layout, 1600 Fixed × Hug]
  Header [FRAME, Fill × Hug]
    Foundations [TEXT]
    {Foundation name} [TEXT]
    {Specific definition} [TEXT]
  Article [FRAME, vertical Auto Layout, Fill × Hug]
    Overview [FRAME, 800 Fixed × Hug]
    Contents [FRAME, 800 Fixed × Hug; links to reference groups/continuations]
    Reference / {Group} [FRAME, vertical Auto Layout, Fill × Hug; repeat for ALL groups]
      {Group heading and purpose} [TEXT]
      {Column headings when using a table} [FRAME]
      Entry / {Exact name} [FRAME; repeat for EVERY required item]
        {Name and searchable identifier} [TEXT]
        {Purpose, use and restriction} [TEXT]
        {Resolved values with units and mode labels} [TEXT]
        {Bound specimen / connected instance / measured diagram}
    Application / {Specific decision} [FRAME; actual visual example and explanation]
    Do and don't [FRAME; separate correct/incorrect visual examples and captions]
    Accessibility [FRAME; checked scope and remaining work]
```

The item recipe supplies specific subjects and examples. Reusing a header, table row, and text styles is appropriate; reusing the same body copy and generic specimen for unrelated Foundations is not.

## Exact construction

| Object | Construction |
| --- | --- |
| Root | Unpublished regular FRAME; 1600px Fixed width, Hug height, vertical Auto Layout; zero padding/gap |
| Placement | X/Y divisible by 4; at least 64px between top-level frames |
| Header | Fill × Hug; 80px horizontal/64px vertical padding; 12px gap |
| Article | Fill × Hug; 80px padding; 64px section gap; centered |
| Prose | 800px Fixed × Hug; 16px gap; left aligned |
| Reference table | Up to 1440px wide within the root; vertical Auto Layout; aligned column widths and repeated header on continuations |
| Table cells | 16px padding; 8px internal gap; top aligned; wrapping text and Hug height; all cells grow to the tallest content in their row |
| Reference text | Approved readable Text Styles; default 16px/24px body and labels; 12px/16px only for secondary metadata, never the sole usage explanation |
| Applied example | Up to 1280px wide; 32px padding and 24px gap; bound geometry or connected assets at 100% scale |
| Comparison | 1120px outer width; zero outer padding; 548px columns with 24px gap; each column has 24px padding |
| Swatch/value annotation | 8px between name and value; 12px before use; labels remain readable independently of the demonstrated color |
| Accessibility | 800px Fixed × Hug; 24px padding and 16px gap |

Compute available width after padding and gaps. Do not use a 1280px reference inside a 1280px wrapper that also adds 64px padding. Expand roots by multiples of 4 for true-size specimens; the minimum root width is specimen width + specimen padding + article padding.

Split references by meaningful groups when they become tall. Use names such as `Documentation / Color / Text`, repeat column headings and mode labels, and add navigation from the main guide. Do not shrink text, clip rows, delete entries, or cap references at six specimens to fit a frame.

## Values and bindings

- Read values and names from the implemented variables, Styles and assets. Populate labels and native descriptions from the same resolved record.
- A visible hex label is insufficient without a swatch or applied color sample bound to that specific role. Bindings on unrelated documentation backgrounds do not prove specimen correctness.
- Set modes explicitly on Light and Dark sample containers. Derive labels under the same effective modes, including cross-collection aliases and alpha.
- Show RGB hex and alpha separately for translucent values and name the compositing surface. Keep numeric labels synchronized after a value or mode changes.
- Text samples use their actual Text Style. Spacing bars measure their token value; zero is labeled without inventing a visible bar.
- Use connected assets without detaching. Documentation chrome uses approved Text Styles and semantic roles.
- Never resolve placeholders from memory. Missing approved inputs remain explicit blockers for the affected item.

## Build sequence and acceptance

1. Read the approved brief, item specification and dependencies. Compare the approved inventory with actual objects before documenting them.
2. Record expected names, modes, values and required sections using [Documentation Acceptance](documentation-acceptance.md).
3. Build or repair the underlying Foundation. Check naming, values, modes, aliases and native descriptions.
4. Complete its full reference, applied examples and specific do-and-don't comparisons.
5. Compare the expected set, implemented set and visibly documented set. Missing, duplicated, stale or unsupported entries fail.
6. Read visible text and inspect bindings. Inspect screenshots of every reference group and application at readable scale, including the first and last rows.
7. Fix failures before recording the Foundation and its guide as complete.

Documentation fails if any required entry, field, mode, section or visual example is missing. A polished overview, valid binding count, correct root name or attractive screenshot cannot substitute for complete content.

## Accessibility status

Use a scoped statement such as `Design checks completed: text contrast and target geometry; keyboard and assistive-technology checks pending in implementation.` Name only checks actually performed. Record unresolved requirements explicitly.

A Figma specimen cannot establish production keyboard behavior, screen-reader semantics or whole-product WCAG conformance. Do not print a blanket WCAG checked badge from design-only evidence. Pair-specific contrast labels are permitted with the tested foreground, background, mode and use class. See [Accessibility](../01-foundations/accessibility.md).

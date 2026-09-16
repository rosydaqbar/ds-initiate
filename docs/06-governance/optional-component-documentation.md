# Optional Component Documentation

This standard defines the optional designer-facing Figma guide for a finished Atom, Molecule, or Organism. It is separate from component construction and is created only after the named component passes QA and the user approves its documentation.

Foundations are excluded from this opt-in rule because their guides are mandatory.

Read [Documentation Visual Language](documentation-visual-language.md) before authoring a component guide. Reuse the documentation chrome already approved in the target Figma file, but choose the body structure from the component's actual public API rather than copying a Foundation table pattern.

## Component completion boundary

A component is complete when its Figma objects, variants, properties, variables, interactions, publishing information, and internal QA are finished. A documentation frame is not required for component completion.

Use this sequence:

1. Build and internally validate the component.
2. Ask: “The {Component} component is complete. Should I build its optional designer documentation from {filename}.md?”
3. If declined, create nothing.
4. If approved, re-read the finished component and build or update `Documentation / {Component}`.

Approval applies only to the named component.

## Documentation outcome

Build a readable usage guide supported by connected component instances. The guide must explain:

- What the component does.
- When to use it and when another component is a better choice.
- How its visual hierarchy or styles differ.
- Every supported size, state, public property and option, with its default and usage.
- How to use it correctly and what to avoid when those comparisons add real value.
- The concise accessibility status and any remaining designer responsibility.

Do not build a specimen dashboard, property dump, or full variant matrix. Focused instance rows explain the public permutations without reproducing the component set.

## Source of truth

Build the guide from the finished Figma component and its Markdown specification. Show only capabilities that exist in the final component.

- Use connected instances; never detach or redraw a component for documentation.
- Read the actual public styles, sizes, states, Text properties, Boolean properties, and instance-swap properties before creating examples.
- Omit irrelevant sections and repetitive combinations.
- If the finished component conflicts with its specification, resolve the component defect before documenting it.
- Inspect any existing approved component guide in the target file and reuse its established section rhythm, labels, pill treatment, dividers, and typography hierarchy where appropriate.

## Keep implementation data internal

Do not place these in the visible guide:

- Variant-count calculations or the private helper matrix.
- Private implementation binding dumps. Public token and Style references remain visible where they help a designer choose.
- Raw alias traversal, scopes, internal IDs, code syntax, or metadata dumps.
- Raw contrast calculations and accessibility test logs. Named foreground/background contrast results may be shown when useful.
- 4px audit output, rendering-exception reports, screenshots, connection reports, or validation logs.
- A long table or exhaustive list of every cross-product permutation.
- Private implementation-layer breakdowns. Public anatomy and meaningful measurements belong in the guide.

## Figma landing-frame structure

Use an editorial sequence of headings, short explanations, and connected-instance examples. Do not use a dashboard of equal cards.

```text
Documentation / {Component} [FRAME, vertical Auto Layout, width chosen from content × Hug]
  Page header
    {Atomic level / context}
    {Component name}
    {One-sentence purpose}
    Optional compact system metadata
  Section / Overview
    What it is
    When to use
    When not to use
    Recommended connected instance
  Section / {Primary designer decision}
    Focused connected-instance row(s)
    Explanation
  Section / Anatomy and dimensions
  Section / Public properties
  Section / Appearance modes, when the component materially changes by mode
  Section / States and options
  Section / Do and don't, only when a real misuse pattern needs comparison
  Section / Accessibility
```

Rename the primary decision section for the component, such as `Hierarchy`, `Selection behavior`, `Validation`, `Placement`, or `Responsive behavior`.

Do not create a section simply because another design system uses it. The component API and approved specification determine the body.

## Exact construction

All structural values below are multiples of 4.

| Object | Construction |
| --- | --- |
| Guide root | Regular unpublished `FRAME`; `1600px` is the default width for ordinary component guides; expand by 4px increments when an actual-size Organism or reference row needs more room; Hug height; vertical Auto Layout; semantic canvas fill |
| Placement | Existing component page; X and Y divisible by 4; at least `64px` from production component sets and no overlap with neighboring documentation frames |
| Page header | Match the approved documentation chrome in the target file; use the same hierarchy, metadata treatment, dividers, and quiet background language where appropriate |
| Section | Fill × Hug; vertical Auto Layout; enough vertical separation to distinguish sections more strongly than individual rows |
| Reading copy | Keep a readable measure; `800px` is a strong default, not a mandatory width when the existing file uses another approved measure |
| Example block | Use the width needed by real connected instances at 100% scale; never scale an instance merely to fit documentation |
| Instance row | Horizontal wrap Auto Layout; Fill × Hug; 4px-aligned gaps; instances remain at 100% scale |
| Instance annotation | Clear label/value relationship plus one concise sentence explaining why a designer would choose it |
| Comparison | Use side-by-side comparison only when the decision benefits from direct contrast; wrap when required rather than compressing content |
| Accessibility block | Use the established documentation surface and spacing language in the target file |

Calculate usable width after padding and gaps. Expand the guide by multiples of 4 when necessary. Keep every required entry visible and readable.

## Permutation guidance

Use connected instances and visible plain-language annotations.

- Show each public visual style once and explain its hierarchy or purpose.
- Show each size once and explain where that size belongs.
- Show interaction states in one focused row for the most representative visual style. Add another row only when a state behaves differently.
- Document EVERY public Boolean, including both values, its default, visibility effect and interaction with other options.
- Document EVERY public instance-swap property, its default, allowed family and constraints; show a default and a meaningful permitted replacement. An unbounded icon library does not need every icon repeated in the component guide.
- Document EVERY public Text property, its default, required/optional status, wrapping/truncation rules and a realistic example.
- Use a full matrix only when the interaction between axes changes the meaning. Never recreate the entire component-set cross-product by default.
- Split large rows into readable groups or continuation frames; do not drop required public values or properties to meet a specimen count.

Include the complete size/specification table: resolved height, min/max width, padding, gap, radius, icon size, Text Style and minimum interaction target as applicable. Explain public anatomy with labeled connected instances. Show all supported states and Light/Dark behavior, including materially different style/state combinations. Every public option must be documented even when a full variant cross-product is unnecessary.

The approved specification defines what must exist; the actual component defines the values to display. If they disagree, fix the missing capability or obtain an explicit scope change. Do not quietly omit a required capability merely because it was not built.

Every displayed instance needs a visible label and a sentence explaining why a designer would choose it. A row labeled only `Small`, `Default`, or `Hover` is insufficient.

## Do-and-don't guidance

Use the component-specific rules in its item file. Create a comparison only when it demonstrates a real designer decision. Each side needs one specific explanation.

Never manufacture an invalid component variant. The incorrect example changes the surrounding composition, content, or selection of an existing but inappropriate public permutation.

## Accessibility status

State the approved target, actual design checks and remaining implementation checks. Use [Accessibility](../01-foundations/accessibility.md) for the evidence boundary. Figma visuals cannot establish production keyboard or screen-reader behavior; do not claim blanket WCAG conformance from a component specimen.

## Documentation QA

After building the approved guide, verify internally:

- The guide combines complete public reference information with specific usage guidance and applied examples.
- Every displayed component is a connected instance at 100% scale.
- Displayed styles, sizes, states, and properties match the finished public API.
- Every instance row has visible labels and decision-focused explanations.
- No private option is shown. Required public options missing from the implementation fail the component contract and cannot be waived by hiding them from the guide.
- Text, focus rings, shadows, menus, and overlays do not clip.
- The frame follows the 4px structural rule.
- The guide extends the approved documentation visual language already present in the target file.
- The final screenshot is legible, free of overflow, and structurally clear rather than a random collection of specimens.

Use [Documentation Acceptance](documentation-acceptance.md) to reconcile approved, implemented and documented public choices. Record raw review evidence in the build ledger; show scoped outcomes and usage restrictions where they help the designer.

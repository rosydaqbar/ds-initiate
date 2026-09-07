# Optional Component Documentation

This standard defines the optional designer-facing Figma guide for a finished Atom, Molecule, or Organism. It is separate from component construction and is created only after the named component passes QA and the user approves its documentation.

Foundations are excluded from this opt-in rule because their guides are mandatory.

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
- How to use it correctly and what to avoid.
- The concise accessibility status and any remaining designer responsibility.

Do not build a specimen dashboard, property dump, or full variant matrix. Focused instance rows explain the public permutations without reproducing the component set.

## Source of truth

Build the guide from the finished Figma component and its Markdown specification. Show only capabilities that exist in the final component.

- Use connected instances; never detach or redraw a component for documentation.
- Read the actual public styles, sizes, states, Text properties, Boolean properties, and instance-swap properties before creating examples.
- Omit irrelevant sections and repetitive combinations.
- If the finished component conflicts with its specification, resolve the component defect before documenting it.

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
Documentation / {Component} [FRAME, vertical Auto Layout, 1600 Fixed × Hug]
  Header [FRAME, vertical Auto Layout, Fill × Hug]
    {Atomic level} [TEXT]
    {Component name} [TEXT]
    {One-sentence purpose} [TEXT]
  Article [FRAME, vertical Auto Layout, Fill × Hug]
    Section / Overview [FRAME, vertical Auto Layout, Fill × Hug]
      Copy [FRAME, vertical Auto Layout, 800 Fixed × Hug]
        {What it is} [TEXT]
        {When to use} [TEXT]
        {When not to use} [TEXT]
      Recommended example [FRAME, vertical Auto Layout, up to 1120 Fixed × Hug]
        {Connected instance} [INSTANCE]
        {Why this is the recommended default} [TEXT]
    Section / {Primary designer decision} [FRAME, vertical Auto Layout, Fill × Hug]
      Copy [FRAME, vertical Auto Layout, 800 Fixed × Hug]
      Instance row [FRAME, horizontal wrap Auto Layout, up to 1120 Fixed × Hug]
        {Connected instance and visible annotation} [FRAME]
    Section / Anatomy and dimensions [FRAME; annotated connected instance and complete size reference]
    Section / Public properties [FRAME; property, type, default, options and usage]
    Section / Appearance modes [FRAME; connected mode comparisons]
    Section / States and options [FRAME, vertical Auto Layout, Fill × Hug]
      {Focused connected-instance rows} [FRAME]
    Section / Do and don't [FRAME, vertical Auto Layout, Fill × Hug]
      Comparison [FRAME, horizontal wrap Auto Layout, up to 1120 Fixed × Hug]
        Do [FRAME]
        Don't [FRAME]
    Section / Accessibility [FRAME, vertical Auto Layout, 800 Fixed × Hug]
      {Remaining designer responsibility} [TEXT]
      {Actual design checks and pending implementation checks} [TEXT]
```

Rename the primary decision section for the component, such as `Hierarchy`, `Selection behavior`, `Validation`, `Placement`, or `Responsive behavior`.

## Exact construction

All structural values below are multiples of 4.

| Object | Construction |
| --- | --- |
| Guide root | Regular unpublished `FRAME`; `1600px` fixed width; Hug height; vertical Auto Layout; `0px` padding; `0px` gap; semantic canvas fill |
| Placement | Existing component page; X and Y divisible by 4; at least `64px` from production component sets |
| Header | Fill × Hug; vertical Auto Layout; `80px` horizontal and `64px` vertical padding; `12px` gap; purpose maximum width `800px` |
| Article | Fill × Hug; vertical Auto Layout; `80px` horizontal and vertical padding; `64px` section gap; center alignment |
| Section | Fill × Hug; vertical Auto Layout; `32px` gap; center alignment |
| Reading column | `800px` fixed width; Hug height; vertical Auto Layout; `16px` gap; aligned left |
| Example block | `800px` default width; up to `1120px` when real instances need it; Hug height; vertical Auto Layout; `32px` padding; `24px` gap; `12px` radius; semantic subtle surface fill |
| Instance row | Horizontal wrap Auto Layout; Fill × Hug; `24px` row and column gap; instances remain at 100% scale |
| Instance annotation | Hug height; `8px` gap between label and value; `12px` before the usage sentence |
| Comparison | `1120px` maximum width; horizontal wrap Auto Layout; `24px` gap |
| Do or don't block | `548px` fixed width when paired; Hug height; vertical Auto Layout; `24px` padding; `16px` gap; semantic surface fill and subtle inside border |
| Accessibility block | `800px` fixed width; Hug height; vertical Auto Layout; `16px` gap; `24px` padding; `12px` radius; semantic subtle surface fill |

Expand the guide only when a real Organism or responsive specimen cannot fit at actual size. Never scale a component instance to make it fit.

Calculate usable width after padding and gaps. An 1120px example block with 32px side padding has 1056px of content width; a paired 548px comparison needs an unpadded 1120px wrapper. Wrap examples or expand the guide by multiples of 4 when necessary. Keep every required entry visible and readable.

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

Use the component-specific rules in its item file. Each comparison demonstrates one decision and contains one specific sentence beneath both examples. Focus on hierarchy, action choice, content, placement, grouping, density, state selection, and responsive behavior.

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
- The final screenshot is legible and free of overflow.

Use [Documentation Acceptance](documentation-acceptance.md) to reconcile approved, implemented and documented public choices. Record raw review evidence in the build ledger; show scoped outcomes and usage restrictions where they help the designer.

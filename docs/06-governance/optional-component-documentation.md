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
- Which sizes, states, and editable options matter to designers.
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
- Variable and Style binding tables.
- Alias paths, scopes, IDs, code syntax, or metadata dumps.
- Raw contrast ratios, accessibility test output, keyboard logs, or screen-reader logs.
- 4px audit output, rendering-exception reports, screenshots, connection reports, or validation logs.
- A long table or exhaustive list of every cross-product permutation.
- Anatomy diagrams or implementation-layer breakdowns unless the user explicitly requests them.

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
    Section / States and options [FRAME, vertical Auto Layout, Fill × Hug]
      {Focused connected-instance rows} [FRAME]
    Section / Do and don't [FRAME, vertical Auto Layout, Fill × Hug]
      Comparison [FRAME, horizontal wrap Auto Layout, up to 1120 Fixed × Hug]
        Do [FRAME]
        Don't [FRAME]
    Section / Accessibility [FRAME, vertical Auto Layout, 800 Fixed × Hug]
      {Remaining designer responsibility} [TEXT]
      ✓ {Approved accessibility target} checked [TEXT]
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

## Permutation guidance

Use connected instances and visible plain-language annotations.

- Show each public visual style once and explain its hierarchy or purpose.
- Show each size once and explain where that size belongs.
- Show interaction states in one focused row for the most representative visual style. Add another row only when a state behaves differently.
- Demonstrate a meaningful Boolean as a before-and-after pair.
- Demonstrate the default and one approved replacement for an instance-swap property when that choice changes usage.
- Demonstrate Text properties with realistic content and applicable content rules.
- Use a full matrix only when the interaction between axes changes the meaning. Never recreate the entire component-set cross-product by default.
- Keep one example block to no more than six connected specimens unless the item specification requires a small, meaningful permutation.

Every displayed instance needs a visible label and a sentence explaining why a designer would choose it. A row labeled only `Small`, `Default`, or `Hover` is insufficient.

## Do-and-don't guidance

Use the component-specific rules in its item file. Each comparison demonstrates one decision and contains one specific sentence beneath both examples. Focus on hierarchy, action choice, content, placement, grouping, density, state selection, and responsive behavior.

Never manufacture an invalid component variant. The incorrect example changes the surrounding composition, content, or selection of an existing but inappropriate public permutation.

## Accessibility status

After internal accessibility QA passes, show:

```text
✓ WCAG 2.2 AA checked
```

Replace the target only when Discovery approved a stricter standard. Add a short responsibility only when accessibility still depends on composition, such as providing an accessible name, preserving reading order, or maintaining the minimum target size.

## Documentation QA

After building the approved guide, verify internally:

- The guide reads as usage guidance rather than an inventory or specimen dashboard.
- Every displayed component is a connected instance at 100% scale.
- Displayed styles, sizes, states, and properties match the finished public API.
- Every instance row has visible labels and decision-focused explanations.
- No unbuilt or private option is shown.
- Text, focus rings, shadows, menus, and overlays do not clip.
- The frame follows the 4px structural rule.
- The final screenshot is legible and free of overflow.

Record results in the build ledger or chat summary, not in the Figma guide.

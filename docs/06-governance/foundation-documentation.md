# Mandatory Foundation Documentation

Every Foundation item includes a designer-facing Figma guide in the same build. Do not ask whether to create it. A Foundation item is complete only after its values, styles, assets, or rules and its guide both pass internal QA.

This requirement does not change the separate opt-in rule for Atom, Molecule, or Organism documentation.

## Documentation outcome

Build a readable guide, not a gallery and not an implementation inventory. The guide must answer four questions in plain language:

1. What does this Foundation control?
2. Which choices should a designer make?
3. How are those choices used correctly?
4. What should a designer avoid?

Visual specimens support the explanation. A swatch, type sample, spacing bar, radius tile, shadow, icon, logo, image, layout frame, or motion example without visible explanatory text is unfinished documentation.

Every displayed specimen must show:

- A familiar name.
- Its current resolved value or specification when that affects selection.
- What it means.
- When to use it.
- What to avoid when misuse is likely.

Do not require a designer to inspect the Layers panel, variables panel, component properties, prototype settings, or this repository to understand the guide.

## Separate the guide from implementation data

The visible guide explains decisions. Figma variables, Styles, Assets, and the Markdown specification hold exhaustive implementation data.

Do not put these in the guide:

- A complete token, variable, Style, or asset inventory.
- A long table that reproduces every value or role.
- Variable IDs, collection IDs, node IDs, scopes, alias chains, or code syntax.
- Collection counts, metadata dumps, or state-ledger details.
- Raw contrast ratios, calculation tables, test cases, or validation logs.
- 4px audit output, rendering-exception lists, screenshot evidence, or connection reports.

Use a small set of representative examples to explain the system. A selected example still needs its visible name, resolved value, meaning, and usage; reducing the inventory never means removing the specification.

## Required designer-facing information

| Foundation | Information visible beside each selected example |
| --- | --- |
| Color | Familiar color or role name, resolved hex value, purpose, and supported appearance behavior |
| Typography | Style name, sample, font family, weight, size, line height, and intended use |
| Spacing and sizing | Familiar name, pixel value, true-size measurement, and common use |
| Radius and borders | Role name, pixel value, applied example, and intended use |
| Elevation | Style name, applied example, distinguishing effect summary, and hierarchy use |
| Grid and layout | Breakpoint name, frame width, columns, margins, gutter, content width, and reflow rule |
| Motion | Role name, duration, easing, behavior, and reduced-motion behavior |
| Iconography | Icon name, supported size, visual treatment, and meaning |
| Logos | Lockup and appearance name, minimum size, clear space, and permitted background |
| Illustration and imagery | Treatment name, ratio, crop guidance, permitted use, and accessibility guidance |
| Accessibility | Rule name, required behavior, reason, and correct application |
| Content | Rule name, approved example, reason, and incorrect comparison |
| Design tokens | Plain-language layer name, what it represents, when to choose it, and one concrete example |

Resolved values remain visible even when the specimen is bound to a variable or Style. The binding keeps the visual current; the label communicates the current decision.

## Figma landing-frame structure

Use an editorial structure: a full-width header followed by a centered sequence of reading sections and annotated example blocks. Do not lay out the guide as a dashboard of equal cards.

```text
Documentation / {Foundation} [FRAME, vertical Auto Layout, 1600 Fixed × Hug]
  Header [FRAME, vertical Auto Layout, Fill × Hug]
    Foundations [TEXT]
    {Foundation name} [TEXT]
    {One-sentence definition} [TEXT]
  Article [FRAME, vertical Auto Layout, Fill × Hug]
    Section / Overview [FRAME, vertical Auto Layout, Fill × Hug]
      Copy [FRAME, vertical Auto Layout, 800 Fixed × Hug]
        {Heading} [TEXT]
        {Explanation} [TEXT]
      Example [FRAME, vertical Auto Layout, up to 1280 Fixed × Hug]
        {Bound or connected specimens} [FRAME or INSTANCE]
        {Visible annotations} [TEXT]
    Section / {Item-specific decision} [FRAME, vertical Auto Layout, Fill × Hug]
      Copy [FRAME, vertical Auto Layout, 800 Fixed × Hug]
      Example [FRAME, vertical Auto Layout, up to 1280 Fixed × Hug]
    Section / Do and don't [FRAME, vertical Auto Layout, Fill × Hug]
      Copy [FRAME, vertical Auto Layout, 800 Fixed × Hug]
      Comparison [FRAME, horizontal wrap Auto Layout, up to 1120 Fixed × Hug]
        Do [FRAME]
          {Correct example} [FRAME or INSTANCE]
          {Specific instruction} [TEXT]
        Don't [FRAME]
          {Incorrect example} [FRAME or INSTANCE]
          {Specific instruction} [TEXT]
    Section / Accessibility [FRAME, vertical Auto Layout, Fill × Hug]
      Copy [FRAME, vertical Auto Layout, 800 Fixed × Hug]
        {Designer responsibility} [TEXT]
        ✓ {Approved accessibility target} checked [TEXT]
```

The item specification replaces the generic section names with familiar subjects such as `Color roles`, `Type hierarchy`, `Spacing in components`, or `Reduced motion`.

## Exact construction

All structural values below are multiples of 4.

| Object | Construction |
| --- | --- |
| Guide root | Regular unpublished `FRAME`; `1600px` fixed width; Hug height; vertical Auto Layout; `0px` padding; `0px` gap; semantic canvas fill |
| Placement | Existing Foundations area; X and Y divisible by 4; at least `64px` from adjacent top-level frames |
| Header | Fill × Hug; vertical Auto Layout; `80px` horizontal and `64px` vertical padding; `12px` gap; content aligned left; definition maximum width `800px` |
| Article | Fill × Hug; vertical Auto Layout; `80px` horizontal and vertical padding; `64px` section gap; center alignment |
| Section | Fill × Hug; vertical Auto Layout; `32px` gap; center alignment |
| Reading column | `800px` fixed width; Hug height; vertical Auto Layout; `16px` gap; aligned left |
| Annotated example | `800px` default width; up to `1280px` only when the specimen needs it; Hug height; vertical Auto Layout; `32px` padding; `24px` gap; `12px` radius; semantic subtle surface fill |
| Example group | Horizontal wrap or vertical Auto Layout as required; Fill × Hug; `24px` row and column gap |
| Specimen annotation | Hug height; `8px` gap between name and value; `12px` before the meaning or usage sentence |
| Comparison | `1120px` maximum width; horizontal wrap Auto Layout; `24px` gap |
| Do or don't block | `548px` fixed width when paired; Hug height; vertical Auto Layout; `24px` padding; `16px` gap; semantic surface fill and subtle inside border |
| Accessibility block | `800px` fixed width; Hug height; vertical Auto Layout; `16px` gap; `24px` padding; `12px` radius; semantic subtle surface fill |

If an actual-size specimen cannot fit within `1280px`, expand the root to the next multiple of 4 and state the exception in the item specification. Never scale an actual-size layout, logo, or media specimen merely to fit the guide.

## Content rules

- Begin with a definition and a short explanation of why the Foundation matters.
- Organize later sections around designer decisions, not variable collections or internal architecture.
- Limit one example block to the smallest set that explains the rule; use no more than six specimens unless the item file requires a small, meaningful permutation.
- Give each example a visible name, value, meaning, and usage sentence.
- Use annotated applied examples for relationships that are not clear from isolated samples.
- Put supported appearance values side by side only when a designer must compare them.
- Give every do-and-don't pair one specific decision and one specific instruction beneath each example.
- Use realistic, neutral copy. Do not create product screens or business-specific flows to populate the guide.
- Use the approved Text Styles and semantic color roles for all documentation chrome.

## Specimen rules

- Bind preview geometry to the implemented variable or Style when Figma supports it.
- Use connected instances for existing shared assets. Never detach an instance for documentation.
- Build Foundation guides before dependent components. Use text, variable-bound geometry, and approved shared assets; do not create production components solely to populate a guide.
- Use the current resolved value as visible text and refresh it whenever the bound value changes.
- Use familiar display labels such as `Brand 600`, `Surface`, or `Heading 2`; do not expose raw implementation paths as the only label.
- Keep text containers at Hug height and allow copy to wrap. Do not truncate explanations.

## Build sequence

1. Read the Foundation specification and approved Discovery brief.
2. Inspect existing Figma values, Styles, assets, and documentation.
3. Create or update the Foundation and run its internal checks.
4. Build the header, written sections, annotated examples, do-and-don't guidance, and accessibility block defined by the item recipe.
5. Confirm displayed values match the bound variables, Styles, or connected assets.
6. Inspect the guide's metadata and screenshot internally.
7. Correct incomplete copy, missing values, unlabeled specimens, clipping, or broken bindings before marking the Foundation complete.

If required brand input is missing, stop. Do not create placeholder values or present proposed values as approved.

## Documentation QA gate

The guide fails QA if any answer below is `No`:

- Can a designer explain what the Foundation controls after reading the header and overview?
- Is the guide organized as readable guidance rather than a dashboard or exhaustive inventory?
- Does every displayed specimen have a visible name, resolved specification, meaning, and usage?
- Are supported modes explained where they affect designer decisions?
- Do examples demonstrate application rather than merely display samples?
- Does every do-and-don't pair contain written, specific guidance?
- Are accessibility claims limited to checks that were actually completed?
- Is all visible copy legible, correctly attached to its example, and free of clipping?

A guide that fails this gate is unfinished even when its underlying variables, Styles, or assets are correct.

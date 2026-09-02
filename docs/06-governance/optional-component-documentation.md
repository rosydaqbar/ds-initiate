# Optional Component Documentation

This standard defines the optional Figma landing frame for a finished Atom, Molecule, or Organism. It is separate from component construction and is created only after the named component passes QA and the user approves its documentation.

Foundations are excluded from this opt-in rule because their guides are mandatory.

## Component completion boundary

A component is complete when its Figma objects, variants, properties, variables, interactions, publishing information, and internal QA are finished. A landing frame is not required for component completion.

Use this sequence:

1. Build and internally validate the component.
2. Ask: “The {Component} component is complete. Should I build its optional designer documentation from {filename}.md?”
3. If declined, create nothing.
4. If approved, re-read the finished component and build or update `Documentation / {Component}`.

Approval applies only to the named component.

## Audience boundary

The landing frame helps designers choose and use the component. It does not expose how the library was built or tested.

### Show in Figma

- Purpose.
- When to use and when not to use.
- Actual visual styles, sizes, states, and editable properties.
- Do-and-don't examples.
- A concise accessibility status such as `✓ WCAG 2.2 AA checked` plus any responsibility the consuming designer must still handle.

### Keep internal

- Variant-count calculations.
- Variable and Style binding tables.
- Alias paths, scopes, IDs, and code syntax.
- Metadata dumps.
- Contrast ratios and accessibility test output.
- 4px audit output and rendering-exception reports.
- Screenshot, connection, and validation logs.

## Source of truth

Build the landing frame from the finished Figma component and its Markdown specification. Show only capabilities that exist in the final component.

- Use connected instances; never detach or redraw a component for documentation.
- Read the actual styles, sizes, states, text properties, booleans, and instance swaps before creating examples.
- Omit irrelevant sections and repetitive combinations.
- If the final component conflicts with its specification, resolve the component defect before documenting it.

## Root frame construction

| Property | Required construction |
| --- | --- |
| Name | `Documentation / {Component}` |
| Object | Regular `FRAME`; not published |
| Default width | `1200px`; expand only when a real specimen cannot reflow |
| Height | Hug contents |
| Layout | Vertical Auto Layout |
| Padding | `40px` |
| Section gap | `48px` |
| Fill | Approved semantic canvas/background role |
| Coordinates | Whole numbers on the 4px grid |

Keep at least `64px` between the landing frame and production component sets. Do not scale component instances to fit documentation.

## Designer-facing layer tree

```text
Documentation / {Component}
  Header
    Component name
    One-sentence purpose
    Connected recommended instance
  Section / Usage
    When to use
    When not to use
  Section / Variants and properties
    Styles
    Sizes
    States
    Editable properties
  Section / Do and don't
    Correct examples
    Incorrect examples
  Section / Accessibility
    Checked status
    Remaining designer responsibilities
```

Do not add Anatomy, Variables and Styles, Metadata, Validation, QA results, or implementation-behavior sections unless the user explicitly asks for that additional documentation.

## Section construction

| Object | Construction |
| --- | --- |
| Section | Fill × Hug vertical Auto Layout, `24px` padding, `16px` gap, `12px` radius, `1px` inside stroke |
| Specimen grid | Horizontal wrap Auto Layout, Fill × Hug, `24px` row and column gaps |
| Specimen card | Vertical Auto Layout, Hug/Fill × Hug, `16px` gap, `24px` padding |
| Specimen canvas | Centered Auto Layout, Fill × Hug, minimum `96px` height, `24px` padding |
| Comparison row | Horizontal wrap Auto Layout, Fill × Hug, `16px` gap |
| Callout | Use only when a usage or do-and-don't example needs a short annotation |

Use the approved Text Styles and semantic colors. Text containers use Hug height and wrap instead of clipping.

## Variants and properties

Document permutations from connected instances:

- Show every public visual style once.
- Show every size once with its intended use.
- Show the states a designer needs to recognize, in their final order.
- Demonstrate meaningful boolean changes as before/after pairs.
- Demonstrate the default and one approved replacement for each instance-swap property.
- Show text properties with realistic content.
- Use a full matrix only when the interaction between axes changes the meaning or appearance; otherwise use focused rows.

Do not display the implementation's variant-count math or private helper matrix.

## Do-and-don't section

Use the component-specific rules in its item file. Show one correct and one incorrect application for each important rule with connected instances. Focus on decisions such as hierarchy, action choice, content, placement, grouping, density, state selection, and responsive behavior.

Never manufacture an incorrect component variant. The "don't" example changes the surrounding composition or selects an existing but inappropriate permutation.

## Accessibility status

After internal accessibility QA passes, show one concise line:

```text
✓ WCAG 2.2 AA checked
```

Replace the target only when discovery approved a stricter standard. Add a short designer responsibility only when accessibility still depends on composition, such as providing an accessible name, preserving reading order, or meeting the minimum target size.

Do not show ratios, test cases, automated-tool output, keyboard test logs, or screen-reader logs.

## Internal documentation QA

After building the approved landing frame, verify internally:

- Every specimen remains connected.
- Displayed permutations match the final component.
- No unbuilt option is shown.
- No instance is scaled or detached.
- Text, focus rings, shadows, menus, and overlays do not clip.
- The frame follows the 4px structural rule.
- The final screenshot is legible and free of overflow.

Record these results in the build ledger or chat summary, not in the Figma landing frame.

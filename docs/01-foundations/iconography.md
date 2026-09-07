# Iconography

**Library section:** Foundations and Shared Assets

## Required input

Approved icon library or direction: outline, filled, or two-tone; stroke weight; corner character; licensing.

## Create in Figma

- Draw each master icon inside a `24×24px` frame named `Icon/{Meaning}` and publish it as one component. Do not create a component set for icon names.
- Maintain a minimum `2px` optical safe area inside the frame. Path coordinates may use optical fractions, but the component frame remains grid-aligned.
- Supported instance boxes are `16×16`, `20×20`, `24×24`, and `32×32px`.
- Use one approved stroke family: `1.5px` for regular outline or `2px` for bold outline. Stroke width is a drawing-detail exception, not a layout token.
- Use round or square caps consistently with the approved brand direction. Do not mix them inside one icon set.
- Remove embedded color; paths inherit `color/icon/*` from the consuming component.
- Components receive icons through instance-swap properties. Icon names are never variants.

Build the Foundation guide described below during icon construction. This mandatory Iconography guide is separate from the optional landing frame defined in [Icon](../02-atoms/icon.md); do not create that additional component frame without approval.

## Validation

Icons align optically with text and remain recognizable at their smallest supported size.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Iconography` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

### Required visible structure and copy

```text
Documentation / Iconography
  Header
    Iconography
    Icons communicate common actions, objects, and status in a compact visual form.
  Overview
  Visual style
  Sizes and safe area
  Icon gallery
  Color and backgrounds
  Naming and meaning
  Do and don't
  Accessibility
```

Use this overview copy: `Use an icon when its meaning is familiar or when a text label is also available. Keep stroke, corner treatment, optical size, and naming consistent across the set.`

Create a `Visual style` annotated example that shows the approved `Outline`, `Filled`, or `Two-tone` treatment. Display the approved stroke width, cap style, join style, and corner character as visible text. Add: `All icons in the set use this treatment unless a documented exception is approved.`

Create four size examples in one row showing the same connected icon at `16×16`, `20×20`, `24×24`, and `32×32px`. Each example must show the visible size and one usage label: `Compact`, `Small`, `Default`, or `Large`. Create a separate `24×24px` safe-area diagram with the `2px` optical safe area visibly measured.

Build a complete, grouped reference of EVERY icon approved for this library. Use linked continuation frames for large sets. Each entry has a connected instance, exact asset name, familiar meaning, intended use, supported sizes/treatments, and an accessible-label rule. Use `240px`-wide Hug-height entries with `16px` padding and a `16px` wrap gap. Names and explanations wrap without truncation. Group by familiar purposes such as Actions, Navigation and Status; do not publish those groups as new component variants. The native Assets panel supplements this reference.

Show the same icon on `Standard surface` and `Inverse surface`. Label the resolved icon color value beneath each example and add: `Icons use the icon color role intended for their background and emphasis.`

Create these comparisons:

- Do: `Use one icon consistently for one meaning.`
- Don't: `Do not reuse the same icon for unrelated actions.`
- Do: `Pair an unfamiliar or critical icon with a text label.`
- Don't: `Do not rely on an ambiguous icon without explanation.`
- Do: `Preserve the approved frame, stroke, and optical balance.`
- Don't: `Do not stretch, redraw, or recolor a local copy.`

Finish with: `Icons must remain understandable at the smallest supported size and cannot be the only cue for critical status.` Report the design checks actually performed and the remaining implementation checks under [Accessibility](accessibility.md).

Do not show asset counts, node IDs, connection reports, or contrast calculations. The guide fails QA when gallery items lack names or style, size, color, and meaning guidance is missing.

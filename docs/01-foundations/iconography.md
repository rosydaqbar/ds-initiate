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

Create `Iconography Guide` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Build a connected gallery of approved `Icon/{Meaning}` components in `64×80px` cells with `16px` wrap gaps and the familiar name below. Add size examples at `16`, `20`, `24`, and `32px`, safe-area and stroke diagrams, standard and inverse-surface usage, naming guidance, and do-and-don't examples. Add `✓ WCAG 2.2 AA checked` after the internal accessibility review. Do not display asset counts, connection reports, contrast calculations, or validation results.

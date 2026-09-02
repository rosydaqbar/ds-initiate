# Borders

**Library section:** Foundations

## Create in Figma

Create `FLOAT` variables in `Border`: `border/width/none = 0`, `border/width/default = 1`, `border/width/strong = 2`, and `border/width/focus = 4`. The `1px` and `2px` values use inside strokes so outer component geometry remains on the 4px grid.

Bind border color to `color/border/subtle`, `default`, `strong`, `focus`, `disabled`, or `error`. Use solid strokes by default. A drop zone may use a dashed `1px` inside stroke with dash `4` and gap `4`; no other dashed style is published without a documented pattern.

Focus treatment is a `4px` outer ring or an equivalent Effect Style and must not change Auto Layout size.

## Validation

Borders must remain visible in every appearance mode and should not be the only indicator of selection or error.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Create `Border Guide` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Use `160×80px` examples for subtle, default, strong, focus, error, and the approved dashed treatment. Explain when each treatment is appropriate and add do-and-don't comparisons that pair selection and error with a non-color cue. Do not show exception reports or validation results. Verify widths, bindings, mode visibility, and focus clearance internally before completion.

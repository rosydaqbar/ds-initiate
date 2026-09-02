# Spacing

**Library section:** Foundations

## Figma build

Create `FLOAT` variables in the `Spacing` collection using the exact scale defined in [4px-grid.md](4px-grid.md): `0`, `4`, `8`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `64`, `80`, and `96`.

Name variables by their pixel value: `spacing/0`, `spacing/4`, `spacing/8`, `spacing/12`, `spacing/16`, `spacing/20`, `spacing/24`, `spacing/32`, `spacing/40`, `spacing/48`, `spacing/64`, `spacing/80`, and `spacing/96`. Do not add values between the published steps or create component-specific spacing variables.

## Rules

- Components use the scale rather than one-off values.
- Optical corrections are limited to vector paths; frame geometry stays on the 4px grid.
- New values require a repeated product need.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Create `Spacing Guide` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Group the scale into practical uses such as inline gaps, control padding, container padding, and section separation. Use variable-bound examples and focused do-and-don't comparisons. Show names and values only when they help a designer choose spacing; do not present a complete implemented inventory, code syntax, or validation output. Verify values and bindings internally before completion.

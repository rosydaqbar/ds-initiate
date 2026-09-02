# Radius

**Library section:** Foundations

## Figma build

Create role-based `FLOAT` variables in `Radius`: `radius/none = 0`, `radius/small = 4`, `radius/control = 8`, `radius/surface = 12`, `radius/media = 12`, `radius/large = 16`, and `radius/pill = 9999`.

The approved shape direction determines these values. Add another alias layer only when multiple approved themes genuinely require different radius mappings.

All finite radii must be divisible by 4. `9999` is permitted only as Figma's pill-rendering instruction.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Create `Radius Guide` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Show control, surface, media, and pill examples at a consistent size, explain where each role is used, and add do-and-don't comparisons for consistent shape hierarchy. Do not show alias paths, code syntax, or validation results. Verify the bindings and approved values internally before completion.

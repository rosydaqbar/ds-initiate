# Radius

**Library section:** Foundations

## Figma build

Create role-based `FLOAT` variables in `Radius`: `radius/none = 0`, `radius/small = 4`, `radius/control = 8`, `radius/surface = 12`, `radius/media = 12`, `radius/large = 16`, and `radius/pill = 9999`.

The approved shape direction determines these values. Add another alias layer only when multiple approved themes genuinely require different radius mappings.

All finite radii must be divisible by 4. `9999` is permitted only as Figma's pill-rendering instruction.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Radius` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

### Required visible structure and copy

```text
Documentation / Radius
  Header
    Radius
    Radius defines the corner shape of controls, surfaces, media, and pill-shaped elements.
  Overview
  Radius roles
  Shape hierarchy
  Do and don't
  Accessibility
```

Use this overview copy: `Choose radius by the role of an element. Reusing role-based corners creates a consistent shape language and preserves hierarchy between nested elements.`

Create a complete reference for EVERY approved radius role, including None, Small and Large. Use wrapping `224px`-wide entries and as many rows as needed. Each specimen contains a `176×112px` variable-bound preview, familiar role name, actual pixel value, and the required usage sentence:

| Role | Value | Required usage sentence |
| --- | ---: | --- |
| None | `0px` | `Use for square corners where no rounding is intended.` |
| Small | `4px` | `Use for compact details needing less rounding than controls.` |
| Large | `16px` | `Use for large surfaces assigned stronger rounding by the approved shape direction.` |
| Control | `8px` | `Use for buttons, fields, and other interactive controls.` |
| Surface | `12px` | `Use for cards, panels, menus, and grouped surfaces.` |
| Media | `12px` | `Use for images and media containers.` |
| Pill | `Full` | `Use only when the element is intentionally capsule-shaped.` |

Show one nested `320×200px` hierarchy example with a Surface container and Control element. Label both radii and add: `Related elements may use different roles while keeping a deliberate visual relationship.`

Create one comparison row:

- Do: `Use the assigned radius role consistently for the same element type.`
- Don't: `Do not choose corners independently for each instance.`

Finish with: `Corner shape must not reduce the usable area or obscure focus treatment.` Report the design checks actually performed and the remaining implementation checks under [Accessibility](accessibility.md).

Show the exact variable name beside every role and derive labels from approved values, not the defaults printed here. For Pill, show `Full · radius/pill = 9999 (rendering sentinel)` and explain that Figma clamps rounding to the shape; do not label 9999 as a measured corner. The guide fails QA when any role is absent or lacks its name, actual value, bound preview or individual usage sentence. Keep IDs and QA logs internal.

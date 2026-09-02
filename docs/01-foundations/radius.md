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

Create four `224px`-wide specimens in one annotated example block for the representative roles below. Each specimen contains a `176×112px` variable-bound preview, familiar role name, actual pixel value, and the required usage sentence:

| Role | Value | Required usage sentence |
| --- | ---: | --- |
| Control | `8px` | `Use for buttons, fields, and other interactive controls.` |
| Surface | `12px` | `Use for cards, panels, menus, and grouped surfaces.` |
| Media | `12px` | `Use for images and media containers.` |
| Pill | `Full` | `Use only when the element is intentionally capsule-shaped.` |

Show one nested `320×200px` hierarchy example with a Surface container and Control element. Label both radii and add: `Related elements may use different roles while keeping a deliberate visual relationship.`

Create one comparison row:

- Do: `Use the assigned radius role consistently for the same element type.`
- Don't: `Do not choose corners independently for each instance.`

Finish with: `Corner shape must not reduce the usable area or obscure focus treatment.` Add `✓ WCAG 2.2 AA checked` after the related checks pass.

The complete Radius collection stays in Figma's variables panel and this Markdown file. Do not reproduce it as an inventory table. Do not show alias paths, code syntax, or QA logs. The guide fails QA when a selected tile lacks its role, value, or usage sentence.

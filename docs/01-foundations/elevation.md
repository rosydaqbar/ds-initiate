# Elevation

**Library section:** Foundations

## Create in Figma

Create these Effect Styles. Shadow detail does not affect layout bounds, but the values below use a 4px rhythm wherever practical.

| Style | Shadow definition | Use |
| --- | --- | --- |
| `Shadow/None` | none | Flat surfaces |
| `Shadow/Small` | `0 4 8 0` at subtle opacity | Raised controls and menus |
| `Shadow/Medium` | `0 8 16 -4` at medium opacity | Popovers and floating panels |
| `Shadow/Large` | `0 16 32 -8` at medium opacity | Dialogs and drawers |
| `Shadow/Overlay` | `0 24 48 -12` at strong opacity | Highest temporary layer |
| `Focus/Default` | 4px semantic focus ring | Interactive focus |

Shadow colors use approved semantic effect roles. If background blur is approved, publish `Blur/Overlay` at `16px`; do not apply local blur values.

## Usage

- Small: raised controls and menus.
- Medium: popovers and floating panels.
- Large: dialogs and drawers.
- Overlay: surfaces that must clearly separate from the page.

Elevation communicates layer and interaction. Decorative shadows not tied to hierarchy are excluded.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Elevation` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

### Required visible structure and copy

```text
Documentation / Elevation
  Header
    Elevation
    Elevation communicates which surfaces sit above others and which layer currently needs attention.
  Overview
  Elevation levels
  Layer hierarchy
  Do and don't
  Accessibility
```

Use this overview copy: `Use elevation to explain hierarchy, temporary layering, or interaction. Choose the lowest level that communicates the relationship clearly.`

Create one annotated example block containing up to six representative elevation roles. Give each `224px`-wide specimen at least `64px` visual clearance around a `160×96px` surface. Apply the actual Style and show the familiar name, the resolved shadow definition, and the usage sentence:

| Style | Visible specification | Required usage sentence |
| --- | --- | --- |
| None | `No shadow` | `Use for flat surfaces separated by spacing, color, or border.` |
| Small | `0 4px 8px 0` plus the resolved color and opacity | `Use for raised controls and menus.` |
| Medium | `0 8px 16px -4px` plus the resolved color and opacity | `Use for popovers and floating panels.` |
| Large | `0 16px 32px -8px` plus the resolved color and opacity | `Use for dialogs and drawers.` |
| Overlay | `0 24px 48px -12px` plus the resolved color and opacity | `Use for the highest temporary surface.` |
| Focus | `4px focus treatment` plus the resolved color | `Use only to communicate visible keyboard focus.` |

If `Blur / Overlay` is approved and it changes a designer decision, add a separate example labeled `16px background blur` and `Use behind a temporary overlay only when underlying context should remain perceptible.`

Create a `Layer hierarchy` diagram with three offset `320×160px` neutral surfaces labeled `Base`, `Floating`, and `Temporary overlay`. Add: `Higher elevation corresponds to a temporary layer above the current surface; it is not a decorative intensity scale.`

Create one comparison row:

- Do: `Use elevation to communicate a real layer or interaction relationship.`
- Don't: `Do not add a shadow only to decorate a flat surface.`

Finish with: `Elevation must preserve visible boundaries and focus treatment in every supported appearance.` Add `✓ WCAG 2.2 AA checked` after the related checks pass.

Do not show Style IDs, code syntax, or validation logs. The guide fails QA when a shadow specimen lacks its name, visible specification, or hierarchy use.

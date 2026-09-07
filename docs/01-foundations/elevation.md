# Elevation

**Library section:** Foundations

## Required input

Approved elevation scope, exact shadow colors and opacities in each mode, and any blur permission. Terms such as subtle, medium and strong below express intended emphasis; they are not executable alpha values. Resolve every layer to numbers before construction. A flat direction may explicitly retain only None plus Focus; document that scope rather than inventing shadows.

## Create in Figma

Create the following default Effect Styles within the approved elevation scope; record any explicitly approved exclusions. Shadow detail does not affect layout bounds, but the values below use a 4px rhythm wherever practical.

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

Document EVERY approved Effect Style and every effect layer, including None, Focus and optional Blur. Use as many grouped rows as needed. Give each `352px`-wide specimen 64px clearance on both sides of a `160×96px` surface; reserve at least 64px above/below and additional space if the actual shadow extends farther. Apply the actual Style and show the familiar name, the resolved shadow definition, and the usage sentence:

| Style | Visible specification | Required usage sentence |
| --- | --- | --- |
| None | `No shadow` | `Use for flat surfaces separated by spacing, color, or border.` |
| Small | `0 4px 8px 0` plus the resolved color and opacity | `Use for raised controls and menus.` |
| Medium | `0 8px 16px -4px` plus the resolved color and opacity | `Use for popovers and floating panels.` |
| Large | `0 16px 32px -8px` plus the resolved color and opacity | `Use for dialogs and drawers.` |
| Overlay | `0 24px 48px -12px` plus the resolved color and opacity | `Use for the highest temporary surface.` |
| Focus | `4px focus treatment` plus the resolved color | `Use only to communicate visible keyboard focus.` |

For each effect layer, show type, X/Y offset, blur, spread, color and opacity under each supported mode. Show the exact Style name, associated surface role and an alternative boundary treatment when shadow is absent. Explain that Focus identifies keyboard location and is not a higher surface elevation. Put the same purpose in the native Style description.

If `Blur/Overlay` is approved, add a separate example labeled `16px background blur` and `Use behind a temporary overlay only when underlying context should remain perceptible.`

Create a `Layer hierarchy` diagram with three offset `320×160px` neutral surfaces labeled `Base`, `Floating`, and `Temporary overlay`. Add: `Higher elevation corresponds to a temporary layer above the current surface; it is not a decorative intensity scale.`

Create one comparison row:

- Do: `Use elevation to communicate a real layer or interaction relationship.`
- Don't: `Do not add a shadow only to decorate a flat surface.`

Finish with: `Elevation must preserve visible boundaries and focus treatment in every supported appearance.` Report the design checks actually performed and the remaining implementation checks under [Accessibility](accessibility.md).

Do not show Style IDs, code syntax, or validation logs. The guide fails QA when a shadow specimen lacks its name, visible specification, or hierarchy use.

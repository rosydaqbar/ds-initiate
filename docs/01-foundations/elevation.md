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

Create `Elevation Guide` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Apply each approved Effect Style to an equal `160×96px` surface example and explain when to use each level. Add do-and-don't examples showing meaningful hierarchy versus decorative shadow use. Do not show shadow parameters, code syntax, or validation output. Keep at least `64px` clearance around examples and verify Style connections and modes internally.

# Button

**Atomic level:** Atom  
**Library section:** Base Components / Buttons  
**Figma page:** `Buttons`  
**Deliverable:** four public component sets and one private nested component set

## Create in Figma

Create four public component sets:

- `Button/Primary`
- `Button/Secondary`
- `Button/Tertiary`
- `Button/Link`

Each set has `Size = Small | Medium | Large`, `Intent = Default | Destructive`, and `State = Default | Hover | Pressed | Focus | Disabled`. The calculation is `3 × 2 × 5 = 30` variants per set. Do not combine the four styles into one set; that would create 120 variants and make the property panel difficult to use.

Create the private component set `_Button/Content` with `Size = Small | Medium | Large` and `Loading = false | true`, for `3 × 2 = 6` variants. Expose its nested `Loading` property on every public set. The private component preserves label width while loading and avoids doubling the public variant count.

Use [Icon Button](icon-button.md) for icon-only actions.

## Layer tree

```text
Button/{Style} [COMPONENT, horizontal Auto Layout, Hug × Fixed]
  Content [_Button/Content INSTANCE, Hug × Hug]
    Leading icon [Icon INSTANCE, Fixed; boolean visibility]
    Label [TEXT, Hug × Hug]
    Trailing icon [Icon INSTANCE, Fixed; boolean visibility]
    Spinner [Spinner INSTANCE, absolute center; visible only when Loading=true]
```

`Content` is centered on both axes. In the loading variant, set the icon and label group opacity to `0` instead of hiding or deleting it; the spinner is absolutely positioned in the center so the Button width does not change.

## Exact construction

| Size | Height | Min width | Horizontal padding | Gap | Icon | Label Style | Radius | Resizing |
| --- | ---: | ---: | ---: | ---: | ---: | --- | ---: | --- |
| Small | 32 | 64 | 12 | 8 | 16 | `Label/Small` = 12/16, semibold | 8 | Width Hug; height Fixed |
| Medium | 40 | 80 | 16 | 8 | 20 | `Label/Medium` = 16/24, semibold | 8 | Width Hug; height Fixed |
| Large | 48 | 96 | 20 | 8 | 24 | `Label/Medium` = 16/24, semibold | 8 | Width Hug; height Fixed |

Set vertical padding to `0`; the fixed height plus center alignment controls vertical placement. Bind height and icon size to `Sizing`, horizontal padding and gap to `Spacing`, and corner radius to `Radius`. All structural measurements are divisible by 4.

`Button/Link` uses the same height and target frame but has transparent fill and no border. The visible text may hug its content; the component frame must still preserve the height for alignment. When used alone in a product frame, wrap Small Button instances in a minimum `44×44px` interactive target if the visible control is smaller than that.

`Button/Secondary` uses a `1px` inside stroke. This is a controlled rendered-stroke exception: its outer W/H and every layout value remain on the 4px grid. Focus uses a `4px` outer ring and does not change component bounds.

## Component properties

| Property | Type | Default | Preferred values |
| --- | --- | --- | --- |
| `Label` | Text | `Button` | Free text |
| `Show leading icon` | Boolean | `false` | `true`, `false` |
| `Leading icon` | Instance swap | `Icon/Placeholder` | Approved Icon components only |
| `Show trailing icon` | Boolean | `false` | `true`, `false` |
| `Trailing icon` | Instance swap | `Icon/ArrowRight` | Approved Icon components only |
| `Loading` | Nested boolean/variant | `false` | `true`, `false` |

Do not create icon-position or label-content variants. Expose the Icon instances only when their matching visibility property is true.

## Variable and Style bindings

| Set/layer | Default | Hover | Pressed | Focus | Disabled |
| --- | --- | --- | --- | --- | --- |
| Primary fill | `color/background/brand/default` | `color/background/brand/hover` | `color/background/brand/pressed` | Default + `color/border/focus` ring | `color/background/brand/disabled` |
| Primary label | `color/text/on-brand` | same role | same role | same role | `color/text/disabled` |
| Primary icon | `color/icon/on-brand` | same role | same role | same role | `color/icon/disabled` |
| Secondary fill | `color/background/surface` | `color/background/subtle` | `color/background/strong` | Default + ring | `color/background/disabled` |
| Secondary stroke | `color/border/default` | `color/border/strong` | `color/border/strong` | `color/border/focus` | `color/border/disabled` |
| Tertiary fill | transparent | `color/background/subtle` | `color/background/strong` | transparent + ring | transparent |
| Link fill | transparent | transparent | transparent | transparent + ring | transparent |
| Default label | `color/text/brand` | same role | same role | same role | `color/text/disabled` |
| Default icon | `color/icon/brand` | same role | same role | same role | `color/icon/disabled` |
| Destructive roles | Replace brand backgrounds, text, icons, and borders with their matching `danger` roles | | | | |

Text binds to `Label/Small` or `Label/Medium`; radius binds to `radius/control`; content spacing binds to `spacing/8`. No layer may use a raw color.

## Prototype behavior

- `Default` → `Hover`: `While hovering`, Change to, Smart Animate, `100ms`, ease out.
- `Hover` → `Pressed`: `While pressing`, Change to, `0ms` or instant.
- `Default`, `Hover`, or `Pressed` → `Focus`: document as the keyboard-focus appearance; do not fake keyboard logic in the library component.
- `Disabled`: no hover or press reaction; nested content opacity and semantic colors communicate unavailability.
- `Loading`: retain the Button's accessible name in documentation and block repeat activation in implementation.

## Variant presentation

Within each component set, place `State` across columns and `Size × Intent` down rows. Use `16px` between variants and `40px` component-set padding. Place the four public sets `64px` apart. Put `_Button/Content` in a clearly labeled private-parts section below the public sets.

## QA

- Exactly four public sets with 30 variants each; no public set exceeds 30.
- Exactly six `_Button/Content` variants.
- Small, Medium, and Large heights are exactly `32`, `40`, and `48`.
- Button width does not change when `Loading` changes.
- Leading and trailing icons align to a 4px-based box and never compress.
- Labels with 200% text length do not clip; the component grows horizontally.
- All X, Y, W, H, padding, gap, and finite radius values are whole numbers divisible by 4.
- Only the documented `1px` inside stroke and approved icon strokes are off-grid.
- Light, Dark, Default intent, Destructive intent, disabled, and focus appearances pass contrast review.
- Every Button used in a product example has at least a `44×44px` interactive target.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Button` component and its dependencies pass component QA, ask:

> “The Button component is complete. Should I build its optional designer documentation from [button.md](button.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Button`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `Button/Primary` instance using `Size=Medium`, `Intent=Default`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Use Button for a labelled action; use Icon Button when the action is intentionally icon-only. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show one clear action label, intentional hierarchy, and Destructive intent only for destructive outcomes. Do not use Button for icon-only actions, place competing Primary actions together, or change state manually. |
| Variants and states | Start with a public-set comparison for `Button/Primary`, `Button/Secondary`, `Button/Tertiary`, `Button/Link`, then build focused connected-instance comparisons for `Size` (`Small`, `Medium`, `Large`); `Intent` (`Default`, `Destructive`); `State` (`Default`, `Hover`, `Pressed`, `Focus`, `Disabled`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Button`); `Show leading icon` (Boolean, default `false`); `Leading icon` (Instance swap, default `Icon/Placeholder`); `Show trailing icon` (Boolean, default `false`); `Trailing icon` (Instance swap, default `Icon/ArrowRight`); `Loading` (Nested boolean/variant, default `false`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

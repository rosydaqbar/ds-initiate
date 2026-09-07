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
| Tertiary fill | `color/background/transparent` | `color/background/subtle` | `color/background/strong` | transparent role + ring | transparent role |
| Link fill | `color/background/transparent` | transparent role | transparent role | transparent role + ring | transparent role |
| Default label | `color/text/brand` | same role | same role | same role | `color/text/disabled` |
| Default icon | `color/icon/brand` | same role | same role | same role | `color/icon/disabled` |
| Destructive Primary fill | `color/background/danger/default` | `color/background/danger/hover` | `color/background/danger/pressed` | Default danger fill + focus ring | `color/background/danger/disabled` |
| Destructive Primary label | `color/text/on-danger` | same role | same role | same role | `color/text/disabled` |
| Destructive Primary icon | `color/icon/on-danger` | same role | same role | same role | `color/icon/disabled` |
| Destructive non-Primary label | `color/text/danger` | same role | same role | same role | `color/text/disabled` |
| Destructive non-Primary icon | `color/icon/danger` | same role | same role | same role | `color/icon/disabled` |
| Destructive Secondary stroke | `color/border/danger` | same role | same role | `color/border/focus` | `color/border/disabled` |

Destructive Secondary and Tertiary retain their neutral fill states; Link retains its transparent semantic fill. Inactive roles remain disabled, and keyboard focus always uses the focus role. Do not substitute validation-error roles for destructive actions.

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

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Button`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

Build the sections below as visible headings, paragraphs, annotated connected-instance rows, and do-and-don't comparisons. Do not turn this recipe into a Figma table or reproduce all 120 public variants. The finished Figma component remains the source of truth for every displayed selection.

### Header and overview

Create these visible text layers:

- Category: `Atoms`
- Title: `Button`
- Definition: `Buttons trigger an immediate action and make the next step clear.`
- Heading: `Use a button for an action`
- Overview: `Use Button when selecting the control performs an action, such as submitting, saving, confirming, or starting a task.`
- When not to use: `Use Link for navigation to another destination. Use Icon Button only when space is constrained and the icon has a familiar meaning.`

Below the overview, place one connected `Button/Primary` instance with `Size=Medium`, `Intent=Default`, `State=Default`, and label `Continue`. Add the caption: `Recommended default for the most important action in a focused area.`

### Hierarchy

Heading: `Choose emphasis by importance`

Introductory copy: `Button styles communicate action priority. Start with the least emphasis that still makes the action clear.`

Create one `1120px` annotated example block containing four connected Medium, Default-intent, Default-state instances. Show each public style once; place the visible label and explanation below its instance:

| Instance | Visible label | Visible explanation |
| --- | --- | --- |
| `Button/Primary` | `Primary` | `Use for the most important action in a focused area. Keep one Primary action in a related action group.` |
| `Button/Secondary` | `Secondary` | `Use for a supporting action that still needs clear visual weight.` |
| `Button/Tertiary` | `Tertiary` | `Use for a lower-emphasis action beside stronger actions or in compact groups.` |
| `Button/Link` | `Link style` | `Use for the quietest action treatment. Use the Link component instead when the interaction navigates.` |

The table above is an internal build instruction. In Figma, render it as one instance row with four short annotations, not as a table.

### Sizes

Heading: `Choose size for the available space`

Create one focused row using `Button/Primary`, Default intent, Default state, and label `Button`:

- `Small · 32px` — `Use in dense interfaces when a separate minimum interaction target is preserved.`
- `Medium · 40px` — `Use as the default size for most controls and forms.`
- `Large · 48px` — `Use when the action needs stronger presence or a larger direct target.`

Show the resolved height beside every instance. Include all approved sizes in the specification table with their exact size token, height, padding, gap, icon size and text style. Keep private construction helpers out of the guide; public dimensions and meaningful token names are required.

### States and intent

Heading: `States communicate interaction`

Use `Button/Primary`, Medium, Default intent for one five-instance row:

- `Default` — `Ready for interaction.`
- `Hover` — `Pointer is over the action.`
- `Pressed` — `The action is being activated.`
- `Focus` — `Keyboard focus is visible.`
- `Disabled` — `The action is temporarily unavailable.`

Add a separate two-instance comparison using Medium Primary buttons:

- `Default` — `Use for ordinary actions.`
- `Destructive` — `Use only when the action removes data, access, or another recoverable or irreversible resource.`

Do not combine every style, size, intent, and state. These focused rows document the actual permutations without duplicating the component-set matrix.

### Labels, icons, and loading

Heading: `Make the outcome predictable`

Create three focused connected-instance examples:

1. `Save changes` with no icon. Caption: `Write a concise action label that starts with a verb.`
2. `Download file` with one approved trailing or leading icon chosen according to the finished API. Caption: `Add an icon only when it reinforces the same action; do not use it as decoration.`
3. `Save changes` with `Loading=true`. Caption: `Loading preserves the button width and blocks repeat activation while the action is in progress.`

Do not create separate examples for every possible icon. Do not expose the placeholder icon or private `_Button/Content` component.

### Do and don't

Create three connected-instance comparison pairs. Each pair shows the example and the exact instruction beneath it.

1. Action hierarchy
   - Do: `Use one Primary button and a quieter style for the supporting action.`
   - Don't: `Do not place competing Primary actions in the same action group.`
2. Labels
   - Do: `Use a specific action label such as “Save changes”.`
   - Don't: `Do not use a vague label such as “OK” when the result is not obvious.`
3. Destructive intent
   - Do: `Use Destructive intent for an action that removes or revokes something.`
   - Don't: `Do not use Destructive intent only to attract attention.`

### Accessibility

Create this visible copy after component QA passes:

- `Keep the action label clear, preserve visible focus, and provide at least a 44×44px interaction target when the visible button is smaller.`
- `For icon-only actions, use Icon Button and provide an accessible name.`
- The design checks actually completed, pair-specific contrast results and remaining implementation checks; do not imply whole-product WCAG conformance.

Show meaningful public specifications, exact token names and pair-specific contrast results. Keep raw test logs, binding IDs and private construction helpers internal. Omit a capability only when the approved scope explicitly excludes it; complete missing required capabilities before marking the component ready. Never add, detach or redraw a component merely to complete the guide.

# Calendar Month

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Date and Time`  
**Deliverable:** one public component set named `CalendarMonth`

## Create in Figma

Create one public component set named `CalendarMonth`. Component-set math: Selection (2) × State (2) = 4 variants. Create private helpers: `_Calendar/Day`.

Displays one month grid for date selection.

## Layer tree

```text
CalendarMonth [COMPONENT, vertical Auto Layout, Fill × Hug]
  Month header [INSTANCE; Hug × Hug]
  Weekday labels [INSTANCE; Hug × Hug]
  Date cells [INSTANCE; Hug × Hug]
  _Calendar/Day [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Month | 320 | Hug, min 320 | 16/16/16/16 | 8 | 12 | Fixed × Hug |
| Day cell | 40 | 40 | 0/0/0/0 | 0 | 8 | Fixed × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Selection` | Single · Range |
| `State` | Default · Disabled |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Month label` | Text | `January 2026` | Displayed month |
| `Start date` | Text | `12` | Design sample |
| `End date` | Text | `18` | Range sample |

## Variable and Style bindings

| Layer/property | Binding |
| --- | --- |
| Container fill | `color/background/surface` |
| Text content, when present | `color/text/primary` |
| Icon or vector content, when present | `color/icon/primary` |
| Border | `color/border/default` |
| Focus | `color/border/focus` |
| Radius | `radius/control` |

Use semantic variables only; Primitives never bind directly to component layers. Text uses approved Text Styles and shadows use Effect Styles.

## Behavior

Use a seven-column fixed grid with 40px cells and 4px row gaps. Range fill connects adjacent cells without changing cell dimensions. Disabled dates have no selection reaction.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Week starts according to locale.
- Today and selected date have distinct indicators.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Calendar Month` component and its dependencies pass component QA, ask:

> “The Calendar Month component is complete. Should I build its optional designer documentation from [calendar-month.md](calendar-month.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Calendar Month`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `CalendarMonth` instance using `Selection=Single`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Displays one month grid for date selection. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show weekday headings and distinguish today, selected, unavailable, and out-of-month dates with more than color. Do not use Calendar Month as a static date label or enable unavailable dates visually. |
| Variants and states | Build focused connected-instance comparisons for `Selection` (`Single`, `Range`); `State` (`Default`, `Disabled`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Month label` (Text, default `January 2026`); `Start date` (Text, default `12`); `End date` (Text, default `18`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

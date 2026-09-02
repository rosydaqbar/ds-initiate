# Color Field

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Inputs`  
**Deliverable:** one public component set named `ColorField`

## Create in Figma

Create one public component set named `ColorField`. Component-set math: Size (3) × State (5) = 15 variants. No private helper is required.

Combines a color swatch, editable color value, and picker trigger.

## Layer tree

```text
ColorField [COMPONENT, vertical Auto Layout, Fill × Hug]
  Color swatch [INSTANCE; Hug × Hug]
  TextInput [INSTANCE; Hug × Hug]
  IconButton [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 240 | Hug, min 56 | 0/0/0/0 | 4 | 0 | Fill × Hug; control 32 |
| Medium | Fill, min 240 | Hug, min 64 | 0/0/0/0 | 4 | 0 | Fill × Hug; control 40 |
| Large | Fill, min 240 | Hug, min 72 | 0/0/0/0 | 4 | 0 | Fill × Hug; control 48 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium · Large |
| `State` | Default · Hover · Focus · Disabled · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Label` | Text | `Color` | Visible field label |
| `Value` | Text | `#000000` | Color notation |
| `Swatch color` | Instance swap | `Color swatch` | Bound color preview |

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

Swatch and trigger are fixed; input fills remaining width. Trigger opens Color Picker organism. Preserve exact control height by size.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Value supports the selected notation.
- Swatch is accompanied by the text value.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Color Field` component and its dependencies pass component QA, ask:

> “The Color Field component is complete. Should I build its optional designer documentation from [color-field.md](color-field.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Color Field`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `ColorField` instance using `Size=Medium`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Combines a color swatch, editable color value, and picker trigger. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show the swatch together with a readable value and the supported notation. Do not communicate the chosen color through the swatch alone or present an invalid value as selected. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`, `Large`); `State` (`Default`, `Hover`, `Focus`, `Disabled`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Color`); `Value` (Text, default `#000000`); `Swatch color` (Instance swap, default `Color swatch`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

# Slider Field

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Sliders`  
**Deliverable:** one public component set named `SliderField`

## Create in Figma

Create one public component set named `SliderField`. Component-set math: Size (2) × State (4) = 8 variants. No private helper is required.

Combines Slider with label, value, min/max labels, and validation.

## Layer tree

```text
SliderField [COMPONENT, vertical Auto Layout, Fill × Hug]
  Label and value row [INSTANCE; Hug × Hug]
  Slider [INSTANCE; Hug × Hug]
  Min/max row [INSTANCE; Hug × Hug]
  Message [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 240 | Hug, min 72 | 0/0/0/0 | 8 | 0 | Fill × Hug; slider 32 |
| Medium | Fill, min 280 | Hug, min 80 | 0/0/0/0 | 8 | 0 | Fill × Hug; slider 40 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium |
| `State` | Default · Focus · Disabled · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Label` | Text | `Value` | Required |
| `Value` | Text | `50` | Displayed value |
| `Minimum` | Text | `0` | Minimum label |
| `Maximum` | Text | `100` | Maximum label |
| `Error message` | Text | `Choose a valid value` | Error copy |

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

Value uses tabular numerals and updates with the handle. Min/max row uses space-between. Error message appears below with 4px gap.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Keyboard step and larger step are documented.
- Displayed value includes unit when required.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Slider Field` component and its dependencies pass component QA, ask:

> “The Slider Field component is complete. Should I build its optional designer documentation from [slider-field.md](slider-field.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Slider Field`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `SliderField` instance using `Size=Medium`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Combines Slider with label, value, min/max labels, and validation. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show the label, current value, unit, and meaningful minimum and maximum context. Do not use Slider Field for an exact critical value without a numeric entry path or leave the range unexplained. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`); `State` (`Default`, `Focus`, `Disabled`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Value`); `Value` (Text, default `50`); `Minimum` (Text, default `0`); `Maximum` (Text, default `100`); `Error message` (Text, default `Choose a valid value`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

# Form Field

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Inputs`  
**Deliverable:** one public component set named `FormField`

## Create in Figma

Create one public component set named `FormField`. Component-set math: Size (3) × State (4) = 12 variants. No private helper is required.

Provides the shared label, required indicator, control slot, help, error, success, and count structure for every field.

## Layer tree

```text
FormField [COMPONENT, vertical Auto Layout, Fill × Hug]
  Label row [INSTANCE; Hug × Hug]
  Control slot [INSTANCE; Hug × Hug]
  Message row [INSTANCE; Hug × Hug]
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
| `State` | Default · Disabled · Error · Success |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Label` | Text | `Field label` | Required |
| `Required` | Boolean | `false` | Show required indicator |
| `Control` | Instance swap | `TextInput` | Approved input atom or molecule |
| `Help text` | Text | `Helpful information` | Optional |
| `Show help` | Boolean | `false` | Toggle help |
| `Message` | Text | `Validation message` | Error or success |
| `Show count` | Boolean | `false` | Toggle character count |
| `Count` | Text | `0/100` | Displayed count |

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

Use 4px gaps between label/control and control/message. Message row uses horizontal Auto Layout with message Fill and count Hug. Error/Success change message role and nested control state.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Label association and message IDs are documented for implementation.
- Required is conveyed in text, not only an asterisk.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Form Field` component and its dependencies pass component QA, ask:

> “The Form Field component is complete. Should I build its optional designer documentation from [form-field.md](form-field.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Form Field`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `FormField` instance using `Size=Medium`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Provides the shared label, required indicator, control slot, help, error, success, and count structure for every field. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show one visible label, one connected control, and the message appropriate to the current state. Do not duplicate labels, show help and error as competing messages, or place validation away from its control. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`, `Large`); `State` (`Default`, `Disabled`, `Error`, `Success`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Field label`); `Required` (Boolean, default `false`); `Control` (Instance swap, default `TextInput`); `Help text` (Text, default `Helpful information`); `Show help` (Boolean, default `false`); `Message` (Text, default `Validation message`); `Show count` (Boolean, default `false`); `Count` (Text, default `0/100`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

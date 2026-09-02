# Text Input

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Inputs`  
**Deliverable:** one public component set named `TextInput`

## Create in Figma

Create one public component set named `TextInput`. Component-set math: Size (3) × State (6) = 18 variants. Create private helpers: `_TextInput/Content`.

Accepts one line of text. Label, help, and error messaging belong to Input Field.

## Layer tree

```text
TextInput [COMPONENT, horizontal Auto Layout, Fill × Fixed]
  _TextInput/Content [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 160 | 32 | 0/12/0/12 | 8 | 8 | Fill × Fixed; icon 16 |
| Medium | Fill, min 200 | 40 | 0/12/0/12 | 8 | 8 | Fill × Fixed; icon 20 |
| Large | Fill, min 240 | 48 | 0/16/0/16 | 8 | 8 | Fill × Fixed; icon 20 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium · Large |
| `State` | Empty · Filled · Hover · Focus · Disabled · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Value` | Text | `` | Entered value |
| `Placeholder` | Text | `Enter value` | Empty-state prompt |
| `Show leading content` | Boolean | `false` | Toggle leading slot |
| `Leading content` | Instance swap | `Icon/Placeholder` | Approved atom |
| `Show trailing content` | Boolean | `false` | Toggle trailing slot |
| `Trailing content` | Instance swap | `Icon/Placeholder` | Approved atom |

## Variable and Style bindings

| Layer/property | Binding |
| --- | --- |
| Container fill | `color/background/surface` |
| Text content, when present | `color/text/primary` |
| Icon or vector content, when present | `color/icon/primary` |
| Supporting text, when present | `color/text/secondary` |
| Supporting icon, when present | `color/icon/secondary` |
| Border | `color/border/default` |
| Focus ring | `color/border/focus` |
| Radius | `radius/control` |

Use semantic variables only; Primitives never bind directly to component layers. Text uses approved Text Styles and shadows use Effect Styles.

## Behavior

Content uses Fill width while leading and trailing slots remain fixed. Focus adds a 4px ring; error uses semantic border and is paired with a message at molecule level.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Text truncates before fixed slots.
- Do not embed label or error message inside this atom.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Text Input` component and its dependencies pass component QA, ask:

> “The Text Input component is complete. Should I build its optional designer documentation from [text-input.md](text-input.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Text Input`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `TextInput` instance using `Size=Medium`, `State=Empty`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Accepts one line of text. Label, help, and error messaging belong to Input Field. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show Text Input for one-line free text and place its label and messages in Input Field. Do not use it for multiple-choice input, multi-line content, or an unlabeled field. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`, `Large`); `State` (`Empty`, `Filled`, `Hover`, `Focus`, `Disabled`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Value` (Text); `Placeholder` (Text, default `Enter value`); `Show leading content` (Boolean, default `false`); `Leading content` (Instance swap, default `Icon/Placeholder`); `Show trailing content` (Boolean, default `false`); `Trailing content` (Instance swap, default `Icon/Placeholder`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

# Number Field

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Inputs`  
**Deliverable:** one public component set named `NumberField`

## Create in Figma

Create one public component set named `NumberField`. Component-set math: Size (3) × State (6) = 18 variants. No private helper is required.

Combines labeled numeric entry with optional stepper controls and messages.

## Layer tree

```text
NumberField [COMPONENT, vertical Auto Layout, Fill × Hug]
  FormField [INSTANCE; Hug × Hug]
  TextInput [INSTANCE; Hug × Hug]
  Stepper Button Group [INSTANCE; Hug × Hug]
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
| `State` | Empty · Filled · Hover · Focus · Disabled · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Label` | Text | `Number` | Required |
| `Value` | Text | `0` | Numeric string |
| `Show stepper` | Boolean | `true` | Toggle increment/decrement |
| `Unit` | Text | `` | Optional suffix |
| `Error message` | Text | `Enter a valid number` | Error copy |

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

Stepper actions are fixed at the trailing edge and use Icon Buttons. Disable decrement/increment independently at min/max in implementation.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Min, max, and step are documented.
- Typed and stepped values use the same formatting.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Number Field` component and its dependencies pass component QA, ask:

> “The Number Field component is complete. Should I build its optional designer documentation from [number-field.md](number-field.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Number Field`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `NumberField` instance using `Size=Medium`, `State=Empty`. Confirm those selections against the finished default metadata before adding labels. Present it on both the normal semantic surface and the inverse/strong surface required to verify contrast. |
| Purpose and usage | Combines labeled numeric entry with optional stepper controls and messages. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show units, limits, step behavior, and exact numeric feedback where they matter. Do not accept nonnumeric content, hide the unit in placeholder text, or use steppers for an unbounded value. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`, `Large`); `State` (`Empty`, `Filled`, `Hover`, `Focus`, `Disabled`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Number`); `Value` (Text, default `0`); `Show stepper` (Boolean, default `true`); `Unit` (Text); `Error message` (Text, default `Enter a valid number`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

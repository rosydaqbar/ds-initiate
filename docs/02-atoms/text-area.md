# Text Area

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Inputs`  
**Deliverable:** one public component set named `TextArea`

## Create in Figma

Create one public component set named `TextArea`. Component-set math: Height (3) × State (6) = 18 variants. No private helper is required.

Accepts multiple lines of plain text. Label and messages belong to Text Area Field.

## Layer tree

```text
TextArea [COMPONENT, horizontal Auto Layout, Fill × Fixed]
  Content [FRAME or VECTOR as specified; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 240 | 80 | 12/12/12/12 | 8 | 8 | Fill × Fixed |
| Medium | Fill, min 240 | 120 | 12/12/12/12 | 8 | 8 | Fill × Fixed |
| Large | Fill, min 240 | 160 | 12/12/12/12 | 8 | 8 | Fill × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Height` | Small · Medium · Large |
| `State` | Empty · Filled · Hover · Focus · Disabled · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Value` | Text | `` | Multiline content |
| `Placeholder` | Text | `Enter text` | Empty-state prompt |
| `Resizable` | Boolean | `false` | Show resize affordance |

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

Text aligns top-left. If resize affordance is shown, anchor it bottom-right in a 16×16 frame. Focus ring is 4px; error color is semantic.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Long content clips or scrolls according to implementation, never overflows the component frame.
- Placeholder is not the only visible label.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Text Area` component and its dependencies pass component QA, ask:

> “The Text Area component is complete. Should I build its optional designer documentation from [text-area.md](text-area.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Text Area`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `TextArea` instance using `Height=Medium`, `State=Empty`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Accepts multiple lines of plain text. Label and messages belong to Text Area Field. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show Text Area for expected multi-line plain text and place its label and messages in Text Area Field. Do not use it for a one-line value or treat placeholder text as a label. |
| Variants and states | Build focused connected-instance comparisons for `Height` (`Small`, `Medium`, `Large`); `State` (`Empty`, `Filled`, `Hover`, `Focus`, `Disabled`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Value` (Text); `Placeholder` (Text, default `Enter text`); `Resizable` (Boolean, default `false`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

# Checkbox Field

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Inputs`  
**Deliverable:** one public component set named `CheckboxField`

## Create in Figma

Create one public component set named `CheckboxField`. Component-set math: Size (2) × State (3) = 6 variants. No private helper is required.

Pairs Checkbox with a visible label, optional description, and error message.

## Layer tree

```text
CheckboxField [COMPONENT, vertical Auto Layout, Fill × Hug]
  Checkbox [INSTANCE; Hug × Hug]
  Label and description frame [INSTANCE; Hug × Hug]
  Error text [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 240 | Hug, min 44 | 12/0/12/0 | 8 | 0 | Fill × Hug; checkbox 16 |
| Medium | Fill, min 240 | Hug, min 44 | 12/0/12/0 | 12 | 0 | Fill × Hug; checkbox 20 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium |
| `State` | Default · Disabled · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Label` | Text | `Checkbox label` | Required |
| `Description` | Text | `Description` | Optional |
| `Show description` | Boolean | `false` | Toggle description |
| `Error message` | Text | `Select an option` | Error copy |
| `Selection` | Nested variant | `Unchecked` | Checkbox state |

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

The entire 44px-high row is the interactive target. Error message sits below the label frame with a 4px gap.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Label activation toggles the checkbox.
- Error is announced and not indicated by color alone.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Checkbox Field` component and its dependencies pass component QA, ask:

> “The Checkbox Field component is complete. Should I build its optional designer documentation from [checkbox-field.md](checkbox-field.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Checkbox Field`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `CheckboxField` instance using `Size=Medium`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Pairs Checkbox with a visible label, optional description, and error message. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show a persistent visible label, make the full label row selectable, and place help or error text beside the choice. Do not detach the Checkbox from its label or use it for an immediate setting. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`); `State` (`Default`, `Disabled`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Checkbox label`); `Description` (Text, default `Description`); `Show description` (Boolean, default `false`); `Error message` (Text, default `Select an option`); `Selection` (Nested variant, default `Unchecked`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

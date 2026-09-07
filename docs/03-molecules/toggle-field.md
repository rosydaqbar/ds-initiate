# Toggle Field

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Toggles`  
**Deliverable:** one public component set named `ToggleField`

## Create in Figma

Create one public component set named `ToggleField`. Component-set math: Size (2) × Selection (2) × State (3) = 12 variants. No private helper is required.

Pairs Toggle with label, description, and validation where needed.

## Layer tree

```text
ToggleField [COMPONENT, vertical Auto Layout, Fill × Hug]
  Label and description frame [INSTANCE; Hug × Hug]
  Toggle [INSTANCE; Hug × Hug]
  Message [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 240 | Hug, min 44 | 8/0/8/0 | 12 | 0 | Fill × Hug |
| Medium | Fill, min 240 | Hug, min 48 | 8/0/8/0 | 16 | 0 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium |
| `Selection` | Off · On |
| `State` | Default · Disabled · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Label` | Text | `Setting` | Required |
| `Description` | Text | `Description` | Optional |
| `Selection` | Nested variant | `Off` | Toggle value |
| `Error message` | Text | `Unable to change setting` | Optional error |

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

Label frame fills; Toggle stays fixed at the trailing edge. The full row may be clickable if it does not contain another action.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- State change is immediate; otherwise use Checkbox plus submit.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Toggle Field` component and its dependencies pass component QA, ask:

> “The Toggle Field component is complete. Should I build its optional designer documentation from [toggle-field.md](toggle-field.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Toggle Field`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `ToggleField` instance using `Size=Medium`, `Selection=Off`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Pairs Toggle with label, description, and validation where needed. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show a clear setting label and make the immediate on/off result understandable. Do not use Toggle Field for an agreement submitted later, mutually exclusive choices, or an action button. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`); `Selection` (`Off`, `On`); `State` (`Default`, `Disabled`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Setting`); `Description` (Text, default `Description`); `Selection` (Nested variant, default `Off`); `Error message` (Text, default `Unable to change setting`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

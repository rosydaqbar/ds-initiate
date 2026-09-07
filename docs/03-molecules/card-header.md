# Card Header

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Cards`  
**Deliverable:** one public component set named `CardHeader`

## Create in Figma

Create one public component set named `CardHeader`. Component-set math: Size (2) × Alignment (2) = 4 variants. No private helper is required.

Standardizes title, metadata, and actions at the top of a surface.

## Layer tree

```text
CardHeader [COMPONENT, vertical Auto Layout, Fill × Hug]
  Avatar or Icon [INSTANCE; Hug × Hug]
  Title frame [INSTANCE; Hug × Hug]
  Button or ContextMenu trigger [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 240 | Hug, min 56 | 16/16/12/16 | 12 | 0 | Fill × Hug |
| Medium | Fill, min 320 | Hug, min 72 | 20/20/16/20 | 16 | 0 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium |
| `Alignment` | Top · Center |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Card title` | Required |
| `Description` | Text | `Supporting text` | Optional |
| `Show leading` | Boolean | `false` | Toggle leading slot |
| `Leading` | Instance swap | `Avatar` | Approved atom |
| `Show action` | Boolean | `false` | Toggle action |
| `Action` | Instance swap | `IconButton/Tertiary` | Approved action |

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

Title frame fills remaining width and wraps. Action stays top- or center-aligned according to the variant and never compresses.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Heading level is assigned by page context, not component appearance.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Card Header` component and its dependencies pass component QA, ask:

> “The Card Header component is complete. Should I build its optional designer documentation from [card-header.md](card-header.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Card Header`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `CardHeader` instance using `Size=Medium`, `Alignment=Top`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Standardizes title, metadata, and actions at the top of a surface. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show a clear surface title, concise metadata, and only actions that apply to that surface. Do not substitute Card Header for a top-level heading or overload it with unrelated controls. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`); `Alignment` (`Top`, `Center`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Card title`); `Description` (Text, default `Supporting text`); `Show leading` (Boolean, default `false`); `Leading` (Instance swap, default `Avatar`); `Show action` (Boolean, default `false`); `Action` (Instance swap, default `IconButton/Tertiary`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

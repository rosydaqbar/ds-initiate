# Table Row

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Tables`  
**Deliverable:** one public component set named `TableRow`

## Create in Figma

Create one public component set named `TableRow`. Component-set math: Density (2) × State (5) × Selection (2) = 20 variants. Create private helpers: `_Table/Cell`.

Provides reusable table-row structure for selection, data cells, and row actions.

## Layer tree

```text
TableRow [COMPONENT, vertical Auto Layout, Fill × Hug]
  Checkbox [INSTANCE; Hug × Hug]
  Cell slots [INSTANCE; Hug × Hug]
  IconButton [INSTANCE; Hug × Hug]
  _Table/Cell [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Compact | Fill, min 640 | 40 | 0/16/0/16 | 12 | 0 | Fill × Fixed |
| Standard | Fill, min 640 | 48 | 0/16/0/16 | 12 | 0 | Fill × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Density` | Compact · Standard |
| `State` | Default · Hover · Focus · Selected · Disabled |
| `Selection` | None · Checkbox |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Cell 1–8` | Instance swap | `Text cell` | Approved cell layouts |
| `Show action` | Boolean | `false` | Toggle row action |
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

Cells use Fill or fixed column widths defined by Data Table. Row hover does not hide essential actions. Selection changes semantic fill without changing height.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Column alignment is consistent across every row.
- Interactive elements have independent focus.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Table Row` component and its dependencies pass component QA, ask:

> “The Table Row component is complete. Should I build its optional designer documentation from [table-row.md](table-row.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Table Row`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `TableRow` instance using `Density=Standard`, `State=Default`, `Selection=None`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Provides reusable table-row structure for selection, data cells, and row actions. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show data in stable columns, keep selection and row actions distinct, and preserve readable focus and selected states. Do not turn a row into a card, shift columns between states, or rely on background color alone. |
| Variants and states | Build focused connected-instance comparisons for `Density` (`Compact`, `Standard`); `State` (`Default`, `Hover`, `Focus`, `Selected`, `Disabled`); `Selection` (`None`, `Checkbox`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Cell 1–8` (Instance swap, default `Text cell`); `Show action` (Boolean, default `false`); `Action` (Instance swap, default `IconButton/Tertiary`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

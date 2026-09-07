# Data Table

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Tables`  
**Deliverable:** one public component set named `DataTable`

## Create in Figma

Create one public component set named `DataTable`. Component-set math: Layout (2) × Density (2) × State (4) = 16 variants. Create private helpers: `_Table/HeaderCell`, `_Table/Cell`.

Displays sortable, selectable, filterable data with stable columns and complete states.

## Layer tree

```text
DataTable [COMPONENT, vertical Auto Layout, Fill × Hug]
  FilterBar or toolbar [INSTANCE; Fill × Hug]
  Header row [INSTANCE; Fill × Hug]
  TableRow list [INSTANCE; Fill × Hug]
  Pagination [INSTANCE; Fill × Hug]
  EmptyState [INSTANCE; Fill × Hug]
  _Table/HeaderCell [PRIVATE INSTANCE; Hug × Hug]
  _Table/Cell [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Desktop | Fill, min 640, max 1280 | Hug, min 320 | 0/0/0/0 | 0 | 12 | Fill × Hug; row 40/48 |
| Mobile | Fill, min 328 | Hug, min 320 | 0/0/0/0 | 0 | 12 | Fill × Hug; horizontal viewport |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Desktop · Mobile |
| `Density` | Compact · Standard |
| `State` | Default · Loading · Empty · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Data Table` | Section heading |
| `FilterBar` | Instance swap | `FilterBar or toolbar` | Keep as a connected nested component |
| `Header row` | Instance swap | `Header row` | Keep as a connected nested component |
| `TableRow list` | Instance swap | `TableRow list` | Keep as a connected nested component |
| `Pagination` | Instance swap | `Pagination` | Keep as a connected nested component |
| `EmptyState` | Instance swap | `EmptyState` | Keep as a connected nested component |

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

Header remains 40px Compact or 48px Standard. Column widths are documented per table instance in 4px increments. Mobile uses intentional horizontal scrolling or a separate card-list composition; it never silently crushes columns.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Sort state is conveyed in text and icon.
- Selected-row count and bulk actions are announced.
- Loading, Empty, and Error preserve table context.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Data Table` component and its dependencies pass component QA, ask:

> “The Data Table component is complete. Should I build its optional designer documentation from [data-table.md](data-table.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Data Table`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `DataTable` instance using `Layout=Desktop`, `Density=Standard`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Displays sortable, selectable, filterable data with stable columns and complete states. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show stable columns, explicit sort and selection states, relevant controls, and complete loading, empty, and error states. Do not crush columns on small widths, use a table for a few key-value pairs, or rely on row color alone. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Desktop`, `Mobile`); `Density` (`Compact`, `Standard`); `State` (`Default`, `Loading`, `Empty`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Data Table`); `FilterBar` (Instance swap, default `FilterBar or toolbar`); `Header row` (Instance swap, default `Header row`); `TableRow list` (Instance swap, default `TableRow list`); `Pagination` (Instance swap, default `Pagination`); `EmptyState` (Instance swap, default `EmptyState`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

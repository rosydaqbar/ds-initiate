# Filter Bar

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Filters`  
**Deliverable:** one public component set named `FilterBar`

## Create in Figma

Create one public component set named `FilterBar`. Component-set math: Layout (2) × State (3) = 6 variants. No private helper is required.

Combines search, filters, applied values, reset, and result count.

## Layer tree

```text
FilterBar [COMPONENT, vertical Auto Layout, Fill × Hug]
  SearchField [INSTANCE; Fill × Hug]
  SelectField or filter triggers [INSTANCE; Fill × Hug]
  Tag list [INSTANCE; Fill × Hug]
  Button [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Desktop | Fill, min 640 | Hug, min 48 | 0/0/0/0 | 12 | 0 | Fill × Hug |
| Mobile | Fill, min 328 | Hug, min 96 | 0/0/0/0 | 12 | 0 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Desktop · Mobile |
| `State` | Default · Applied · Overflow |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Search` | Instance swap | `SearchField` | Optional search |
| `Filters` | Instance swap | `Filter controls` | Approved fields |
| `Result count` | Text | `24 results` | Optional status |
| `Show reset` | Boolean | `false` | Toggle reset action |

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

Desktop wraps controls only at documented breakpoints. Mobile replaces individual filters with one Filter Button and opens a Drawer; applied Tags remain below.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Applied state is visible and removable.
- Reset clearly states its scope.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Filter Bar` component and its dependencies pass component QA, ask:

> “The Filter Bar component is complete. Should I build its optional designer documentation from [filter-bar.md](filter-bar.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Filter Bar`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `FilterBar` instance using `Layout=Desktop`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Combines search, filters, applied values, reset, and result count. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show search and filters as distinct controls, keep applied values visible, and label reset behavior precisely. Do not clear unrelated input, hide active filters, or overload the bar with every possible control. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Desktop`, `Mobile`); `State` (`Default`, `Applied`, `Overflow`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Search` (Instance swap, default `SearchField`); `Filters` (Instance swap, default `Filter controls`); `Result count` (Text, default `24 results`); `Show reset` (Boolean, default `false`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

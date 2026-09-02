# Page Header

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Headers`  
**Deliverable:** one public component set named `PageHeader`

## Create in Figma

Create one public component set named `PageHeader`. Component-set math: Layout (2) × Density (2) = 4 variants. No private helper is required.

Establishes page title, breadcrumbs, metadata, tabs, and primary actions.

## Layer tree

```text
PageHeader [COMPONENT, vertical Auto Layout, Fill × Hug]
  Breadcrumbs [INSTANCE; Fill × Hug]
  Title and metadata frame [INSTANCE; Fill × Hug]
  ButtonGroup [INSTANCE; Fill × Hug]
  Tabs [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Desktop Compact | Fill, min 640 | Hug, min 96 | 0/0/24/0 | 16 | 0 | Fill × Hug |
| Desktop Standard | Fill, min 640 | Hug, min 128 | 0/0/32/0 | 20 | 0 | Fill × Hug |
| Mobile | Fill, min 328 | Hug, min 120 | 0/0/24/0 | 16 | 0 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Desktop · Mobile |
| `Density` | Compact · Standard |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Page title` | Required |
| `Description` | Text | `Page description` | Optional |
| `Show breadcrumbs` | Boolean | `false` | Toggle Breadcrumbs |
| `Actions` | Instance swap | `ButtonGroup` | Page actions |
| `Show tabs` | Boolean | `false` | Toggle Tabs |

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

Desktop title and actions share a row; Mobile stacks actions below and fills their width when needed. Tabs sit at the bottom and may scroll horizontally.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- One visible H1-equivalent title exists.
- Primary action remains discoverable on Mobile.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Page Header` component and its dependencies pass component QA, ask:

> “The Page Header component is complete. Should I build its optional designer documentation from [page-header.md](page-header.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Page Header`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `PageHeader` instance using `Layout=Desktop`, `Density=Standard`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Establishes page title, breadcrumbs, metadata, tabs, and primary actions. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show one clear title with only the breadcrumbs, metadata, tabs, and actions needed for that context. Do not create competing headings, duplicate navigation, or place several Primary actions at the same level. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Desktop`, `Mobile`); `Density` (`Compact`, `Standard`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Page title`); `Description` (Text, default `Page description`); `Show breadcrumbs` (Boolean, default `false`); `Actions` (Instance swap, default `ButtonGroup`); `Show tabs` (Boolean, default `false`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

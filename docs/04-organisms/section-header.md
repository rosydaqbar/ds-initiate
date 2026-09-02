# Section Header

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Headers`  
**Deliverable:** one public component set named `SectionHeader`

## Create in Figma

Create one public component set named `SectionHeader`. Component-set math: Size (2) × Layout (2) = 4 variants. No private helper is required.

Labels a region and aligns description, status, and actions.

## Layer tree

```text
SectionHeader [COMPONENT, vertical Auto Layout, Fill × Hug]
  Title frame [INSTANCE; Fill × Hug]
  Badge or metadata [INSTANCE; Fill × Hug]
  ButtonGroup [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 240 | Hug, min 40 | 0/0/0/0 | 12 | 0 | Fill × Hug |
| Large | Fill, min 320 | Hug, min 56 | 0/0/0/0 | 16 | 0 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Large |
| `Layout` | Inline · Stacked |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Section title` | Required |
| `Description` | Text | `Description` | Optional |
| `Show status` | Boolean | `false` | Toggle Badge |
| `Actions` | Instance swap | `ButtonGroup` | Optional actions |

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

Inline places actions at the end and title frame Fill. Stacked puts actions below with 12px gap; use when available width is under 480px.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Heading level follows document hierarchy.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Section Header` component and its dependencies pass component QA, ask:

> “The Section Header component is complete. Should I build its optional designer documentation from [section-header.md](section-header.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Section Header`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `SectionHeader` instance using `Size=Small`, `Layout=Inline`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Labels a region and aligns description, status, and actions. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show the region's title, concise context, status, and only actions that apply to that region. Do not use Section Header as the top-level heading or overload it with unrelated controls. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Large`); `Layout` (`Inline`, `Stacked`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Section title`); `Description` (Text, default `Description`); `Show status` (Boolean, default `false`); `Actions` (Instance swap, default `ButtonGroup`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

# Metrics Grid

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Metrics`  
**Deliverable:** one public component set named `MetricsGrid`

## Create in Figma

Create one public component set named `MetricsGrid`. Component-set math: Columns (3) × State (4) = 12 variants. No private helper is required.

Arranges Metric Cards into a responsive, state-consistent summary region.

## Layer tree

```text
MetricsGrid [COMPONENT, vertical Auto Layout, Fill × Hug]
  SectionHeader [INSTANCE; Fill × Hug]
  MetricCard instances [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| 2 columns | Fill, min 560 | Hug | 0/0/0/0 | 24 | 0 | Fill × Hug |
| 3 columns | Fill, min 840 | Hug | 0/0/0/0 | 24 | 0 | Fill × Hug |
| 4 columns | Fill, min 1120 | Hug | 0/0/0/0 | 24 | 0 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Columns` | 2 · 3 · 4 |
| `State` | Default · Loading · Empty · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Cards` | Instance swap | `MetricCard list` | Connected cards |
| `Title` | Text | `Overview` | Optional region heading |

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

Use wrapped horizontal Auto Layout or a documented grid: 4 columns ≥1200, 3 ≥900, 2 ≥600, 1 below 600. Each card Fill width; row gap is 24px.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- All cards in a row stretch to equal height.
- State changes preserve card positions.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Metrics Grid` component and its dependencies pass component QA, ask:

> “The Metrics Grid component is complete. Should I build its optional designer documentation from [metrics-grid.md](metrics-grid.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Metrics Grid`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `MetricsGrid` instance using `Columns=2`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Arranges Metric Cards into a responsive, state-consistent summary region. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show related Metric Cards with consistent sizing, reading order, and responsive reflow. Do not mix unrelated metrics, create uneven emphasis without meaning, or reorder cards unpredictably between widths. |
| Variants and states | Build focused connected-instance comparisons for `Columns` (`2`, `3`, `4`); `State` (`Default`, `Loading`, `Empty`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Cards` (Instance swap, default `MetricCard list`); `Title` (Text, default `Overview`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

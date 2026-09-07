# Chart Panel

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Charts`  
**Deliverable:** one public component set named `ChartPanel`

## Create in Figma

Create one public component set named `ChartPanel`. Component-set math: Layout (2) × State (4) × Legend (2) = 16 variants. No private helper is required.

Combines chart title, filters, legend, plot, tooltip, and state handling in one surface.

## Layer tree

```text
ChartPanel [COMPONENT, vertical Auto Layout, Fill × Hug]
  CardHeader [INSTANCE; Fill × Hug]
  Filter controls [INSTANCE; Fill × Hug]
  Chart slot [INSTANCE; Fill × Hug]
  Legend [INSTANCE; Fill × Hug]
  EmptyState [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Desktop | Fill, min 480, max 1280 | Hug, min 320 | 24/24/24/24 | 20 | 12 | Fill × Hug; plot min 240 |
| Mobile | Fill, min 328 | Hug, min 320 | 16/16/16/16 | 16 | 12 | Fill × Hug; plot min 240 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Desktop · Mobile |
| `State` | Default · Loading · Empty · Error |
| `Legend` | Visible · Hidden |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Chart Panel` | Section heading |
| `CardHeader` | Instance swap | `CardHeader` | Keep as a connected nested component |
| `Filter controls` | Instance swap | `Filter controls` | Keep as a connected nested component |
| `Chart slot` | Instance swap | `Chart slot` | Keep as a connected nested component |
| `Legend` | Instance swap | `Legend` | Keep as a connected nested component |
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

Plot fills width. Desktop legend may sit right or bottom according to available width; Mobile always places it below. Loading preserves plot height. Tooltip is an overlay and stays inside viewport.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Chart has a text summary or accessible data table.
- Series are distinguishable without color alone.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Chart Panel` component and its dependencies pass component QA, ask:

> “The Chart Panel component is complete. Should I build its optional designer documentation from [chart-panel.md](chart-panel.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Chart Panel`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `ChartPanel` instance using `Layout=Desktop`, `State=Default`, `Legend=Visible`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Combines chart title, filters, legend, plot, tooltip, and state handling in one surface. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show one chart purpose with its timeframe, units, legend, controls, and empty or error state. Do not combine unrelated measures, use color as the only series cue, or add decorative data. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Desktop`, `Mobile`); `State` (`Default`, `Loading`, `Empty`, `Error`); `Legend` (`Visible`, `Hidden`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Chart Panel`); `CardHeader` (Instance swap, default `CardHeader`); `Filter controls` (Instance swap, default `Filter controls`); `Chart slot` (Instance swap, default `Chart slot`); `Legend` (Instance swap, default `Legend`); `EmptyState` (Instance swap, default `EmptyState`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

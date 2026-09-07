# Loading Region

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Loading`  
**Deliverable:** one public component set named `LoadingRegion`

## Create in Figma

Create one public component set named `LoadingRegion`. Component-set math: Size (3) × Style (2) = 6 variants. No private helper is required.

Reserves a bounded product region while data or content loads.

## Layer tree

```text
LoadingRegion [COMPONENT, vertical Auto Layout, Fill × Hug]
  Skeleton composition or Spinner [INSTANCE; Fill × Hug]
  Loading label [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 240 | Hug, min 96 | 16/16/16/16 | 12 | 8 | Fill × Hug |
| Medium | Fill, min 320 | Hug, min 240 | 24/24/24/24 | 16 | 12 | Fill × Hug |
| Large | Fill, min 640 | Hug, min 400 | 40/40/40/40 | 24 | 12 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium · Large |
| `Style` | Skeleton · Spinner |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Loading label` | Text | `Loading` | Accessible status |
| `Skeletons` | Instance swap | `Skeleton composition` | Shape-matched loading |

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

Skeleton matches expected content geometry. Spinner centers in the region with label 12px below. Do not combine both styles for one region.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Region height prevents layout jump.
- Loading status is announced once, not repeatedly.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Loading Region` component and its dependencies pass component QA, ask:

> “The Loading Region component is complete. Should I build its optional designer documentation from [loading-region.md](loading-region.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Loading Region`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `LoadingRegion` instance using `Size=Medium`, `Style=Skeleton`. Confirm those selections against the finished default metadata before adding labels. Present it on a semantic transparency checker plus the normal surface. |
| Purpose and usage | Reserves a bounded product region while data or content loads. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Preserve the updated region's layout, identify what is loading, and use the appropriate Spinner or Skeleton treatment. Do not block unrelated content, conceal stale interactive controls, or show several competing indicators. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`, `Large`); `Style` (`Skeleton`, `Spinner`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Loading label` (Text, default `Loading`); `Skeletons` (Instance swap, default `Skeleton composition`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

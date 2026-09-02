# Progress Steps

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Progress`  
**Deliverable:** one public component set named `ProgressSteps`

## Create in Figma

Create one public component set named `ProgressSteps`. Component-set math: Orientation (2) × State (2) = 4 variants. No private helper is required.

Combines Progress Step instances into a complete task sequence.

## Layer tree

```text
ProgressSteps [COMPONENT, vertical Auto Layout, Fill × Hug]
  ProgressStep instances [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Horizontal | Fill, min 640 | Hug, min 64 | 0/0/0/0 | 0 | 0 | Fill × Hug |
| Vertical | Fill, min 240 | Hug | 0/0/0/0 | 0 | 0 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Orientation` | Horizontal · Vertical |
| `State` | Default · WithError |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Steps` | Instance swap | `ProgressStep list` | Connected step instances |
| `Current step` | Text | `2` | Documentation sample |

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

Horizontal steps each Fill width. Switch to Vertical below 640px or when labels wrap. Do not allow completed steps after an Error unless workflow logic supports it.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Step count and current position are announced.
- Labels remain readable at 200% zoom.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Progress Steps` component and its dependencies pass component QA, ask:

> “The Progress Steps component is complete. Should I build its optional designer documentation from [progress-steps.md](progress-steps.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Progress Steps`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `ProgressSteps` instance using `Orientation=Horizontal`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Combines Progress Step instances into a complete task sequence. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show an ordered task sequence with readable labels and a clear current, complete, and upcoming state. Do not use Progress Steps for peer navigation, optional unordered tasks, or status conveyed only by color. |
| Variants and states | Build focused connected-instance comparisons for `Orientation` (`Horizontal`, `Vertical`); `State` (`Default`, `WithError`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Steps` (Instance swap, default `ProgressStep list`); `Current step` (Text, default `2`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

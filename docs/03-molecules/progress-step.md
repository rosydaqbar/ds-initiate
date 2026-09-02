# Progress Step

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Progress`  
**Deliverable:** one public component set named `ProgressStep`

## Create in Figma

Create one public component set named `ProgressStep`. Component-set math: Orientation (2) × State (4) = 8 variants. No private helper is required.

Represents one named step inside a multi-step sequence.

## Layer tree

```text
ProgressStep [COMPONENT, vertical Auto Layout, Fill × Hug]
  Step indicator [INSTANCE; Hug × Hug]
  Label frame [INSTANCE; Hug × Hug]
  Connector [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Horizontal | Fill, min 120 | Hug, min 48 | 0/0/0/0 | 8 | 0 | Fill × Hug; indicator 24 |
| Vertical | Fill, min 200 | Hug, min 64 | 0/0/0/0 | 12 | 0 | Fill × Hug; indicator 24 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Orientation` | Horizontal · Vertical |
| `State` | Upcoming · Current · Complete · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Label` | Text | `Step title` | Required |
| `Description` | Text | `Description` | Optional |
| `Step number` | Text | `1` | Upcoming/current label |

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

Connector begins after the indicator and fills remaining sequence space. Complete uses a check icon; Error includes icon and text treatment.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Current step is announced programmatically.
- Connector is decorative.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Progress Step` component and its dependencies pass component QA, ask:

> “The Progress Step component is complete. Should I build its optional designer documentation from [progress-step.md](progress-step.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Progress Step`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `ProgressStep` instance using `Orientation=Horizontal`, `State=Upcoming`. Confirm those selections against the finished default metadata before adding labels. Present it on both the normal semantic surface and the inverse/strong surface required to verify contrast. |
| Purpose and usage | Represents one named step inside a multi-step sequence. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show one named position in a sequence with current, complete, and incomplete meaning beyond color. Do not use Progress Step as a peer-navigation Tab or expose a state the user cannot understand. |
| Variants and states | Build focused connected-instance comparisons for `Orientation` (`Horizontal`, `Vertical`); `State` (`Upcoming`, `Current`, `Complete`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Step title`); `Description` (Text, default `Description`); `Step number` (Text, default `1`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

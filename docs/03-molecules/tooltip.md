# Tooltip

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Overlays`  
**Deliverable:** one public component set named `Tooltip`

## Create in Figma

Create one public component set named `Tooltip`. Component-set math: Placement (4) × Tone (2) = 8 variants. No private helper is required.

Provides brief non-interactive clarification for a focused or hovered trigger.

## Layer tree

```text
Tooltip [COMPONENT, vertical Auto Layout, Fill × Hug]
  Tooltip text [INSTANCE; Hug × Hug]
  Arrow [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Default | Hug, min 40, max 240 | Hug, min 32 | 8/12/8/12 | 0 | 8 | Hug × Hug; offset 8 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Placement` | Top · Right · Bottom · Left |
| `Tone` | Default · Inverse |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Content` | Text | `Helpful information` | Short plain text |
| `Show arrow` | Boolean | `true` | Toggle 8×8 arrow |

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

Open after 400ms hover delay and immediately on focus, 8px from trigger. Close on Escape, blur, or pointer exit. Tooltip never contains interactive controls.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Trigger remains usable without the tooltip.
- Content is concise and not required to complete a task.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Tooltip` component and its dependencies pass component QA, ask:

> “The Tooltip component is complete. Should I build its optional designer documentation from [tooltip.md](tooltip.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Tooltip`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `Tooltip` instance using `Placement=Top`, `Tone=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Provides brief non-interactive clarification for a focused or hovered trigger. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show brief non-interactive clarification on hover and keyboard focus with a clear trigger relationship. Do not place required instructions, actions, rich content, or essential error messages in Tooltip. |
| Variants and states | Build focused connected-instance comparisons for `Placement` (`Top`, `Right`, `Bottom`, `Left`); `Tone` (`Default`, `Inverse`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Content` (Text, default `Helpful information`); `Show arrow` (Boolean, default `true`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

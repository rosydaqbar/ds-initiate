# Popover

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Overlays`  
**Deliverable:** one public component set named `Popover`

## Create in Figma

Create one public component set named `Popover`. Component-set math: Placement (4) × Tone (2) = 8 variants. No private helper is required.

Shows supplemental interactive content anchored to a trigger.

## Layer tree

```text
Popover [COMPONENT, vertical Auto Layout, Fill × Hug]
  Content slot [INSTANCE; Hug × Hug]
  Optional CloseButton [INSTANCE; Hug × Hug]
  Arrow [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Default | Hug, min 240, max 400 | Hug, min 80 | 16/16/16/16 | 12 | 12 | Hug × Hug; offset 8 |

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
| `Content` | Instance swap | `Content placeholder` | Approved molecule or local composition |
| `Show close` | Boolean | `false` | Toggle CloseButton |
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

Open 8px from the trigger; arrow is an 8×8 rotated square clipped by the surface. Flip/shift at viewport edges. Escape closes and returns focus.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Keyboard focus moves according to whether content is interactive.
- Popover is not used for critical confirmation.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Popover` component and its dependencies pass component QA, ask:

> “The Popover component is complete. Should I build its optional designer documentation from [popover.md](popover.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Popover`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `Popover` instance using `Placement=Top`, `Tone=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Shows supplemental interactive content anchored to a trigger. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show supplemental interactive content anchored to a clear trigger and keep it within the viewport. Do not use Popover for a blocking decision, primary navigation, or brief non-interactive help better served by Tooltip. |
| Variants and states | Build focused connected-instance comparisons for `Placement` (`Top`, `Right`, `Bottom`, `Left`); `Tone` (`Default`, `Inverse`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Content` (Instance swap, default `Content placeholder`); `Show close` (Boolean, default `false`); `Show arrow` (Boolean, default `true`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

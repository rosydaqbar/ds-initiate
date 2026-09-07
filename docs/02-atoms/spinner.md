# Spinner

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Loading`  
**Deliverable:** one public component set named `Spinner`

## Create in Figma

Create one public component set named `Spinner`. Component-set math: Size (4) × Contrast (2) = 8 variants. No private helper is required.

Shows indeterminate activity in a compact region.

## Layer tree

```text
Spinner [COMPONENT, horizontal Auto Layout, Fixed × Fixed]
  Content [FRAME or VECTOR as specified; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| 16 | 16 | 16 | 0/0/0/0 | 0 | pill | Fixed × Fixed |
| 20 | 20 | 20 | 0/0/0/0 | 0 | pill | Fixed × Fixed |
| 24 | 24 | 24 | 0/0/0/0 | 0 | pill | Fixed × Fixed |
| 32 | 32 | 32 | 0/0/0/0 | 0 | pill | Fixed × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | 16 · 20 · 24 · 32 |
| `Contrast` | Default · Inverse |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Accessible label` | Text | `Loading` | Handoff name |

## Variable and Style bindings

| Layer/property | Binding |
| --- | --- |
| Container fill | `color/background/surface` |
| Text content, when present | `color/text/primary` |
| Icon or vector content, when present | `color/icon/primary` |
| Supporting text, when present | `color/text/secondary` |
| Supporting icon, when present | `color/icon/secondary` |
| Border | `color/border/default` |
| Focus ring | `color/border/focus` |
| Radius | `radius/control` |

Use semantic variables only; Primitives never bind directly to component layers. Text uses approved Text Styles and shadows use Effect Styles.

## Behavior

Rotate the arc 360° over 800ms linear and repeat. Under reduced motion, show a static progress glyph plus nearby loading text.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Stroke remains visually centered at every size.
- Do not use for determinate progress.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Spinner` component and its dependencies pass component QA, ask:

> “The Spinner component is complete. Should I build its optional designer documentation from [spinner.md](spinner.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Spinner`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `Spinner` instance using `Size=16`, `Contrast=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Shows indeterminate activity in a compact region. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show Spinner for short indeterminate activity within the region being updated. Do not use it when completion is measurable or leave it without context during a long wait. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`16`, `20`, `24`, `32`); `Contrast` (`Default`, `Inverse`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Accessible label` (Text, default `Loading`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

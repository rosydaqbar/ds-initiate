# Tag

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Tags`  
**Deliverable:** `Tag/Filled`, `Tag/Outline`

## Create in Figma

Create `Tag/Filled`, `Tag/Outline`. Each set uses Size (2) × Intent (5) × State (3) = 30 variants. Create private helpers: `_Tag/Content`.

Displays a selected value, filter, or removable classification.

## Layer tree

```text
Tag/{Style} [COMPONENT, horizontal Auto Layout, Hug × Fixed]
  _Tag/Content [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Hug, min 48 | 24 | 4/8/4/8 | 4 | 8 | Hug × Fixed |
| Medium | Hug, min 56 | 32 | 4/12/4/12 | 8 | 8 | Hug × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium |
| `Intent` | Neutral · Brand · Success · Warning · Critical |
| `State` | Default · Hover · Focus |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Label` | Text | `Tag` | Editable value |
| `Show leading icon` | Boolean | `false` | Toggle icon |
| `Leading icon` | Instance swap | `Icon/Placeholder` | Approved Icon |
| `Removable` | Boolean | `false` | Show nested Close Button |

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

A removable Tag exposes a nested close action; Hover and Focus apply to that action or the whole interactive Tag according to product behavior. Outline uses a 1px inside stroke.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Removal has an accessible name including the value.
- Truncation preserves the remove control.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Tag` component and its dependencies pass component QA, ask:

> “The Tag component is complete. Should I build its optional designer documentation from [tag.md](tag.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Tag`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `Tag/Filled` instance using `Size=Medium`, `Intent=Neutral`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on both the normal semantic surface and the inverse/strong surface required to verify contrast. |
| Purpose and usage | Displays a selected value, filter, or removable classification. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show Tag for a selected value, applied filter, or removable classification with concise text. Do not use it as a status Badge, general action, or sentence container. |
| Variants and states | Start with a public-set comparison for `Tag/Filled`, `Tag/Outline`, then build focused connected-instance comparisons for `Size` (`Small`, `Medium`); `Intent` (`Neutral`, `Brand`, `Success`, `Warning`, `Critical`); `State` (`Default`, `Hover`, `Focus`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Tag`); `Show leading icon` (Boolean, default `false`); `Leading icon` (Instance swap, default `Icon/Placeholder`); `Removable` (Boolean, default `false`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

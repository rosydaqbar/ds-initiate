# Badge

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Badges`  
**Deliverable:** `Badge/Filled`, `Badge/Outline`

## Create in Figma

Create `Badge/Filled`, `Badge/Outline`. Each set uses Size (2) × Intent (6) = 12 variants. Create private helpers: `_Badge/Dot`.

Displays compact status or classification. Filled and Outline are separate public sets.

## Layer tree

```text
Badge/{Style} [COMPONENT, horizontal Auto Layout, Hug × Fixed]
  Label and icon frame [INSTANCE; Hug × Hug]
  _Badge/Dot [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Hug, min 40 | 24 | 4/8/4/8 | 4 | pill | Hug × Fixed |
| Medium | Hug, min 48 | 32 | 4/12/4/12 | 8 | pill | Hug × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium |
| `Intent` | Neutral · Brand · Success · Warning · Critical · Info |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Label` | Text | `Badge` | Editable status text |
| `Show dot` | Boolean | `false` | Toggle leading status dot |
| `Show icon` | Boolean | `false` | Toggle leading icon |
| `Icon` | Instance swap | `Icon/Placeholder` | Approved icons |

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

Badges are non-interactive. If a removable value is required, use Tag. Outline uses a 1px inside stroke without changing outer size.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- One line only; truncate only in a constrained parent.
- Intent never relies on color alone when the meaning is critical.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Badge` component and its dependencies pass component QA, ask:

> “The Badge component is complete. Should I build its optional designer documentation from [badge.md](badge.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Badge`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `Badge/Filled` instance using `Size=Medium`, `Intent=Neutral`. Confirm those selections against the finished default metadata before adding labels. Present it on both the normal semantic surface and the inverse/strong surface required to verify contrast. |
| Purpose and usage | Displays compact status or classification. Filled and Outline are separate public sets. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show short status or classification labels at the lowest suitable emphasis. Do not use Badge as an action, place sentences inside it, or use color as the only status cue. |
| Variants and states | Start with a public-set comparison for `Badge/Filled`, `Badge/Outline`, then build focused connected-instance comparisons for `Size` (`Small`, `Medium`); `Intent` (`Neutral`, `Brand`, `Success`, `Warning`, `Critical`, `Info`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Badge`); `Show dot` (Boolean, default `false`); `Show icon` (Boolean, default `false`); `Icon` (Instance swap, default `Icon/Placeholder`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

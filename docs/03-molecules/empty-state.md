# Empty State

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Feedback`  
**Deliverable:** one public component set named `EmptyState`

## Create in Figma

Create one public component set named `EmptyState`. Component-set math: Size (2) × Alignment (2) = 4 variants. No private helper is required.

Explains absent content and offers a relevant next step.

## Layer tree

```text
EmptyState [COMPONENT, vertical Auto Layout, Fill × Hug]
  Illustration or Icon [INSTANCE; Hug × Hug]
  Content frame [INSTANCE; Hug × Hug]
  Button Group [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 240, max 480 | Hug | 24/24/24/24 | 16 | 12 | Fill × Hug |
| Large | Fill, min 320, max 640 | Hug | 40/40/40/40 | 24 | 12 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Large |
| `Alignment` | Left · Center |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Nothing here yet` | Required |
| `Description` | Text | `Supporting explanation` | Optional |
| `Show media` | Boolean | `true` | Toggle illustration or icon |
| `Media` | Instance swap | `Icon/Inbox` | Approved asset |
| `Show actions` | Boolean | `true` | Toggle Button Group |

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

Center aligns media, text, and actions; Left aligns everything to the start. On Mobile actions stack and fill width.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Copy states why the region is empty and what the user can do.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Empty State` component and its dependencies pass component QA, ask:

> “The Empty State component is complete. Should I build its optional designer documentation from [empty-state.md](empty-state.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Empty State`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `EmptyState` instance using `Size=Small`, `Alignment=Left`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Explains absent content and offers a relevant next step. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Explain why content is absent and offer one relevant next step when the user can act. Do not use Empty State for loading, system failure, or a dense list of competing actions. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Large`); `Alignment` (`Left`, `Center`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Nothing here yet`); `Description` (Text, default `Supporting explanation`); `Show media` (Boolean, default `true`); `Media` (Instance swap, default `Icon/Inbox`); `Show actions` (Boolean, default `true`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

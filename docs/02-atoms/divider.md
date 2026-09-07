# Divider

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Dividers`  
**Deliverable:** one public component set named `Divider`

## Create in Figma

Create one public component set named `Divider`. Component-set math: Orientation (2) × Emphasis (2) = 4 variants. No private helper is required.

Separates related regions without creating layout spacing.

## Layer tree

```text
Divider [COMPONENT, horizontal Auto Layout, Fill × Fixed 4]
  Content [FRAME or VECTOR as specified; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Horizontal | Fill, min 4 | 1 stroke in 4 frame | 0/0/0/0 | 0 | 0 | Fill × Fixed 4 |
| Vertical | 1 stroke in 4 frame | Fill, min 4 | 0/0/0/0 | 0 | 0 | Fixed 4 × Fill |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Orientation` | Horizontal · Vertical |
| `Emphasis` | Subtle · Default |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

No public component properties. Designers resize the instance and choose its variants.

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

Center a 1px line inside a 4px transparent frame. The frame supplies the grid-aligned hit and layout size; the stroke is the controlled exception.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Never use Divider to manufacture spacing.
- The transparent frame remains exactly 4px on the cross axis.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Divider` component and its dependencies pass component QA, ask:

> “The Divider component is complete. Should I build its optional designer documentation from [divider.md](divider.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Divider`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `Divider` instance using `Orientation=Horizontal`, `Emphasis=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Separates related regions without creating layout spacing. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show Divider between related regions that already have intentional spacing. Do not use Divider to create space, box every section, or add decoration without structural meaning. |
| Variants and states | Build focused connected-instance comparisons for `Orientation` (`Horizontal`, `Vertical`); `Emphasis` (`Subtle`, `Default`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

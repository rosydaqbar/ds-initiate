# Icon

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Icons`  
**Deliverable:** one public component named `Icon/{Name}`

## Create in Figma

Create one public component named `Icon/{Name}`. Component-set math: No variant axes; create one component. No private helper is required.

Provides the approved interface symbol set. Each symbol is a separate public component, not a variant.

## Layer tree

```text
Icon/{Name} [COMPONENT, horizontal Auto Layout, Fixed × Fixed]
  Content [FRAME or VECTOR as specified; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Master | 24 | 24 | 0/0/0/0 | 0 | 0 | Fixed × Fixed |
| Small use | 16 | 16 | 0/0/0/0 | 0 | 0 | Scaled instance |
| Medium use | 20 | 20 | 0/0/0/0 | 0 | 0 | Scaled instance |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| None | This component uses properties instead of variants. |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

No public component properties. Designers choose the icon component and its size variant.

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

Draw paths inside a 24×24 frame. Keep a 2px minimum safe area. Use the approved stroke style; optical vector coordinates may be fractional while the frame remains grid-aligned.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Names describe meaning, not appearance.
- All paths inherit the instance color and have no embedded raw fill.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Icon` component and its dependencies pass component QA, ask:

> “The Icon component is complete. Should I build its optional designer documentation from [icon.md](icon.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Icon`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `Icon/{Name}` instance. Confirm those selections against the finished default metadata before adding labels. Present it on both the normal semantic surface and the inverse/strong surface required to verify contrast. |
| Purpose and usage | Provides the approved interface symbol set. Each symbol is a separate public component, not a variant. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show approved symbols at their supported sizes with consistent semantic coloring. Do not redraw, stretch, apply raw colors, or reuse one symbol for conflicting meanings. |
| Icon gallery | Place every finished `Icon/{Meaning}` as a connected `24×24px` master instance inside a `64×80px` gallery cell. Use horizontal wrap Auto Layout with `16px` row and column gaps, show the semantic component name below each instance, and never encode icon names as variants. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

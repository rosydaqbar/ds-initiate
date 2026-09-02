# Close Button

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Buttons`  
**Deliverable:** one public component set named `CloseButton`

## Create in Figma

Create one public component set named `CloseButton`. Component-set math: Size (3) × State (5) = 15 variants. No private helper is required.

Dismisses a surface or overlay and always uses the close icon.

## Layer tree

```text
CloseButton [COMPONENT, horizontal Auto Layout, Fixed × Fixed]
  Content [FRAME or VECTOR as specified; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | 32 | 32 | 0/0/0/0 | 0 | 8 | Fixed × Fixed |
| Medium | 40 | 40 | 0/0/0/0 | 0 | 8 | Fixed × Fixed |
| Large | 48 | 48 | 0/0/0/0 | 0 | 8 | Fixed × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium · Large |
| `State` | Default · Hover · Pressed · Focus · Disabled |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Accessible label` | Text | `Close` | Handoff name; not visible |

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

Use a fixed centered 16/20/24 icon by size. Prototype hover and pressed with 100ms Change to. Focus uses a 4px ring; Disabled has no reaction.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Do not expose icon swap.
- Provide a 44×44px target when Small is used.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Close Button` component and its dependencies pass component QA, ask:

> “The Close Button component is complete. Should I build its optional designer documentation from [close-button.md](close-button.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Close Button`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `CloseButton` instance using `Size=Medium`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on both the normal semantic surface and the inverse/strong surface required to verify contrast. |
| Purpose and usage | Dismisses a surface or overlay and always uses the close icon. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show Close Button only on a dismissible surface and preserve its accessible name. Do not replace it with a generic Icon Button, swap the close icon, or use it for Back navigation. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`, `Large`); `State` (`Default`, `Hover`, `Pressed`, `Focus`, `Disabled`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Accessible label` (Text, default `Close`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

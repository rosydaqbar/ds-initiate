# Status Dot

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Status`  
**Deliverable:** one public component set named `StatusDot`

## Create in Figma

Create one public component set named `StatusDot`. Component-set math: Size (3) × Intent (6) = 18 variants. No private helper is required.

Provides a compact status cue used with text or inside another component.

## Layer tree

```text
StatusDot [COMPONENT, horizontal Auto Layout, Fixed × Fixed]
  Content [FRAME or VECTOR as specified; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| 8 | 8 | 8 | 0/0/0/0 | 0 | pill | Fixed × Fixed |
| 12 | 12 | 12 | 0/0/0/0 | 0 | pill | Fixed × Fixed |
| 16 | 16 | 16 | 0/0/0/0 | 0 | pill | Fixed × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | 8 · 12 · 16 |
| `Intent` | Neutral · Brand · Success · Warning · Critical · Info |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

No public component properties. Designers choose the semantic status and size variants.

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

Non-interactive. Use with a visible label except when nested in Avatar where status is described elsewhere.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Meaning never relies on dot color alone.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Status Dot` component and its dependencies pass component QA, ask:

> “The Status Dot component is complete. Should I build its optional designer documentation from [status-dot.md](status-dot.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Status Dot`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `StatusDot` instance using `Size=8`, `Intent=Neutral`. Confirm those selections against the finished default metadata before adding labels. Present it on both the normal semantic surface and the inverse/strong surface required to verify contrast. |
| Purpose and usage | Provides a compact status cue used with text or inside another component. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show Status Dot beside text or inside a component that supplies the status meaning. Do not use it as a standalone mystery indicator or rely on its color alone. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`8`, `12`, `16`); `Intent` (`Neutral`, `Brand`, `Success`, `Warning`, `Critical`, `Info`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

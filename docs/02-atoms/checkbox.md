# Checkbox

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Checkboxes`  
**Deliverable:** one public component set named `Checkbox`

## Create in Figma

Create one public component set named `Checkbox`. Component-set math: Size (2) × Selection (3) × State (4) = 24 variants. No private helper is required.

Captures independent binary or mixed selection.

## Layer tree

```text
Checkbox [COMPONENT, horizontal Auto Layout, Fixed × Fixed]
  Content [FRAME or VECTOR as specified; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | 16 | 16 | 0/0/0/0 | 0 | 4 | Fixed × Fixed |
| Medium | 20 | 20 | 0/0/0/0 | 0 | 4 | Fixed × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium |
| `Selection` | Unchecked · Checked · Mixed |
| `State` | Default · Hover · Focus · Disabled |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Accessible label` | Text | `Checkbox` | Documentation and handoff name |

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

Prototype Default→Hover while hovering and Hover→the same Selection Pressed appearance while pressing if documented. Focus adds a 4px ring. Mixed uses a centered 12×4 bar; Checked uses a 12×12 icon.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Use inside Checkbox Field for a visible label and 44px minimum target.
- Disabled variants have no interactions.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Checkbox` component and its dependencies pass component QA, ask:

> “The Checkbox component is complete. Should I build its optional designer documentation from [checkbox.md](checkbox.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Checkbox`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `Checkbox` instance using `Size=Medium`, `Selection=Unchecked`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on both the normal semantic surface and the inverse/strong surface required to verify contrast. |
| Purpose and usage | Captures independent binary or mixed selection. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show independent selections and the Mixed state when it represents a partial group selection. Do not use Checkbox for mutually exclusive choices or an immediate on/off setting. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`); `Selection` (`Unchecked`, `Checked`, `Mixed`); `State` (`Default`, `Hover`, `Focus`, `Disabled`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Accessible label` (Text, default `Checkbox`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

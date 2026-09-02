# Radio Button

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Radio Buttons`  
**Deliverable:** one public component set named `RadioButton`

## Create in Figma

Create one public component set named `RadioButton`. Component-set math: Size (2) × Selection (2) × State (5) = 20 variants. No private helper is required.

Selects one option from a mutually exclusive group.

## Layer tree

```text
RadioButton [COMPONENT, horizontal Auto Layout, Fixed × Fixed]
  Content [FRAME or VECTOR as specified; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | 16 | 16 | 0/0/0/0 | 0 | pill | Fixed × Fixed |
| Medium | 20 | 20 | 0/0/0/0 | 0 | pill | Fixed × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium |
| `Selection` | Unselected · Selected |
| `State` | Default · Hover · Pressed · Focus · Disabled |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Accessible label` | Text | `Option` | Documentation and handoff name |

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

Selected state contains an 8px centered dot. Focus uses a 4px ring. Use only inside Radio Group or a labeled Radio Field composition.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- A group always has a visible label or programmatic legend.
- Disabled has no hover or press reaction.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Radio Button` component and its dependencies pass component QA, ask:

> “The Radio Button component is complete. Should I build its optional designer documentation from [radio-button.md](radio-button.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Radio Button`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `RadioButton` instance using `Size=Medium`, `Selection=Unselected`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Selects one option from a mutually exclusive group. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show Radio Button inside a labelled group where exactly one option can be selected. Do not use an isolated Radio Button or use several radios for independent choices. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`); `Selection` (`Unselected`, `Selected`); `State` (`Default`, `Hover`, `Pressed`, `Focus`, `Disabled`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Accessible label` (Text, default `Option`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

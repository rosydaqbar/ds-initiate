# Icon Button

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Buttons`  
**Deliverable:** `IconButton/Primary`, `IconButton/Secondary`, `IconButton/Tertiary`

## Create in Figma

Create `IconButton/Primary`, `IconButton/Secondary`, `IconButton/Tertiary`. Each set uses Size (3) × Intent (2) × State (5) = 30 variants. Create private helpers: `_IconButton/Content`.

Triggers an action represented by one universally understood icon.

## Layer tree

```text
IconButton/{Style} [COMPONENT, horizontal Auto Layout, Fixed × Fixed]
  _IconButton/Content [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | 32 | 32 | 0/0/0/0 | 0 | 8 | Fixed × Fixed; icon 16 |
| Medium | 40 | 40 | 0/0/0/0 | 0 | 8 | Fixed × Fixed; icon 20 |
| Large | 48 | 48 | 0/0/0/0 | 0 | 8 | Fixed × Fixed; icon 24 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium · Large |
| `Intent` | Default · Destructive |
| `State` | Default · Hover · Pressed · Focus · Disabled |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Icon` | Instance swap | `Icon/Placeholder` | Approved Icon only |
| `Accessible label` | Text | `Action` | Required handoff name |
| `Loading` | Boolean | `false` | Swap icon for centered Spinner |

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

Use the same state reactions and semantic action roles as Button. Loading keeps the outer box unchanged. Focus ring is 4px.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Every instance has a specific accessible label.
- Small requires a 44×44px target wrapper in product composition.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Icon Button` component and its dependencies pass component QA, ask:

> “The Icon Button component is complete. Should I build its optional designer documentation from [icon-button.md](icon-button.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Icon Button`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `IconButton/Primary` instance using `Size=Medium`, `Intent=Default`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on both the normal semantic surface and the inverse/strong surface required to verify contrast. |
| Purpose and usage | Triggers an action represented by one universally understood icon. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show a familiar single icon with an accessible name and supporting Tooltip when its meaning needs reinforcement. Do not use an ambiguous symbol when a labelled Button is clearer. |
| Variants and states | Start with a public-set comparison for `IconButton/Primary`, `IconButton/Secondary`, `IconButton/Tertiary`, then build focused connected-instance comparisons for `Size` (`Small`, `Medium`, `Large`); `Intent` (`Default`, `Destructive`); `State` (`Default`, `Hover`, `Pressed`, `Focus`, `Disabled`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Icon` (Instance swap, default `Icon/Placeholder`); `Accessible label` (Text, default `Action`); `Loading` (Boolean, default `false`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

# Drawer

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Overlays`  
**Deliverable:** one public component set named `Drawer`

## Create in Figma

Create one public component set named `Drawer`. Component-set math: Side (2) × Size (3) × State (2) = 12 variants. No private helper is required.

Hosts a secondary task in a panel attached to a viewport edge.

## Layer tree

```text
Drawer [COMPONENT, vertical Auto Layout, Fill × Hug]
  Drawer header [INSTANCE; Fill × Hug]
  Scrollable content slot [INSTANCE; Fill × Hug]
  ButtonGroup footer [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | 320 | Fill viewport | 24/24/24/24 | 24 | 0 | Fixed × Fill |
| Medium | 480 | Fill viewport | 24/24/24/24 | 24 | 0 | Fixed × Fill |
| Large | 640 | Fill viewport | 32/32/32/32 | 24 | 0 | Fixed × Fill |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Side` | Left · Right |
| `Size` | Small · Medium · Large |
| `State` | Default · Loading |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Drawer title` | Required |
| `Content` | Instance swap | `Content placeholder` | Approved composition |
| `Show footer` | Boolean | `true` | Toggle actions |

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

Open as an overlay with a semantic scrim. Header and footer remain fixed; content scrolls. Mobile replaces all sizes with a 360px-wide full-height sheet. Escape closes and restores focus.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Focus is trapped while modal.
- CloseButton and Escape are both available unless dismissal is intentionally blocked.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Drawer` component and its dependencies pass component QA, ask:

> “The Drawer component is complete. Should I build its optional designer documentation from [drawer.md](drawer.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Drawer`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `Drawer` instance using `Side=Left`, `Size=Medium`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Hosts a secondary task in a panel attached to a viewport edge. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show a focused secondary task with a clear title, dismiss action, and predictable edge placement. Do not use Drawer for an unrelated primary flow, hide its close path, or allow background content to compete for focus. |
| Variants and states | Build focused connected-instance comparisons for `Side` (`Left`, `Right`); `Size` (`Small`, `Medium`, `Large`); `State` (`Default`, `Loading`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Drawer title`); `Content` (Instance swap, default `Content placeholder`); `Show footer` (Boolean, default `true`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

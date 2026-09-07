# Mobile Navigation

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Navigation`  
**Deliverable:** one public component set named `MobileNavigation`

## Create in Figma

Create one public component set named `MobileNavigation`. Component-set math: Type (2) × State (2) = 4 variants. Create private helpers: `_MobileNavigation/Item`.

Provides primary mobile destinations as bottom navigation or a drawer list.

## Layer tree

```text
MobileNavigation [COMPONENT, vertical Auto Layout, Fill × Hug]
  Navigation item instances [INSTANCE; Fill × Hug]
  StatusDot or Badge [INSTANCE; Fill × Hug]
  _MobileNavigation/Item [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Bottom bar | 360 | 64 | 8/16/8/16 | 8 | 0 | Fixed × Fixed; max 5 items |
| Drawer | 320 | Fill viewport | 16/16/16/16 | 8 | 0 | Fixed × Fill |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Type` | BottomBar · Drawer |
| `State` | Default · WithNotification |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Items` | Instance swap | `Navigation item list` | 3–5 primary destinations |
| `Selected item` | Text | `Home` | Documentation sample |

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

BottomBar remains fixed to viewport bottom and includes safe-area handling in implementation. Drawer opens from the menu trigger with scrim and focus trap.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Labels stay visible; icons alone are not sufficient.
- Exactly one destination is active.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Mobile Navigation` component and its dependencies pass component QA, ask:

> “The Mobile Navigation component is complete. Should I build its optional designer documentation from [mobile-navigation.md](mobile-navigation.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Mobile Navigation`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `MobileNavigation` instance using `Type=BottomBar`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Provides primary mobile destinations as bottom navigation or a drawer list. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show a small set of primary destinations with clear selected state, labels, and safe-area spacing. Do not place secondary actions in primary navigation, exceed the supported item count, or rely on icons alone. |
| Variants and states | Build focused connected-instance comparisons for `Type` (`BottomBar`, `Drawer`); `State` (`Default`, `WithNotification`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Items` (Instance swap, default `Navigation item list`); `Selected item` (Text, default `Home`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

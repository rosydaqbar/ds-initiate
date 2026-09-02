# Context Menu

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Menus`  
**Deliverable:** one public component set named `ContextMenu`

## Create in Figma

Create one public component set named `ContextMenu`. Component-set math: Density (2) × State (2) = 4 variants. Create private helpers: `_Menu/Item`, `_Menu/SectionLabel`.

Groups actions opened from a contextual trigger.

## Layer tree

```text
ContextMenu [COMPONENT, vertical Auto Layout, Fill × Hug]
  Menu item instances [INSTANCE; Hug × Hug]
  Divider [INSTANCE; Hug × Hug]
  _Menu/Item [PRIVATE INSTANCE; Hug × Hug]
  _Menu/SectionLabel [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Compact | Hug, min 160, max 320 | Hug | 4/4/4/4 | 0 | 8 | Hug × Hug; item 32 |
| Standard | Hug, min 200, max 360 | Hug | 8/8/8/8 | 0 | 8 | Hug × Hug; item 40 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Density` | Compact · Standard |
| `State` | Default · WithSelection |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Items` | Instance swap | `_Menu/Item list` | Approved internal items |

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

Open as an overlay aligned to the trigger with 4px offset. Use smart animate 100ms opacity/scale. Arrow keys move active item; Escape closes and returns focus.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Destructive items are separated and semantically styled.
- Overlay never clips against viewport edges.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Context Menu` component and its dependencies pass component QA, ask:

> “The Context Menu component is complete. Should I build its optional designer documentation from [context-menu.md](context-menu.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Context Menu`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `ContextMenu` instance using `Density=Standard`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Groups actions opened from a contextual trigger. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show actions that apply to the selected object, group related items, and separate destructive actions. Do not use Context Menu for primary navigation or make it the only route to an essential action. |
| Variants and states | Build focused connected-instance comparisons for `Density` (`Compact`, `Standard`); `State` (`Default`, `WithSelection`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Items` (Instance swap, default `_Menu/Item list`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

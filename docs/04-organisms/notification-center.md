# Notification Center

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Notifications`  
**Deliverable:** one public component set named `NotificationCenter`

## Create in Figma

Create one public component set named `NotificationCenter`. Component-set math: Layout (2) × State (4) = 8 variants. Create private helpers: `_NotificationCenter/Item`.

Lists product notifications with unread state, filters, and bulk actions.

## Layer tree

```text
NotificationCenter [COMPONENT, vertical Auto Layout, Fill × Hug]
  SectionHeader [INSTANCE; Fill × Hug]
  Tabs or FilterBar [INSTANCE; Fill × Hug]
  Notification item list [INSTANCE; Fill × Hug]
  EmptyState [INSTANCE; Fill × Hug]
  _NotificationCenter/Item [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Popover | 400 | Hug, min 320, max 640 | 16/16/16/16 | 12 | 12 | Fixed × Hug |
| Drawer | 480 | Fill viewport | 24/24/24/24 | 16 | 0 | Fixed × Fill |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Popover · Drawer |
| `State` | Default · Loading · Empty · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Notification Center` | Section heading |
| `SectionHeader` | Instance swap | `SectionHeader` | Keep as a connected nested component |
| `Tabs` | Instance swap | `Tabs or FilterBar` | Keep as a connected nested component |
| `Notification item list` | Instance swap | `Notification item list` | Keep as a connected nested component |
| `EmptyState` | Instance swap | `EmptyState` | Keep as a connected nested component |

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

Unread indicator is 8px plus text treatment. List scrolls while header remains fixed. Mark-as-read updates in place and does not reorder unless product rules explicitly say so.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Notification time and read state are accessible.
- Empty differs between no notifications and no filter results.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Notification Center` component and its dependencies pass component QA, ask:

> “The Notification Center component is complete. Should I build its optional designer documentation from [notification-center.md](notification-center.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Notification Center`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `NotificationCenter` instance using `Layout=Popover`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Lists product notifications with unread state, filters, and bulk actions. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show notifications in a clear order with readable unread state, filtering, and explicit bulk actions. Do not substitute it for Toast or Activity Feed, or communicate unread state through color alone. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Popover`, `Drawer`); `State` (`Default`, `Loading`, `Empty`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Notification Center`); `SectionHeader` (Instance swap, default `SectionHeader`); `Tabs` (Instance swap, default `Tabs or FilterBar`); `Notification item list` (Instance swap, default `Notification item list`); `EmptyState` (Instance swap, default `EmptyState`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

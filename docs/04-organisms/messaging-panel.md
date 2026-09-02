# Messaging Panel

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Messaging`  
**Deliverable:** one public component set named `MessagingPanel`

## Create in Figma

Create one public component set named `MessagingPanel`. Component-set math: Layout (2) × State (4) = 8 variants. Create private helpers: `_Messaging/Message`.

Combines conversation header, message history, composer, and complete data states.

## Layer tree

```text
MessagingPanel [COMPONENT, vertical Auto Layout, Fill × Hug]
  Panel header [INSTANCE; Fill × Hug]
  Message list [INSTANCE; Fill × Hug]
  EmptyState [INSTANCE; Fill × Hug]
  Composer [INSTANCE; Fill × Hug]
  _Messaging/Message [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Desktop | Fill, min 480, max 800 | 640 | 0/0/0/0 | 0 | 12 | Fill × Fixed |
| Mobile | 328 | Fill viewport, min 560 | 0/0/0/0 | 0 | 0 | Fixed × Fill |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Desktop · Mobile |
| `State` | Empty · Conversation · Loading · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Messaging Panel` | Section heading |
| `Panel header` | Instance swap | `Panel header` | Keep as a connected nested component |
| `Message list` | Instance swap | `Message list` | Keep as a connected nested component |
| `EmptyState` | Instance swap | `EmptyState` | Keep as a connected nested component |
| `Composer` | Instance swap | `Composer` | Keep as a connected nested component |

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

Header is 64px, composer min 72px, and message list fills and scrolls between them. New outgoing messages append without moving focus. Mobile uses full-screen structure.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Messages expose sender, time, and delivery state.
- Reading order matches visual order.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Messaging Panel` component and its dependencies pass component QA, ask:

> “The Messaging Panel component is complete. Should I build its optional designer documentation from [messaging-panel.md](messaging-panel.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Messaging Panel`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `MessagingPanel` instance using `Layout=Desktop`, `State=Empty`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Combines conversation header, message history, composer, and complete data states. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show conversation context, ordered messages, composer state, and send or load failures without losing content. Do not mix global navigation into the panel or hide failed and unsent message states. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Desktop`, `Mobile`); `State` (`Empty`, `Conversation`, `Loading`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Messaging Panel`); `Panel header` (Instance swap, default `Panel header`); `Message list` (Instance swap, default `Message list`); `EmptyState` (Instance swap, default `EmptyState`); `Composer` (Instance swap, default `Composer`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

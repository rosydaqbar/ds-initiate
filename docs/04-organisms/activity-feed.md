# Activity Feed

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Activity Feed`  
**Deliverable:** one public component set named `ActivityFeed`

## Create in Figma

Create one public component set named `ActivityFeed`. Component-set math: Layout (2) × State (4) = 8 variants. Create private helpers: `_ActivityFeed/Item`.

Shows a chronological stream of product events with actor, action, target, and time.

## Layer tree

```text
ActivityFeed [COMPONENT, vertical Auto Layout, Fill × Hug]
  SectionHeader [INSTANCE; Fill × Hug]
  Activity item list [INSTANCE; Fill × Hug]
  Pagination or Load More [INSTANCE; Fill × Hug]
  EmptyState [INSTANCE; Fill × Hug]
  _ActivityFeed/Item [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Desktop | Fill, min 640, max 1280 | Hug, min 160 | 24/24/24/24 | 24 | 12 | Fill × Hug |
| Mobile | Fill, min 328 | Hug, min 160 | 16/16/16/16 | 16 | 12 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Desktop · Mobile |
| `State` | Default · Loading · Empty · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Activity Feed` | Section heading |
| `SectionHeader` | Instance swap | `SectionHeader` | Keep as a connected nested component |
| `Activity item list` | Instance swap | `Activity item list` | Keep as a connected nested component |
| `Pagination` | Instance swap | `Pagination or Load More` | Keep as a connected nested component |
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

Desktop item uses a 40px Avatar, 12px gap, and content Fill. Mobile uses 32px Avatar and 8px gap. Group dates with 24px section gaps; Loading replaces rows with equal-height Skeletons.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Event order and timestamp format are explicit.
- New activity does not unexpectedly move keyboard focus.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Activity Feed` component and its dependencies pass component QA, ask:

> “The Activity Feed component is complete. Should I build its optional designer documentation from [activity-feed.md](activity-feed.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Activity Feed`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `ActivityFeed` instance using `Layout=Desktop`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a semantic transparency checker plus the normal surface. |
| Purpose and usage | Shows a chronological stream of product events with actor, action, target, and time. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show events in a clear chronological order with actor, action, target, and readable time. Do not use Activity Feed for tasks or chat, omit the event subject, or make time order ambiguous. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Desktop`, `Mobile`); `State` (`Default`, `Loading`, `Empty`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Activity Feed`); `SectionHeader` (Instance swap, default `SectionHeader`); `Activity item list` (Instance swap, default `Activity item list`); `Pagination` (Instance swap, default `Pagination or Load More`); `EmptyState` (Instance swap, default `EmptyState`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

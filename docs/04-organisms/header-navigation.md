# Header Navigation

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Navigation`  
**Deliverable:** one public component set named `HeaderNavigation`

## Create in Figma

Create one public component set named `HeaderNavigation`. Component-set math: Layout (2) × State (2) = 4 variants. No private helper is required.

Provides top-level product navigation, global actions, search, and account access.

## Layer tree

```text
HeaderNavigation [COMPONENT, vertical Auto Layout, Fill × Hug]
  Logo [INSTANCE; Fill × Hug]
  Primary navigation [INSTANCE; Fill × Hug]
  SearchField [INSTANCE; Fill × Hug]
  IconButton group [INSTANCE; Fill × Hug]
  Avatar [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Desktop | Fill, min 768 | 64 | 0/24/0/24 | 24 | 0 | Fill × Fixed |
| Mobile | Fill, min 360 | 56 | 0/16/0/16 | 16 | 0 | Fill × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Desktop · Mobile |
| `State` | Default · SearchOpen |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Logo` | Instance swap | `Logo/Horizontal` | Approved mark |
| `Navigation` | Instance swap | `Navigation items` | Product destinations |
| `Show search` | Boolean | `true` | Toggle search |
| `Account` | Instance swap | `Avatar` | Account trigger |

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

Desktop nav fills between Logo and actions. Mobile replaces primary links with a menu trigger; SearchOpen may replace the central region but keeps close and account access.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Active destination is programmatically indicated.
- Header remains usable at 200% text zoom.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Header Navigation` component and its dependencies pass component QA, ask:

> “The Header Navigation component is complete. Should I build its optional designer documentation from [header-navigation.md](header-navigation.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Header Navigation`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `HeaderNavigation` instance using `Layout=Desktop`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Provides top-level product navigation, global actions, search, and account access. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show primary destinations in a stable order and keep global search, actions, and account access visually distinct. Do not crowd it with local controls or create several competing navigation systems. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Desktop`, `Mobile`); `State` (`Default`, `SearchOpen`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Logo` (Instance swap, default `Logo/Horizontal`); `Navigation` (Instance swap, default `Navigation items`); `Show search` (Boolean, default `true`); `Account` (Instance swap, default `Avatar`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

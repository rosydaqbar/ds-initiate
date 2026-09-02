# Command Menu

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Command Menu`  
**Deliverable:** one public component set named `CommandMenu`

## Create in Figma

Create one public component set named `CommandMenu`. Component-set math: Layout (2) × State (3) = 6 variants. Create private helpers: `_CommandMenu/Item`, `_CommandMenu/Group`.

Provides keyboard-first search and execution of product commands.

## Layer tree

```text
CommandMenu [COMPONENT, vertical Auto Layout, Fill × Hug]
  SearchInput [INSTANCE; Fill × Hug]
  Command group list [INSTANCE; Fill × Hug]
  KeyboardShortcut [INSTANCE; Fill × Hug]
  EmptyState [INSTANCE; Fill × Hug]
  _CommandMenu/Item [PRIVATE INSTANCE; Hug × Hug]
  _CommandMenu/Group [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Desktop dialog | 640 | Hug, min 320, max 640 | 8/8/8/8 | 8 | 16 | Fixed × Hug |
| Mobile sheet | 328 | Hug, min 400 | 8/8/16/8 | 8 | 16 | Fixed × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Desktop · Mobile |
| `State` | Results · Empty · Loading |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Command Menu` | Section heading |
| `SearchInput` | Instance swap | `SearchInput` | Keep as a connected nested component |
| `Command group list` | Instance swap | `Command group list` | Keep as a connected nested component |
| `KeyboardShortcut` | Instance swap | `KeyboardShortcut` | Keep as a connected nested component |
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

Search stays pinned at top; result area scrolls after 480px desktop or 560px mobile height. Arrow keys move active command, Enter executes, Escape closes and restores focus.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Active command remains visible while keyboard navigating.
- Commands include label, group, and optional shortcut.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Command Menu` component and its dependencies pass component QA, ask:

> “The Command Menu component is complete. Should I build its optional designer documentation from [command-menu.md](command-menu.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Command Menu`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `CommandMenu` instance using `Layout=Desktop`, `State=Results`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Provides keyboard-first search and execution of product commands. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show searchable commands with clear grouping, shortcuts, unavailable states, and a visible selected result. Do not replace primary navigation, execute a destructive command without confirmation, or hide essential actions here alone. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Desktop`, `Mobile`); `State` (`Results`, `Empty`, `Loading`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Command Menu`); `SearchInput` (Instance swap, default `SearchInput`); `Command group list` (Instance swap, default `Command group list`); `KeyboardShortcut` (Instance swap, default `KeyboardShortcut`); `EmptyState` (Instance swap, default `EmptyState`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

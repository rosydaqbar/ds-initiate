# Split Button

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Buttons`  
**Deliverable:** `SplitButton/Primary`, `SplitButton/Secondary`

## Create in Figma

Create `SplitButton/Primary`, `SplitButton/Secondary`. Each set uses Size (3) × Intent (2) × State (5) = 30 variants. No private helper is required.

Pairs a default action with a menu of closely related alternatives.

## Layer tree

```text
SplitButton/{Style} [COMPONENT, vertical Auto Layout, Fill × Hug]
  Button [INSTANCE; Hug × Hug]
  Divider [INSTANCE; Hug × Hug]
  IconButton [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Hug, min 96 | 32 | 0/0/0/0 | 0 | 8 | Hug × Fixed |
| Medium | Hug, min 120 | 40 | 0/0/0/0 | 0 | 8 | Hug × Fixed |
| Large | Hug, min 144 | 48 | 0/0/0/0 | 0 | 8 | Hug × Fixed |

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
| `Label` | Text | `Action` | Primary action |
| `Menu` | Instance swap | `DropdownMenu` | Related actions |
| `Show leading icon` | Boolean | `false` | Pass through to Button |

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

Main segment activates the default action; trailing segment opens Dropdown Menu. Use a 1px shared divider and remove adjoining radii without detaching nested components.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Both segments have independent focus treatment and accessible names.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Split Button` component and its dependencies pass component QA, ask:

> “The Split Button component is complete. Should I build its optional designer documentation from [split-button.md](split-button.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Split Button`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `SplitButton/Primary` instance using `Size=Medium`, `Intent=Default`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Pairs a default action with a menu of closely related alternatives. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show one predictable default action with a short menu of closely related alternatives. Do not combine unrelated actions, hide the primary outcome behind the menu, or use an ambiguous default label. |
| Variants and states | Start with a public-set comparison for `SplitButton/Primary`, `SplitButton/Secondary`, then build focused connected-instance comparisons for `Size` (`Small`, `Medium`, `Large`); `Intent` (`Default`, `Destructive`); `State` (`Default`, `Hover`, `Pressed`, `Focus`, `Disabled`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Action`); `Menu` (Instance swap, default `DropdownMenu`); `Show leading icon` (Boolean, default `false`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

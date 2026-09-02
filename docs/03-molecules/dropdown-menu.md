# Dropdown Menu

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Menus`  
**Deliverable:** one public component set named `DropdownMenu`

## Create in Figma

Create one public component set named `DropdownMenu`. Component-set math: Density (2) × Content (2) = 4 variants. Create private helpers: `_Menu/Item`, `_Menu/SectionLabel`.

Displays a list of choices or actions from a trigger.

## Layer tree

```text
DropdownMenu [COMPONENT, vertical Auto Layout, Fill × Hug]
  Menu item instances [INSTANCE; Hug × Hug]
  Section labels [INSTANCE; Hug × Hug]
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
| `Content` | Populated · Empty |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Items` | Instance swap | `_Menu/Item list` | Approved internal items |
| `Empty message` | Text | `No options` | Empty content |

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

Open 4px below the trigger as an overlay. Flip or shift when near a viewport edge. Arrow keys navigate, Enter selects, Escape closes.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Selected and disabled item states are visually distinct.
- Long labels truncate before shortcut or checkmark.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Dropdown Menu` component and its dependencies pass component QA, ask:

> “The Dropdown Menu component is complete. Should I build its optional designer documentation from [dropdown-menu.md](dropdown-menu.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Dropdown Menu`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `DropdownMenu` instance using `Density=Standard`, `Content=Populated`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Displays a list of choices or actions from a trigger. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show concise choices or actions, group related items, and distinguish unavailable and destructive options. Do not use Dropdown Menu as a form Select or hide critical actions without another discoverable route. |
| Variants and states | Build focused connected-instance comparisons for `Density` (`Compact`, `Standard`); `Content` (`Populated`, `Empty`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Items` (Instance swap, default `_Menu/Item list`); `Empty message` (Text, default `No options`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

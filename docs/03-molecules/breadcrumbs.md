# Breadcrumbs

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Navigation`  
**Deliverable:** one public component set named `Breadcrumbs`

## Create in Figma

Create one public component set named `Breadcrumbs`. Component-set math: Size (2) × Collapse (2) = 4 variants. Create private helpers: `_Breadcrumbs/Item`.

Shows hierarchy and allows navigation to parent levels.

## Layer tree

```text
Breadcrumbs [COMPONENT, vertical Auto Layout, Fill × Hug]
  Link instances [INSTANCE; Hug × Hug]
  Icon/ChevronRight [INSTANCE; Hug × Hug]
  Current page text [INSTANCE; Hug × Hug]
  _Breadcrumbs/Item [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 160 | 24 | 0/0/0/0 | 8 | 0 | Fill × Fixed |
| Medium | Fill, min 200 | 32 | 0/0/0/0 | 8 | 0 | Fill × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium |
| `Collapse` | Full · Truncated |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Item labels` | Text | `Parent / Child` | Documentation sample |
| `Show home` | Boolean | `false` | Toggle first home link |

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

Truncated retains first and current item and replaces middle levels with an overflow menu trigger. Current page is text, not a link.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Keyboard order follows visual order.
- Long labels truncate one item rather than the entire trail.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Breadcrumbs` component and its dependencies pass component QA, ask:

> “The Breadcrumbs component is complete. Should I build its optional designer documentation from [breadcrumbs.md](breadcrumbs.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Breadcrumbs`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `Breadcrumbs` instance using `Size=Medium`, `Collapse=Full`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Shows hierarchy and allows navigation to parent levels. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show the current hierarchy in order, link parent levels, and keep the current item non-interactive. Do not use Breadcrumbs for steps, peer-view switching, or a flat navigation list. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`); `Collapse` (`Full`, `Truncated`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Item labels` (Text, default `Parent / Child`); `Show home` (Boolean, default `false`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

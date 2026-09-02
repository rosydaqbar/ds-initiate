# Pagination

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Navigation`  
**Deliverable:** one public component set named `Pagination`

## Create in Figma

Create one public component set named `Pagination`. Component-set math: Size (2) × Range (2) = 4 variants. Create private helpers: `_Pagination/Page`.

Moves between known pages of results.

## Layer tree

```text
Pagination [COMPONENT, vertical Auto Layout, Fill × Hug]
  Previous Button [INSTANCE; Hug × Hug]
  Page Button instances [INSTANCE; Hug × Hug]
  Next Button [INSTANCE; Hug × Hug]
  _Pagination/Page [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Hug, max 480 | 32 | 0/0/0/0 | 4 | 0 | Hug × Fixed |
| Medium | Hug, max 640 | 40 | 0/0/0/0 | 8 | 0 | Hug × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium |
| `Range` | Short · Truncated |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Current page` | Text | `1` | Selected sample |
| `Total pages` | Text | `10` | Range sample |

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

Truncated shows first, current neighborhood, ellipsis, and last. Mobile replaces page numbers with Previous, page status text, and Next.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Current page uses aria-current in implementation.
- Previous/Next are disabled at bounds.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Pagination` component and its dependencies pass component QA, ask:

> “The Pagination component is complete. Should I build its optional designer documentation from [pagination.md](pagination.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Pagination`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `Pagination` instance using `Size=Medium`, `Range=Short`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Moves between known pages of results. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show the current location, available movement, and a stable compact range for known result pages. Do not use Pagination for a short list, an unknown endless feed, or unlabeled previous and next controls. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`); `Range` (`Short`, `Truncated`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Current page` (Text, default `1`); `Total pages` (Text, default `10`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

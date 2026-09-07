# Thumbnail

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Media`  
**Deliverable:** one public component set named `Thumbnail`

## Create in Figma

Create one public component set named `Thumbnail`. Component-set math: Size (4) × Ratio (3) × State (2) = 24 variants. No private helper is required.

Displays a compact preview with predictable crop and fallback.

## Layer tree

```text
Thumbnail [COMPONENT, horizontal Auto Layout, Fixed × Fixed]
  Content [FRAME or VECTOR as specified; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| 40 | 40 or ratio width | 40 | 0/0/0/0 | 0 | 8 | Fixed × Fixed |
| 48 | 48 or ratio width | 48 | 0/0/0/0 | 0 | 8 | Fixed × Fixed |
| 64 | 64 or ratio width | 64 | 0/0/0/0 | 0 | 8 | Fixed × Fixed |
| 80 | 80 or ratio width | 80 | 0/0/0/0 | 0 | 8 | Fixed × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | 40 · 48 · 64 · 80 |
| `Ratio` | Square · Landscape · Portrait |
| `State` | Image · Fallback |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Image` | Instance swap | `Media placeholder` | Approved image component |
| `Alt description` | Text | `` | Handoff content |

## Variable and Style bindings

| Layer/property | Binding |
| --- | --- |
| Container fill | `color/background/surface` |
| Text content, when present | `color/text/primary` |
| Icon or vector content, when present | `color/icon/primary` |
| Supporting text, when present | `color/text/secondary` |
| Supporting icon, when present | `color/icon/secondary` |
| Border | `color/border/default` |
| Focus ring | `color/border/focus` |
| Radius | `radius/control` |

Use semantic variables only; Primitives never bind directly to component layers. Text uses approved Text Styles and shadows use Effect Styles.

## Behavior

Clip media to the frame. Landscape uses 4:3 and Portrait uses 3:4 dimensions rounded to exact 4px values for each size; do not distort the source.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Crop uses Fill; logos or diagrams may use Fit when documented.
- Fallback remains centered.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Thumbnail` component and its dependencies pass component QA, ask:

> “The Thumbnail component is complete. Should I build its optional designer documentation from [thumbnail.md](thumbnail.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Thumbnail`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `Thumbnail` instance using `Size=40`, `Ratio=Square`, `State=Image`. Confirm those selections against the finished default metadata before adding labels. Present it on a semantic transparency checker plus the normal surface. |
| Purpose and usage | Displays a compact preview with predictable crop and fallback. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show a consistent crop, supported aspect ratio, and approved fallback. Do not stretch imagery, place critical information at a cropped edge, or create ad hoc Thumbnail sizes. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`40`, `48`, `64`, `80`); `Ratio` (`Square`, `Landscape`, `Portrait`); `State` (`Image`, `Fallback`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Image` (Instance swap, default `Media placeholder`); `Alt description` (Text). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

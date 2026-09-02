# Avatar

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Avatars`  
**Deliverable:** one public component set named `Avatar`

## Create in Figma

Create one public component set named `Avatar`. Component-set math: Size (5) × Content (3) × Shape (2) = 30 variants. Create private helpers: `_Avatar/Status`.

Represents a person, team, or entity. Use one component set; image choice and status visibility are properties.

## Layer tree

```text
Avatar [COMPONENT, horizontal Auto Layout, Fixed × Fixed]
  Avatar content [INSTANCE; Hug × Hug]
  _Avatar/Status [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| 24 | 24 | 24 | 0/0/0/0 | 0 | 12 or pill | Fixed × Fixed |
| 32 | 32 | 32 | 0/0/0/0 | 0 | 12 or pill | Fixed × Fixed |
| 40 | 40 | 40 | 0/0/0/0 | 0 | 12 or pill | Fixed × Fixed |
| 48 | 48 | 48 | 0/0/0/0 | 0 | 16 or pill | Fixed × Fixed |
| 64 | 64 | 64 | 0/0/0/0 | 0 | 16 or pill | Fixed × Fixed |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | 24 · 32 · 40 · 48 · 64 |
| `Content` | Image · Initials · Icon |
| `Shape` | Circle · Square |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Image` | Instance swap | `Avatar image placeholder` | Replace image component |
| `Initials` | Text | `AA` | Two visible characters maximum |
| `Show status` | Boolean | `false` | Toggle nested status dot |
| `Status` | Instance swap | `StatusDot/Online` | Approved status values |

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

Clip image content to the container. Place status at bottom-right using absolute positioning on a 4px coordinate; add a surface-colored 2px optical separation inside the fixed status box.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Status never covers more than one quarter of the avatar area.
- Image, initials, and icon remain centered at every size.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Avatar` component and its dependencies pass component QA, ask:

> “The Avatar component is complete. Should I build its optional designer documentation from [avatar.md](avatar.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Avatar`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `Avatar` instance using `Size=24`, `Content=Image`, `Shape=Circle`. Confirm those selections against the finished default metadata before adding labels. Present it on a semantic transparency checker plus the normal surface. |
| Purpose and usage | Represents a person, team, or entity. Use one component set; image choice and status visibility are properties. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show image, initials, and approved fallback use, including status paired with a readable label. Do not use unapproved imagery, communicate status by color alone, or detach the Avatar. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`24`, `32`, `40`, `48`, `64`); `Content` (`Image`, `Initials`, `Icon`); `Shape` (`Circle`, `Square`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Image` (Instance swap, default `Avatar image placeholder`); `Initials` (Text, default `AA`); `Show status` (Boolean, default `false`); `Status` (Instance swap, default `StatusDot/Online`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

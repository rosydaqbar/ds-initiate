# Link

**Atomic level:** Atom  
**Library section:** Base Components  
**Figma page:** `Links`  
**Deliverable:** one public component set named `Link`

## Create in Figma

Create one public component set named `Link`. Component-set math: Size (3) × Intent (2) × State (5) = 30 variants. No private helper is required.

Navigates to another location. Use Button for actions that do not navigate.

## Layer tree

```text
Link [COMPONENT, horizontal Auto Layout, Hug × Fixed]
  Content [FRAME or VECTOR as specified; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Hug | 24 | 0/0/0/0 | 4 | 0 | Hug × Fixed; icon 16 |
| Medium | Hug | 32 | 0/0/0/0 | 4 | 0 | Hug × Fixed; icon 20 |
| Large | Hug | 40 | 0/0/0/0 | 8 | 0 | Hug × Fixed; icon 20 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium · Large |
| `Intent` | Default · Critical |
| `State` | Default · Hover · Pressed · Focus · Disabled |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Label` | Text | `Link` | Editable text |
| `Show leading icon` | Boolean | `false` | Toggle icon |
| `Leading icon` | Instance swap | `Icon/Placeholder` | Approved Icon |
| `Show trailing icon` | Boolean | `false` | Toggle icon |
| `Trailing icon` | Instance swap | `Icon/ArrowUpRight` | Approved Icon |

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

Underline on Hover and Focus; keep underline thickness as a rendered-stroke exception. Focus adds a 4px external ring or semantic focus treatment. Disabled is not interactive.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Destination is understandable from the label.
- External links use a trailing external-link icon when required.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Link` component and its dependencies pass component QA, ask:

> “The Link component is complete. Should I build its optional designer documentation from [link.md](link.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Link`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Atom |
| --- | --- |
| Hero preview | Place one connected `Link` instance using `Size=Medium`, `Intent=Default`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Navigates to another location. Use Button for actions that do not navigate. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show descriptive link text for navigation and preserve visited, hover, and focus meaning where supported. Do not style an action as Link or use vague labels such as “Click here.” |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`, `Large`); `Intent` (`Default`, `Critical`); `State` (`Default`, `Hover`, `Pressed`, `Focus`, `Disabled`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Link`); `Show leading icon` (Boolean, default `false`); `Leading icon` (Instance swap, default `Icon/Placeholder`); `Show trailing icon` (Boolean, default `false`); `Trailing icon` (Instance swap, default `Icon/ArrowUpRight`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

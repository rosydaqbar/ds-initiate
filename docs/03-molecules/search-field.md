# Search Field

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Inputs`  
**Deliverable:** one public component set named `SearchField`

## Create in Figma

Create one public component set named `SearchField`. Component-set math: Size (3) × State (5) = 15 variants. No private helper is required.

Adds label, help, status, and result count to Search Input.

## Layer tree

```text
SearchField [COMPONENT, vertical Auto Layout, Fill × Hug]
  FormField [INSTANCE; Hug × Hug]
  SearchInput [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 240 | Hug, min 56 | 0/0/0/0 | 4 | 0 | Fill × Hug; control 32 |
| Medium | Fill, min 240 | Hug, min 64 | 0/0/0/0 | 4 | 0 | Fill × Hug; control 40 |
| Large | Fill, min 240 | Hug, min 72 | 0/0/0/0 | 4 | 0 | Fill × Hug; control 48 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium · Large |
| `State` | Empty · Filled · Focus · Loading · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Label` | Text | `Search` | Visible label |
| `Value` | Text | `` | Query |
| `Result status` | Text | `` | Count or loading announcement |
| `Show label` | Boolean | `true` | Visual label; accessible name always required |

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

Loading passes through to SearchInput. Result status appears below with 4px gap and uses a live-region handoff note.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Search submission behavior is documented as instant or explicit.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Search Field` component and its dependencies pass component QA, ask:

> “The Search Field component is complete. Should I build its optional designer documentation from [search-field.md](search-field.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Search Field`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `SearchField` instance using `Size=Medium`, `State=Empty`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Adds label, help, status, and result count to Search Input. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show the search scope, current query, useful status, and result count when available. Do not use Search Field as a general input or combine complex filter controls inside it. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`, `Large`); `State` (`Empty`, `Filled`, `Focus`, `Loading`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Label` (Text, default `Search`); `Value` (Text); `Result status` (Text); `Show label` (Boolean, default `true`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

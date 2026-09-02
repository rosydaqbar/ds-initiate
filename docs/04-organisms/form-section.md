# Form Section

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Forms`  
**Deliverable:** one public component set named `FormSection`

## Create in Figma

Create one public component set named `FormSection`. Component-set math: Layout (2) × State (2) = 4 variants. No private helper is required.

Groups related fields under a heading, description, and optional section action.

## Layer tree

```text
FormSection [COMPONENT, vertical Auto Layout, Fill × Hug]
  SectionHeader [INSTANCE; Fill × Hug]
  Field composition slot [INSTANCE; Fill × Hug]
  Divider [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Stacked | Fill, min 320, max 800 | Hug | 0/0/0/0 | 24 | 0 | Fill × Hug |
| Two column | Fill, min 640, max 960 | Hug | 0/0/0/0 | 24 | 0 | Fill × Hug; columns gap 24 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Stacked · TwoColumn |
| `State` | Default · Disabled |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Section title` | Required |
| `Description` | Text | `Section description` | Optional |
| `Fields` | Instance swap | `Field stack` | Approved fields |
| `Show divider` | Boolean | `true` | Toggle bottom Divider |

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

TwoColumn uses equal Fill columns and switches to Stacked below 640px. Field rows use 20px gaps; related compact fields may use 12px.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Heading hierarchy follows the containing page.
- Disabled sections explain why when useful.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Form Section` component and its dependencies pass component QA, ask:

> “The Form Section component is complete. Should I build its optional designer documentation from [form-section.md](form-section.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Form Section`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `FormSection` instance using `Layout=Stacked`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Groups related fields under a heading, description, and optional section action. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show a meaningful heading and group fields that belong to one understandable subject or step. Do not use Form Section as decoration, mix unrelated inputs, or repeat actions at conflicting levels. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Stacked`, `TwoColumn`); `State` (`Default`, `Disabled`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Section title`); `Description` (Text, default `Section description`); `Fields` (Instance swap, default `Field stack`); `Show divider` (Boolean, default `true`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

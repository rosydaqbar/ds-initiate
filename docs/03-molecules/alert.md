# Alert

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Alerts`  
**Deliverable:** one public component set named `Alert`

## Create in Figma

Create one public component set named `Alert`. Component-set math: Intent (5) × Layout (2) = 10 variants. No private helper is required.

Communicates an inline status or problem without interrupting the current task.

## Layer tree

```text
Alert [COMPONENT, vertical Auto Layout, Fill × Hug]
  StatusDot or Icon [INSTANCE; Hug × Hug]
  Content frame [INSTANCE; Hug × Hug]
  CloseButton [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Default | Fill, min 320, max 640 | Hug, min 64 | 16/16/16/16 | 12 | 12 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Intent` | Neutral · Info · Success · Warning · Critical |
| `Layout` | Static · Dismissible |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Alert title` | Required summary |
| `Description` | Text | `Supporting message` | Optional detail |
| `Show action` | Boolean | `false` | Toggle Button or Link slot |
| `Action` | Instance swap | `Button/Tertiary` | Approved action |
| `Show close` | Boolean | `false` | Toggle CloseButton |

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

Dismissible layout exposes CloseButton at the top-right. Actions remain below content on Mobile and inline at widths of 480px or more.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Critical alerts include a specific recovery action when one exists.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Alert` component and its dependencies pass component QA, ask:

> “The Alert component is complete. Should I build its optional designer documentation from [alert.md](alert.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Alert`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `Alert` instance using `Intent=Neutral`, `Layout=Static`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Communicates an inline status or problem without interrupting the current task. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show Alert beside the content or task it explains, with status text and a relevant action only when needed. Do not use it for a transient confirmation or a decision that must block the user. |
| Variants and states | Build focused connected-instance comparisons for `Intent` (`Neutral`, `Info`, `Success`, `Warning`, `Critical`); `Layout` (`Static`, `Dismissible`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Alert title`); `Description` (Text, default `Supporting message`); `Show action` (Boolean, default `false`); `Action` (Instance swap, default `Button/Tertiary`); `Show close` (Boolean, default `false`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

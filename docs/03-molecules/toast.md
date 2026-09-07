# Toast

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Feedback`  
**Deliverable:** one public component set named `Toast`

## Create in Figma

Create one public component set named `Toast`. Component-set math: Intent (5) × Layout (2) = 10 variants. No private helper is required.

Confirms a short-lived result without moving focus.

## Layer tree

```text
Toast [COMPONENT, vertical Auto Layout, Fill × Hug]
  Status Icon [INSTANCE; Hug × Hug]
  Content frame [INSTANCE; Hug × Hug]
  Button or Link [INSTANCE; Hug × Hug]
  CloseButton [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Desktop | Hug, min 320, max 480 | Hug, min 56 | 12/16/12/16 | 12 | 12 | Hug × Hug |
| Mobile | Fill, min 328 | Hug, min 64 | 12/12/12/12 | 12 | 12 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Intent` | Neutral · Info · Success · Warning · Critical |
| `Layout` | Message · Action |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `Notification` | Required |
| `Description` | Text | `Message` | Optional |
| `Show action` | Boolean | `false` | Toggle action |
| `Action` | Instance swap | `Button/Tertiary` | One optional action |
| `Show close` | Boolean | `true` | Toggle dismiss |

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

Toast Region positions and times the toast. Critical or action-bearing toasts do not auto-dismiss; other timeouts pause on hover and focus.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Status is announced without stealing focus.
- Message remains understandable after it disappears.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Toast` component and its dependencies pass component QA, ask:

> “The Toast component is complete. Should I build its optional designer documentation from [toast.md](toast.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Toast`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `Toast` instance using `Intent=Neutral`, `Layout=Message`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Confirms a short-lived result without moving focus. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show a concise, short-lived outcome that does not require moving focus, with at most one recovery action. Do not use Toast for critical information, long instructions, or a decision requiring several actions. |
| Variants and states | Build focused connected-instance comparisons for `Intent` (`Neutral`, `Info`, `Success`, `Warning`, `Critical`); `Layout` (`Message`, `Action`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `Notification`); `Description` (Text, default `Message`); `Show action` (Boolean, default `false`); `Action` (Instance swap, default `Button/Tertiary`); `Show close` (Boolean, default `true`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

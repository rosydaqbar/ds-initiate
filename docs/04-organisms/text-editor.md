# Text Editor

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Editor`  
**Deliverable:** one public component set named `TextEditor`

## Create in Figma

Create one public component set named `TextEditor`. Component-set math: Toolbar (2) × State (3) = 6 variants. Create private helpers: `_TextEditor/ToolbarItem`.

Combines formatting toolbar, editable content area, status, and validation.

## Layer tree

```text
TextEditor [COMPONENT, vertical Auto Layout, Fill × Hug]
  Toolbar [INSTANCE; Fill × Hug]
  Editable content region [INSTANCE; Fill × Hug]
  Status row [INSTANCE; Fill × Hug]
  _TextEditor/ToolbarItem [PRIVATE INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Compact | Fill, min 320 | Hug, min 240 | 0/0/0/0 | 0 | 12 | Fill × Hug; toolbar 48 |
| Full | Fill, min 640 | Hug, min 320 | 0/0/0/0 | 0 | 12 | Fill × Hug; toolbar 56 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Toolbar` | Compact · Full |
| `State` | Empty · Filled · Disabled |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Placeholder` | Text | `Start writing…` | Empty prompt |
| `Content sample` | Text | `` | Documentation only |
| `Toolbar items` | Instance swap | `Formatting controls` | Approved actions |

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

Toolbar wraps into overflow rather than a second row. Content padding is 16px and minimum height 176/256. Focus is on the editable region; toolbar has independent keyboard navigation.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Formatting has semantic output and keyboard alternatives.
- Pasted content is sanitized in implementation.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Text Editor` component and its dependencies pass component QA, ask:

> “The Text Editor component is complete. Should I build its optional designer documentation from [text-editor.md](text-editor.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Text Editor`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1200px` default frame, `40px` padding, `48px` section gap, connected-instance rule, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `TextEditor` instance using `Toolbar=Compact`, `State=Empty`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Combines formatting toolbar, editable content area, status, and validation. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show only supported formatting controls, a clear editable region, and visible validation or save state. Do not use Text Editor for plain-text entry or display formatting actions that the editor cannot perform. |
| Variants and states | Build focused connected-instance comparisons for `Toolbar` (`Compact`, `Full`); `State` (`Empty`, `Filled`, `Disabled`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Placeholder` (Text, default `Start writing…`); `Content sample` (Text); `Toolbar items` (Instance swap, default `Formatting controls`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

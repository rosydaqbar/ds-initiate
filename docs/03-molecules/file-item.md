# File Item

**Atomic level:** Molecule  
**Library section:** Base Components  
**Figma page:** `Files`  
**Deliverable:** one public component set named `FileItem`

## Create in Figma

Create one public component set named `FileItem`. Component-set math: Size (2) × State (5) = 10 variants. No private helper is required.

Represents one uploaded or attached file with progress and actions.

## Layer tree

```text
FileItem [COMPONENT, vertical Auto Layout, Fill × Hug]
  Thumbnail or file Icon [INSTANCE; Hug × Hug]
  File metadata [INSTANCE; Hug × Hug]
  ProgressBar or status [INSTANCE; Hug × Hug]
  IconButton [INSTANCE; Hug × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Small | Fill, min 280 | 56 | 8/12/8/12 | 12 | 8 | Fill × Fixed; media 40 |
| Medium | Fill, min 320 | 72 | 12/16/12/16 | 16 | 8 | Fill × Fixed; media 48 |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Small · Medium |
| `State` | Uploading · Complete · Error · Selected · Disabled |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `File name` | Text | `filename.ext` | Required |
| `Metadata` | Text | `2.4 MB` | Optional |
| `Action` | Instance swap | `IconButton/Tertiary` | Contextual action |
| `Progress` | Nested variant | `50` | Upload sample |

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

Metadata frame fills and truncates file name on one line. Status/action stays fixed. Error exposes retry and remove actions.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- File type is communicated by text, not icon alone.
- Progress state retains file name.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `File Item` component and its dependencies pass component QA, ask:

> “The File Item component is complete. Should I build its optional designer documentation from [file-item.md](file-item.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / File Item`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Molecule |
| --- | --- |
| Hero preview | Place one connected `FileItem` instance using `Size=Medium`, `State=Uploading`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Represents one uploaded or attached file with progress and actions. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show filename, type or size context, progress or result, and only relevant actions. Do not communicate upload state by color alone or truncate the distinguishing part of a filename. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Small`, `Medium`); `State` (`Uploading`, `Complete`, `Error`, `Selected`, `Disabled`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `File name` (Text, default `filename.ext`); `Metadata` (Text, default `2.4 MB`); `Action` (Instance swap, default `IconButton/Tertiary`); `Progress` (Nested variant, default `50`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

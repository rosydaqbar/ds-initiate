# File Upload

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Files`  
**Deliverable:** one public component set named `FileUpload`

## Create in Figma

Create one public component set named `FileUpload`. Component-set math: Layout (2) × State (4) = 8 variants. No private helper is required.

Combines drop zone, file selection, queue, progress, errors, and uploaded items.

## Layer tree

```text
FileUpload [COMPONENT, vertical Auto Layout, Fill × Hug]
  Drop zone [INSTANCE; Fill × Hug]
  Button [INSTANCE; Fill × Hug]
  FileItem list [INSTANCE; Fill × Hug]
  Alert [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Dropzone | Fill, min 320 | Hug, min 160 | 24/24/24/24 | 16 | 12 | Fill × Hug |
| Button only | Fill, min 240 | Hug | 0/0/0/0 | 12 | 0 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Dropzone · ButtonOnly |
| `State` | Idle · Uploading · Complete · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Prompt` | Text | `Drop files here` | Instruction |
| `Accepted files` | Text | `PNG, JPG up to 10 MB` | Constraint copy |
| `Files` | Instance swap | `FileItem list` | Upload queue |

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

Drag-over changes semantic border/fill without changing dimensions. File queue has 12px gaps. Errors stay attached to the affected file and retry does not clear successful files.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Browse action is keyboard accessible.
- File type, size, and count restrictions are visible before selection.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `File Upload` component and its dependencies pass component QA, ask:

> “The File Upload component is complete. Should I build its optional designer documentation from [file-upload.md](file-upload.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / File Upload`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `FileUpload` instance using `Layout=Dropzone`, `State=Idle`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Combines drop zone, file selection, queue, progress, errors, and uploaded items. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show accepted file requirements, a browse path, queue progress, success, and actionable errors. Do not require drag-and-drop, imply completion before upload finishes, or hide why a file failed. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Dropzone`, `ButtonOnly`); `State` (`Idle`, `Uploading`, `Complete`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Prompt` (Text, default `Drop files here`); `Accepted files` (Text, default `PNG, JPG up to 10 MB`); `Files` (Instance swap, default `FileItem list`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

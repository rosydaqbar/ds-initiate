# Video Player

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Media`  
**Deliverable:** one public component set named `VideoPlayer`

## Create in Figma

Create one public component set named `VideoPlayer`. Component-set math: Layout (2) × State (5) = 10 variants. No private helper is required.

Provides video surface, controls, captions, progress, and complete playback states.

## Layer tree

```text
VideoPlayer [COMPONENT, vertical Auto Layout, Fill × Hug]
  Video surface [INSTANCE; Fill × Hug]
  Control bar [INSTANCE; Fill × Hug]
  ProgressBar [INSTANCE; Fill × Hug]
  Popover menus [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Inline | Fill, min 320, max 1280 | Auto 16:9, min 180 | 0/0/0/0 | 0 | 12 | Fill × Fixed ratio |
| Fullscreen | Fill viewport | Fill viewport | 0/0/0/0 | 0 | 0 | Fill × Fill |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Layout` | Inline · Fullscreen |
| `State` | Ready · Playing · Paused · Loading · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Poster` | Instance swap | `Media placeholder` | Poster image |
| `Title` | Text | `Video title` | Accessible label |
| `Show captions` | Boolean | `true` | Caption control availability |

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

Controls overlay bottom with 16px inset and auto-hide only during pointer playback; they remain on keyboard focus. Loading centers Spinner. Error replaces controls with recovery action.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Captions, keyboard controls, and visible focus are supported.
- Aspect ratio remains 16:9 without fractional frame dimensions.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Video Player` component and its dependencies pass component QA, ask:

> “The Video Player component is complete. Should I build its optional designer documentation from [video-player.md](video-player.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Video Player`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `VideoPlayer` instance using `Layout=Inline`, `State=Ready`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Provides video surface, controls, captions, progress, and complete playback states. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show playback controls, time, captions, focus, loading, and error recovery in their intended states. Do not autoplay audible media, hide controls from keyboard users, or present captions as optional decoration. |
| Variants and states | Build focused connected-instance comparisons for `Layout` (`Inline`, `Fullscreen`); `State` (`Ready`, `Playing`, `Paused`, `Loading`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Poster` (Instance swap, default `Media placeholder`); `Title` (Text, default `Video title`); `Show captions` (Boolean, default `true`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

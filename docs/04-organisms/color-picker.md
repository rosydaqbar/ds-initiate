# Color Picker

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Color Picker`  
**Deliverable:** one public component set named `ColorPicker`

## Create in Figma

Create one public component set named `ColorPicker`. Component-set math: Format (3) × State (3) = 9 variants. No private helper is required.

Lets users select, inspect, and enter a color in supported notations.

## Layer tree

```text
ColorPicker [COMPONENT, vertical Auto Layout, Fill × Hug]
  Color plane [INSTANCE; Fill × Hug]
  Hue slider [INSTANCE; Fill × Hug]
  Alpha slider [INSTANCE; Fill × Hug]
  ColorField list [INSTANCE; Fill × Hug]
  ButtonGroup [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Popover | 320 | Hug, min 400 | 16/16/16/16 | 16 | 12 | Fixed × Hug |
| Mobile sheet | 328 | Hug, min 440 | 16/16/16/16 | 16 | 12 | Fixed × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Format` | HEX · RGB · HSL |
| `State` | Default · Disabled · Error |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Color value` | Text | `#000000` | Current value |
| `Show alpha` | Boolean | `true` | Toggle alpha control |
| `Eyedropper` | Instance swap | `IconButton/Tertiary` | Optional platform action |

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

Color plane is 288×192 in Popover and 296×200 in Mobile sheet. Sliders are 40px high target frames. Inputs update one shared value; invalid text shows Error without discarding the last valid color.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px/2px inside borders, 1px dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Numeric fields and visible swatch communicate the selected color.
- Keyboard alternatives exist for plane and sliders.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Color Picker` component and its dependencies pass component QA, ask:

> “The Color Picker component is complete. Should I build its optional designer documentation from [color-picker.md](color-picker.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Color Picker`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `ColorPicker` instance using `Format=HEX`, `State=Default`. Confirm those selections against the finished default metadata before adding labels. Present it on a bounded viewport using the final scrim only when one is built, with enough clearance for focus, shadows, and edge placement. |
| Purpose and usage | Lets users select, inspect, and enter a color in supported notations. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show the selected swatch, readable value, supported notation, and valid input feedback together. Do not rely on visual picking alone, accept an invalid value silently, or hide the current color value. |
| Variants and states | Build focused connected-instance comparisons for `Format` (`HEX`, `RGB`, `HSL`); `State` (`Default`, `Disabled`, `Error`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Color value` (Text, default `#000000`); `Show alpha` (Boolean, default `true`); `Eyedropper` (Instance swap, default `IconButton/Tertiary`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit a capability section only when the approved scope explicitly excludes it. Missing required capabilities must be completed before documenting the component as ready. Document every approved public property, option, size, state and supported appearance under the shared documentation contract; representative examples do not replace the complete reference. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

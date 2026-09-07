# Executable Component Specification Format

Copy this file for every Atom, Molecule, or Organism. Replace every bracketed value; unresolved placeholders block component construction.

````markdown
# [Component name]

**Atomic level:** [Atom / Molecule / Organism]  
**Library section:** [Foundations / Base Components / Components]  
**Figma page:** `[Page name]`  
**Deliverable:** [one component / one component set / named component sets plus private helpers]

## Create in Figma

- Create `[exact public component or set name]`.
- Create private `[exact helper name]` for [independent responsibility].
- Component-set math: `[axis count] × [axis count] = [total]` variants.

## Layer tree

```text
[Component]
  [Layer: type and resizing]
    [Child: type and resizing]
```

## Exact construction

| Size/region | Width | Height | Padding | Gap | Radius | Resizing |
| --- | ---: | ---: | --- | --- | ---: | --- |
| [value] | [value] | [value] | [T/R/B/L] | [value] | [value] | [Hug/Fill/Fixed] |

## Variants and properties

| Name | Type | Values/default | Purpose |
| --- | --- | --- | --- |
| [property] | [Variant/Text/Boolean/Instance swap] | [values] | [consumer edit] |

## Variable and Style bindings

| Layer/property | Binding |
| --- | --- |
| [property] | [semantic variable or Style] |

## Prototype behavior

[Exact Change to, overlay, hover, press, keyboard, and disabled behavior.]

## Responsive behavior

[Exact resizing or replacement at 360, 768, and 1440 example frames.]

## QA

- [Exact variant count]
- [Exact pixel measurements]
- [4px grid checks and controlled exceptions]
- [Accessibility and content stress tests]

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After component QA passes, ask:

> “The [Component name] component is complete. Should I build its optional designer documentation from [[filename].md]([filename].md)?”

If approved, re-inspect the final component metadata and screenshot, then create or update `Documentation / [Component name]` using [Optional Component Documentation](optional-component-documentation.md).

The recipe table below is an internal build instruction. Convert each row into visible headings, short explanations, and annotated connected-instance examples. Never reproduce the table or the complete component-set matrix in Figma. Every displayed style, size, state, and editable option needs a visible label and a sentence explaining when or why to choose it.

### Adaptive content recipe

| Documentation area | Build from the finished component |
| --- | --- |
| Hero preview | [Exact recommended instance and the rule for choosing its final values] |
| Purpose and usage | [When to use and when not to use the component] |
| Variants and properties | [Actual styles, sizes, states, text properties, booleans, and instance swaps that designers need to choose] |
| Anatomy and dimensions | [Public parts, complete size measurements, Text Styles, target geometry and resizing limits] |
| Appearance modes | [Connected specimens in each supported mode and material state/style differences] |
| Do and don't | [Component-specific correct and incorrect applications using connected instances; name the exact decision each example teaches] |
| Accessibility status | State the design checks actually performed, relevant pairing results and remaining implementation checks under the shared [Accessibility contract](../01-foundations/accessibility.md). Keep raw test logs internal; do not infer full WCAG conformance from Figma. |

Omit only capabilities explicitly outside the approved scope; a required capability missing from the component must be fixed before documentation is accepted. Show public anatomy, dimensions, complete property options and actual state/appearance behavior. Keep private bindings, multiplication tables, internal IDs and raw QA logs outside the guide. Build the guide as an editorial sequence, not a specimen dashboard.
````

The shared rules in [Figma Construction Standard](figma-construction-standard.md) apply even when they are not repeated in an item file.

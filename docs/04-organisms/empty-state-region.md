# Empty State Region

**Atomic level:** Organism  
**Library section:** Components  
**Figma page:** `Feedback`  
**Deliverable:** one public component set named `EmptyStateRegion`

## Create in Figma

Create one public component set named `EmptyStateRegion`. Component-set math: Size (2) × Reason (3) = 6 variants. No private helper is required.

Places Empty State within a bounded product region with correct sizing and context.

## Layer tree

```text
EmptyStateRegion [COMPONENT, vertical Auto Layout, Fill × Hug]
  SectionHeader [INSTANCE; Fill × Hug]
  EmptyState [INSTANCE; Fill × Hug]
```

Keep the listed order in the Layers panel. Use absolute positioning only when the behavior section explicitly requires it.

## Exact construction

| Context | Width | Height | Padding (T/R/B/L) | Gap | Radius | Alignment and resizing |
| --- | --- | --- | --- | ---: | ---: | --- |
| Compact | Fill, min 320 | Hug, min 240 | 32/32/32/32 | 24 | 12 | Fill × Hug |
| Full | Fill, min 640 | Hug, min 400 | 64/40/64/40 | 32 | 12 | Fill × Hug |

Bind every supported number to its matching Spacing, Sizing, Radius, Border, or Layout variable. All structural measurements are whole-number multiples of 4.

## Variants

| Axis | Values |
| --- | --- |
| `Size` | Compact · Full |
| `Reason` | NoData · NoResults · NoPermission |

Do not turn editable text, icon choice, or optional content into variants.

## Component properties

| Property | Type | Default | Consumer control |
| --- | --- | --- | --- |
| `Title` | Text | `No content` | Reason-specific copy |
| `Description` | Text | `Supporting explanation` | Reason-specific copy |
| `Action` | Instance swap | `Button/Primary` | Optional recovery |

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

No Results preserves active filters above the region and offers clear filters. No Permission does not expose creation actions. Region grows with content.

## 4px and accessibility QA

- The variant count matches the calculation above and no component set exceeds 30 variants.
- X, Y, W, H, padding, gap, and finite radius values are divisible by 4 with no fractional coordinates.
- Only 1px borders/dividers, approved icon strokes, vector optics, shadows, and pill rendering may be off-grid.
- Every visual property is bound to a semantic variable or approved Style.
- Text expansion to 200% does not clip or overlap adjacent content.
- Reason and recovery are accurate for the product state.

## Optional documentation landing frame

**Build status:** Optional. Do not create during the component build.

After the `Empty State Region` component and its dependencies pass component QA, ask:

> “The Empty State Region component is complete. Should I build its optional designer documentation from [empty-state-region.md](empty-state-region.md)?”

If the user approves, inspect the final component metadata and screenshot again, then create or update the regular frame `Documentation / Empty State Region`. Follow [Optional Component Documentation](../06-governance/optional-component-documentation.md) for the `1600px` editorial frame, centered reading column, annotated connected-instance examples, adaptive sections, and documentation QA.

The values below are selection targets from this specification, not static documentation data. The finished Figma component is the source of truth for displayed names, counts, values, measurements, and bindings. Treat the recipe table as internal build instructions: convert each row into visible headings, explanatory paragraphs, and focused connected-instance examples; never reproduce the table in Figma. Every displayed style, size, state, and editable option needs a visible label and one sentence explaining when or why a designer would choose it.

### Adaptive content recipe

| Documentation area | Build from the finished Organism |
| --- | --- |
| Hero preview | Place one connected `EmptyStateRegion` instance using `Size=Compact`, `Reason=NoData`. Confirm those selections against the finished default metadata before adding labels. Present it on the normal semantic surface with at least `24px` specimen padding. |
| Purpose and usage | Places Empty State within a bounded product region with correct sizing and context. Explain when to use it and when another component is more suitable, using only capabilities present in the finished component. |
| Do and don't | Show Empty State within the exact region whose content is absent and size it to that context. Do not expand it into an unrelated full-screen message or use it for loading or failure. |
| Variants and states | Build focused connected-instance comparisons for `Size` (`Compact`, `Full`); `Reason` (`NoData`, `NoResults`, `NoPermission`). Use a full matrix only when each combination teaches a distinct visual or behavioral rule. |
| Properties | Demonstrate the finished editable API: `Title` (Text, default `No content`); `Description` (Text, default `Supporting explanation`); `Action` (Instance swap, default `Button/Primary`). Use paired live instances for meaningful boolean changes and only approved connected replacements for instance swaps. |
| Accessibility status | Show `✓ WCAG 2.2 AA checked` after internal QA, plus any remaining responsibility for the consuming designer. Do not show ratios or test output. |

Omit any section whose capability does not exist in the finished component. Never add or detach a component merely to complete the landing frame.

Shared construction rules: [Figma Construction Standard](../06-governance/figma-construction-standard.md).

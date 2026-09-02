# Grid and Layout

**Library section:** Foundations

## Figma build

Create three layout frames and apply these exact column grids:

| Breakpoint example | Frame | Columns | Margin | Gutter | Content behavior |
| --- | ---: | ---: | ---: | ---: | --- |
| Mobile | 360 | 4 | 20 | 16 | Fluid; derived column width `68px` |
| Tablet | 768 | 8 | 28 | 24 | Fluid; derived column width `68px` |
| Desktop | 1440 | 12 | 84 | 24 | Maximum content width `1272px`; derived column width `84px` |

All declared values and derived column widths are divisible by 4. Use `Stretch` columns. A navigation layout may reserve a `256px` sidebar and `64px` header. Full-width content sections use a centered `1200px` content container when that narrower measure is appropriate.

Define each responsive change as one of: reflow, stack, collapse, horizontal scroll, or component replacement. Create a separate frame for each breakpoint; do not simulate responsiveness by manually moving layers in one frame.

## Required examples

- Actual Mobile, Tablet, and Desktop column grids
- Margin, gutter, column, and maximum-width measurements
- Neutral reflow, stack, collapse, horizontal-scroll, and replacement diagrams

Do not create product pages or business-specific screens to document this Foundation.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Create `Grid and Layout Guide` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Place the `360px`, `768px`, and `1440px` examples at actual size with their Figma layout grids enabled. Explain margins, gutters, columns, maximum content width, and the supported responsive changes: reflow, stack, collapse, horizontal scroll, and component replacement. Add do-and-don't examples for responsive choice and alignment. Do not display metadata or audit results. Expand the guide when needed rather than scaling examples, and verify all measurements internally.

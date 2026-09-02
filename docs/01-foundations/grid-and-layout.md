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

Build one regular frame named `Documentation / Grid and Layout` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Use the shared `1600px` width so the desktop specimen can be shown at actual size with surrounding labels.

### Required visible structure and copy

```text
Documentation / Grid and Layout
  Header
    Grid and layout
    Layout grids align content and define how compositions adapt across available space.
  Overview
  Breakpoint examples
    Mobile
    Tablet
    Desktop
  Responsive behaviors
    Reflow
    Stack
    Collapse
    Horizontal scroll
    Component replacement
  Do and don't
  Accessibility
```

Use this overview copy: `Choose the layout example closest to the available width, align content to its columns, and define an intentional behavior when space changes. Breakpoint examples guide layout decisions; they are not product screens.`

Show all three frames at actual size with their Figma layout grids enabled. Place a visible specification block above each frame:

| Name | Required visible specification | Required usage sentence |
| --- | --- | --- |
| Mobile | `360px frame · 4 columns · 20px margin · 16px gutter · 68px column` | `Use for narrow, single-column compositions with compact margins.` |
| Tablet | `768px frame · 8 columns · 28px margin · 24px gutter · 68px column` | `Use when content can reflow into more columns without becoming a desktop composition.` |
| Desktop | `1440px frame · 12 columns · 84px margin · 24px gutter · 84px column · 1272px maximum content` | `Use for wide compositions that benefit from a stable maximum content width.` |

Annotate margins, one gutter, one column, and content bounds directly on every specimen. Do not rely on the grid overlay alone to communicate the values.

Create five neutral `224×200px` responsive-behavior examples inside one annotated block. Each example shows Before and After geometry plus this copy:

| Behavior | Required explanation |
| --- | --- |
| Reflow | `Items keep their importance but move into a new arrangement.` |
| Stack | `Side-by-side items become a vertical sequence.` |
| Collapse | `Secondary content is hidden behind a clear control.` |
| Horizontal scroll | `A continuous ordered set stays intact and becomes horizontally scrollable.` |
| Component replacement | `A component is replaced by a purpose-built compact alternative.` |

Create these comparisons:

- Do: `Align related content to shared columns and content bounds.`
- Don't: `Do not introduce unrelated left edges or one-off gutters.`
- Do: `Choose the responsive behavior that preserves task priority.`
- Don't: `Do not shrink every element until it fits.`

Finish with: `Layout changes must preserve reading order, focus order, and usable target sizes.` Add `✓ WCAG 2.2 AA checked` only after the related checks pass.

Do not display metadata or audit output. The guide fails QA if any breakpoint omits its measurements or any responsive example omits its written behavior.

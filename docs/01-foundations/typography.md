# Typography

**Library section:** Foundations

## Required input

Approved interface, display, and monospace typefaces; available weights; licenses; preferred density and heading character.

## Create in Figma

After the approved fonts and available weights are confirmed, create these Text Styles. All font sizes and line heights use the 4px construction rhythm.

| Style | Size/line height | Default weight | Use |
| --- | --- | --- | --- |
| `Display/Large` | 64/72 | Bold | Major display statement |
| `Display/Medium` | 48/56 | Bold | Secondary display heading |
| `Display/Small` | 40/48 | Bold | Compact display heading |
| `Heading/1` | 36/44 | Bold | Page title |
| `Heading/2` | 32/40 | Semibold | Major section |
| `Heading/3` | 28/36 | Semibold | Section |
| `Heading/4` | 24/32 | Semibold | Subsection |
| `Heading/5` | 20/28 | Semibold | Small heading |
| `Heading/6` | 16/24 | Semibold | Compact heading |
| `Body/Large` | 20/28 | Regular | Introductory copy |
| `Body/Medium` | 16/24 | Regular | Default content |
| `Body/Small` | 12/16 | Regular | Supporting content |
| `Label/Medium` | 16/24 | Semibold | Controls and form labels |
| `Label/Small` | 12/16 | Semibold | Compact controls |
| `Code/Medium` | 16/24 | Regular mono | Code and technical values |
| `Code/Small` | 12/16 | Regular mono | Compact code and shortcuts |

Use `0px` letter spacing initially. Any non-zero optical adjustment is a typography exception documented against the font, never a local component override.

Build a `Typography Guide` frame at `1200px` width with `40px` padding and `24px` gaps. Show the approved styles in the content situations for which designers should use them.

## Validation

- All styles load successfully in Figma.
- Long labels, localization expansion, numbers, and dense data are tested.
- Text remains readable at minimum supported sizes.
- Every text layer in a component is connected to one of these styles.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build `Typography Guide` in the same workflow as the Text Styles using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Group styles by Display, Heading, Body, Label, and Code; show each with a realistic usage example and the size information needed to choose it. Add do-and-don't examples for hierarchy, line length, wrapping, and emphasis. Include long text, numbers, punctuation, and each approved script as usage examples, not as a validation report. Do not show code syntax, metadata, or font-loading results. Verify Style connections and clipping internally.

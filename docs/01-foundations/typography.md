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

Build `Documentation / Typography` with the shared `1600px` editorial frame. Show the approved styles in the content situations for which designers should use them.

## Validation

- All styles load successfully in Figma.
- Long labels, localization expansion, numbers, and dense data are tested.
- Text remains readable at minimum supported sizes.
- Every text layer in a component is connected to one of these styles.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Typography` in the same workflow as the Text Styles. Use [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

### Required visible structure and copy

```text
Documentation / Typography
  Header
    Typography
    Typography creates readable hierarchy and gives written content a consistent voice.
  Overview
  Font families
  Type styles
    Display
    Heading
    Body
    Label
    Code
  Applying hierarchy
  Wrapping and emphasis
  Do and don't
  Accessibility
```

Use this overview copy: `Choose a Text Style for the purpose of the content, not only for its visual size. Consistent styles make hierarchy predictable and allow typography to change safely across the system.`

Create one annotated font-family example for each approved family. Show the family name, approved role (`Interface`, `Display`, or `Monospace`), licensed weights, and a complete uppercase, lowercase, numeral, and punctuation sample. Do not invent an unavailable weight.

Create a complete Text Style reference grouped by Display, Heading, Body, Label and Code. Include EVERY approved and implemented style, with one row per style; do not collapse different weights or sizes into one representative sample. An approved scope change may remove a family, but a missing implementation is not an exclusion. Each row contains:

1. Familiar style name.
2. Realistic sample text rendered with the actual Text Style.
3. A specification line showing `{family} · {weight}` and `{size}px / {line height}px`.
4. Letter spacing, casing and decoration, including explicit zero/none values.
5. One complete sentence explaining when to use this style and when to choose an adjacent level.
6. Every approved responsive or script-specific variation, labeled with its applicable width or language.

Use a 1440px table with 240px Name, 480px actual-size Sample, 400px Specification and 320px Usage columns. Use 16px cell padding and Hug rows; expand the sample region when long display text needs more space. Show exact searchable Text Style names and put the same purpose in native Style descriptions.

Use these sample patterns:

- Display: `A clear statement with strong presence`
- Heading: `A heading that identifies the section`
- Body: `Body text explains information in complete, readable sentences.`
- Label: `Action label`
- Code: `Order ID: 4820-A7`

Create an `Applying hierarchy` example containing one Heading, one Body, and one Label style. Label every style and add: `Use fewer levels in one composition so the hierarchy remains clear.`

Create a `Wrapping and emphasis` section with a `480px` short-copy column and a `480px` long-copy column. Include numbers, punctuation, and every approved script. Explain: `Body and supporting text wrap. Control labels remain concise and must not be reduced below the approved style to make them fit.`

Create these comparisons:

- Do: `Use Text Styles to create a clear, limited hierarchy.`
- Don't: `Do not use size or weight changes without a defined content purpose.`
- Do: `Allow body and supporting text to wrap naturally.`
- Don't: `Do not shrink text or clip essential content to preserve a fixed height.`

Finish with: `Use the approved minimum text sizes and preserve readability during text expansion.` Report the design checks actually performed and the remaining implementation checks under [Accessibility](accessibility.md).

The visible reference, native Text Styles and approved scope must contain the same style names and values. Native panels supplement the guide. Do not show internal IDs or font-loading logs. The guide fails QA if any approved style or required field is absent, if a sample does not use its named Style, or if one Body sample replaces the full hierarchy.

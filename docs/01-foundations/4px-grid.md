# 4px Construction Grid

**Library section:** Foundations  
**Figma deliverable:** `4px Grid Guide` plus the required variables in `Spacing`, `Sizing`, `Radius`, `Border`, and `Layout`

## Rule

Every structural measurement must be divisible by 4. This includes frame positions, widths, heights, minimum sizes, padding, gaps, grid margins, gutters, corner radii, icon bounding boxes, image ratios, and focus-ring width.

Use whole-number pixels only. Do not place production layers at fractional X or Y coordinates.

## Internal construction exceptions

The grid controls geometry, not raster detail. These are the only default exceptions:

- `1px` borders and dividers may be used when their parent frame remains on the 4px grid.
- Approved icon paths may use `1.5px` or `2px` strokes inside a 4px-based bounding box.
- Vector points may use fractional coordinates when required for optical centering; the vector frame itself must remain on the grid.
- Shadows may use off-grid blur or spread values because they do not affect layout bounds. Shadow values must come from an Effect Style.

Any other exception requires a note in the component file and design-system review.

## Shared variables

Create these `FLOAT` variables in `Spacing` and limit their scopes to layout properties where Figma supports it.

| Variable | Value | Intended use |
| --- | ---: | --- |
| `spacing/0` | 0 | Reset |
| `spacing/4` | 4 | Tight inset or gap |
| `spacing/8` | 8 | Compact component gap |
| `spacing/12` | 12 | Small horizontal padding |
| `spacing/16` | 16 | Default component padding |
| `spacing/20` | 20 | Large control padding |
| `spacing/24` | 24 | Section gap or gutter |
| `spacing/32` | 32 | Container padding |
| `spacing/40` | 40 | Documentation frame padding |
| `spacing/48` | 48 | Large section gap |
| `spacing/64` | 64 | Section separation |
| `spacing/80` | 80 | Large desktop margin |
| `spacing/96` | 96 | Display spacing |

Create the component-size variables in `Sizing`: `size/control/32`, `size/control/40`, `size/control/48`, `size/control/56`, `size/icon/16`, `size/icon/20`, `size/icon/24`, `size/icon/32`, and `size/target/minimum = 44`.

Create role-based corner variables in `Radius` and stroke widths in `Border`; follow [Radius](radius.md) and [Borders](borders.md). `radius/pill = 9999` is a Figma rendering instruction rather than a layout measurement.

## Figma setup

1. Turn on a square layout grid with `Size = 4` for every component construction frame.
2. Set grid color to a low-contrast semantic guide color and keep it hidden in published examples.
3. Position documentation frames at X and Y values divisible by 4.
4. Build with Auto Layout; do not use manual offsets for ordinary alignment.
5. Bind every padding, gap, width, height, and radius that Figma supports to its specific shared collection.

## QA

- Inspect X, Y, W, H, padding, gap, and radius for every production layer.
- Confirm every structural number has remainder `0` when divided by `4`.
- Confirm exceptions are limited to strokes, vector-path optics, shadows, and `radius/pill`.
- Confirm no detached instance introduces an untracked measurement.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / 4px Grid` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

### Required visible structure and copy

```text
Documentation / 4px Grid
  Header
    4px construction grid
    A shared 4px rhythm keeps layout, spacing, sizing, and alignment consistent across the system.
  Overview
    How the grid works
    Common measurements
  Applying the grid
    Padding
    Gap
    Size and alignment
    Touch targets
    Focus treatment
  Do and don't
  Accessibility
```

Use this overview copy: `Start every structural measurement with a multiple of 4. Components may combine these measurements, but their frames, padding, gaps, and positions must remain on the same rhythm.`

Create two bound grid specimens:

- `Basic grid` — `160×160px`, square grid size `4px`, with the caption `Each square represents 4px.`
- `Composition grid` — `320×160px`, square grid size `4px`, containing aligned `32px`, `48px`, and `64px` shapes with the caption `Different sizes align because each dimension uses the same 4px rhythm.`

Create five `224px`-wide usage examples in one annotated block. Every example must show its title, measurement labels, and this usage sentence:

| Card | Required visual | Required usage sentence |
| --- | --- | --- |
| Padding | A `160×96px` frame with `16px` inset measurement | `Use padding to create consistent space between a container and its content.` |
| Gap | Three `32×32px` items with `8px` and `16px` gap measurements | `Use gap to control space between sibling items in Auto Layout.` |
| Size and alignment | Two grid-aligned shapes with visible width and height labels | `Keep frame position, width, and height on whole multiples of 4.` |
| Touch target | A `32px` visible control centered in a `44×44px` target | `A small visible control can use a larger invisible interaction target.` |
| Focus treatment | A `48×48px` target with a visible `4px` outer focus ring | `Focus treatment must remain visible without changing layout size.` |

Create one comparison row:

- Do: `Align frames, padding, and gaps to the 4px grid.` Show aligned edges and measurement labels.
- Don't: `Do not introduce one-off structural measurements.` Show an intentionally incorrect `18px` gap and `30px` height, labeled as incorrect.

Finish with: `The 4px grid supports predictable spacing and sufficiently sized controls.` Add `✓ WCAG 2.2 AA checked` only after the related accessibility checks pass.

Do not show the complete spacing-variable inventory, audit output, or rendering-exception report. The guide fails QA if any visual measurement is unlabeled or the correct and incorrect examples lack their written instruction.

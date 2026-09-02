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

Create or update `4px Grid Guide` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Show a 4px grid overlay on `160×160px` and `320×160px` examples, then demonstrate common padding, gap, alignment, target-size, and focus-ring decisions. Add focused do-and-don't examples for aligned and off-grid layout. Do not show an implemented-variable inventory, audit output, or rendering-exception report in the Figma guide. Verify all geometry internally before completion.

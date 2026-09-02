# Illustration and Imagery

**Library section:** Shared Assets

## Required input

Approved photography, illustration, product mockup, avatar, and background treatment.

## Create in Figma

Create media placeholder components with these exact 4px-based frames:

| Ratio | Desktop example | Mobile example | Default crop |
| --- | ---: | ---: | --- |
| Square | 320×320 | 328×328 | Fill |
| 4:3 landscape | 640×480 | 328×248 | Fill; Mobile height rounded to grid |
| 16:9 landscape | 640×360 | 320×180 | Fill |
| 3:4 portrait | 320×428 | 240×320 | Fill; Desktop height rounded to grid |
| Product frame | 1200×676 | 328×184 | Fit or approved crop |

Bind media radius to `radius/media`. Use Thumbnail for compact product content and an organism media slot for large content sections. Missing media uses a semantic placeholder with a centered Icon; it never collapses the reserved frame.

Record source, license, usage scope, crop focal point, alt text, and whether the asset is decorative beside every approved asset.

Decorative media remains separate from functional interface components.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Create `Imagery Guidelines` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Show approved photography and illustration treatments, crop ratios, focal-point placement, missing-media treatment, and do-and-don't examples. Use the example sizes above and expand the root to `1280px` when a `1200px` specimen is shown at actual size. Keep approved assets connected. Place source, permitted use, alt text, and decorative status in a Hug-height caption where designers need that information. Do not invent imagery when required assets are missing, and do not display validation output.

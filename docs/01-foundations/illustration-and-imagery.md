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

Build one regular frame named `Documentation / Illustration and Imagery` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Expand the root to the next multiple of 4 when an actual-size specimen requires more than the standard content width. Do not invent imagery when approved assets are missing.

### Required visible structure and copy

```text
Documentation / Illustration and Imagery
  Header
    Illustration and imagery
    Imagery supports meaning, product understanding, and the approved visual character.
  Overview
  Complete treatment and ratio reference
  Approved treatments
  Ratios and crops
  Focal points
  Missing media
  Asset information
  Do and don't
  Accessibility
```

Use this overview copy: `Choose an approved image or illustration treatment for the content's purpose. Preserve the subject, intended focal point, crop behavior, source rights, and accessibility information.`

Create one treatment section for each approved category: `Photography`, `Illustration`, `Product mockup`, `Avatar`, and `Background`. For every included category, show at least one approved asset at its intended size with a visible treatment name and two-to-four-sentence description of subject, lighting, color, composition, and when to use it.

Create actual-size ratio specimens from the table in `Create in Figma`. Above each specimen show the ratio name and pixel dimensions. Beneath it show `Default crop`, `Common use`, and one crop instruction. Do not use an unlabeled placeholder rectangle as a ratio specimen.

Create a focal-point comparison using the same connected asset in two frames:

- Do: `Keep the important subject inside the safe crop area.` Show and label the approved focal point.
- Don't: `Do not crop through the important subject or remove necessary context.`

Create a `Missing media` specimen at `320×180px` using the semantic placeholder treatment, centered approved icon, title `Image unavailable`, and supporting copy `The reserved media area remains stable when the asset cannot load.`

List EVERY approved treatment, ratio and reusable reference asset in the visible reference, with its exact searchable name, dimensions and usage. Every asset specimen includes a visible Hug-height information block with `Asset name`, `Source`, `Permitted use`, `Crop focal point`, `Alt text`, and `Decorative: Yes/No`. Runtime content images need not be exhaustively cataloged; every reusable treatment and approved reference asset does. Retain actual source/license credits and do not replace missing information with invented text.

Add these comparisons:

- Do: `Use imagery with a clear content purpose and approved treatment.` / Don't: `Do not add generic decoration unrelated to the content.`
- Do: `Preserve the approved aspect ratio and focal point.` / Don't: `Do not stretch an image or use an arbitrary crop.`
- Do: `Provide useful alt text for meaningful imagery.` / Don't: `Do not describe decorative imagery to assistive technology.`

Finish with the alt-text, contrast and crop checks actually performed, and list remaining implementation checks under [Accessibility](accessibility.md).

Do not show validation output. The guide fails QA when an asset lacks its treatment explanation or required source, usage, crop, and accessibility information.

# Logos

**Library section:** Foundations and Shared Assets

## Required assets

Vector mark, wordmark, horizontal and stacked lockups, light and dark versions, minimum size, clear-space rules, and misuse examples.

## Create in Figma

- Create `Logo` as the component set described in [Logo](../02-atoms/logo.md): `Lockup = Symbol | Wordmark | Horizontal` and `Appearance = Default | Inverse | Monochrome`.
- Use `32px` visible height for the default header lockup and include `8px` clear space on every side inside the component bounds.
- Create product, partner, and app-icon assets as separate named components; never add unrelated logos as Logo variants.
- Preserve vector proportions. Width uses Hug contents; height is fixed to the approved master size.
- Use only the approved brand's identity assets. Additional brands require separate approved scope and asset ownership; do not preconfigure generic logo choices, detach instances, or recolor local copies.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Logo` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Missing required identity assets remain a blocker.

### Required visible structure and copy

```text
Documentation / Logo
  Header
    Logo
    The logo identifies the approved brand and must remain consistent, legible, and undistorted.
  Overview
  Approved lockups
  Appearances and backgrounds
  Minimum size
  Clear space
  Do and don't
  Accessibility
```

Use this overview copy: `Use the lockup that fits the available space while preserving the approved artwork, proportions, minimum size, and clear space.`

Show EVERY approved lockup and appearance combination. Use a permission matrix to identify unavailable combinations without manufacturing artwork for them. Each permitted combination receives a connected instance and individual specification. Each specimen container uses at least `24px` padding and expands to preserve the asset's proportions. Beneath each instance, show:

- Familiar asset name: `Symbol`, `Wordmark`, `Horizontal`, or the approved lockup name.
- Appearance: `Default`, `Inverse`, or `Monochrome`.
- Approved use: one sentence describing the appropriate placement.

Create a `Minimum size` section for EVERY approved lockup. Annotate the actual approved width and height in pixels and add: `Do not reproduce this lockup below the labeled size.` Show the complete asset specifications visibly and mirror the usage and restrictions in native component descriptions.

Create a `Clear space` section for each distinct lockup rule with a connected instance surrounded by its measured exclusion area. Show the actual clear-space value or approved logo-derived unit on all four sides and add: `Keep text, imagery, and other marks outside this area.`

Create a background matrix for `Light`, `Dark`, `Brand`, and `Image` only when each background is approved. Label the required logo appearance for every permitted example. Mark an unapproved combination as `Do not use` rather than recoloring the logo.

Create these comparisons:

- Do: `Use an approved connected logo asset.` / Don't: `Do not redraw or detach the logo.`
- Do: `Preserve the original proportions.` / Don't: `Do not stretch, compress, rotate, or rearrange the artwork.`
- Do: `Use the approved appearance for the background.` / Don't: `Do not recolor the logo to create a new variation.`
- Do: `Preserve the required clear space.` / Don't: `Do not place content inside the exclusion area.`

Finish with: `Choose a logo appearance that remains clearly visible against its background.` Report the design checks actually performed and the remaining implementation checks under [Accessibility](accessibility.md).

Do not show node IDs or connection reports. The guide fails QA when a specimen omits its lockup name, appearance, permitted use, minimum size, or clear-space guidance. This guide does not authorize the optional [Logo component landing frame](../02-atoms/logo.md).

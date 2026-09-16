# Discovery Brief Format

This brief records **project-specific input** for one generated design system. It must never be copied back into the reusable repository as a default. See [Project Data Boundary](../06-governance/project-data-boundary.md).

Use exact values where known. Mark unresolved implementation values as `BLOCKED` or `REQUIRES APPROVAL`.

## Brand and product

- Brand:
- Product:
- Product description:
- Audience:
- Platforms:
- Top user tasks:

## Approved visual direction

- Primary colors:
- Secondary/accent colors:
- Neutral direction or supplied neutral palette:
- Interface typeface and numeric weights:
- Display typeface and numeric weights:
- Monospace typeface and numeric weights:
- Personality traits to emphasize:
- Traits to avoid:
- Intended impression:
- Control radius:
- Surface radius:
- Control height:
- Density:
- Surface treatment:
- Border treatment:
- Shadow/elevation treatment:
- Overlay treatment:
- Icon treatment:
- Imagery/illustration treatment:
- Motion treatment:

## Requirements

- Appearance modes:
- Accessibility target:
- Keyboard requirements:
- Reduced-motion requirements:
- Minimum text size:
- Languages:
- RTL requirement:
- Product voice/content rules:

## First release

- Components in priority order:
- Explicit exclusions:
- Milestone/scope boundary:

## Deterministic project-resolution record

For every project-sensitive value that downstream generation may consume, record one of:

- `APPROVED — {exact value}`
- `PRODUCTION SOURCE — {exact asset/token/file}`
- `REQUIRES APPROVAL — {specific missing value}`
- `BLOCKED — {specific conflict or unavailable input}`
- `NOT APPLICABLE — {reason}`

Record at minimum:

- brand/product identity;
- color anchors;
- complete supplied palette values;
- missing palette families/steps requiring proposal;
- semantic color contract and supported modes;
- primary/display/mono typefaces and available numeric weights;
- type density/casing;
- control/surface radius and default control height;
- surface/border/elevation/overlay treatment;
- icon/imagery/motion treatment;
- accessibility/language/content requirements;
- first-release component inventory;
- production tokens/assets to preserve;
- explicit departures from repository defaults.

Discovery approval authorizes only entries marked `APPROVED` or `PRODUCTION SOURCE`.

## Approved Foundation inventory

- Palette families and exact shade steps; base and alpha colors:
- Semantic roles and required appearance modes:
- Text Styles and available weights:
- Spacing scale:
- Shared size scale:
- Radius roles:
- Border roles:
- Effect Styles and exact layers:
- Motion duration/easing roles and reduced-motion behavior:
- Layout names, ranges, columns, gutters, margins, and containers:
- Icon reference assets/treatments:
- Logo assets/treatments:
- Media/illustration assets/treatments:
- Explicit exclusions/departures with reason and decision owner:

## Approved inputs

- Brand assets:
- Production tokens/theme files:
- Existing Figma library:
- Reference Figma/screenshots used only as structural evidence:
- Conflict owner:

## Approval

- Decision owner:
- Approval date:
- Approved scope:
- Remaining `REQUIRES APPROVAL` items:
- Remaining `BLOCKED` items:

Do not start a dependent Figma build while a required project-sensitive value remains unresolved.
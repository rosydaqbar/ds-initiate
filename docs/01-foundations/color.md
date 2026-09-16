# Color

**Library section:** Foundations

## Required input

Approved brand and supporting colors, neutral and feedback directions, appearance modes, accessibility target, and any production tokens to preserve. Values are populated only after Discovery approval. Preserve an approved catalog; document any explicit departures from the default contract.

## Raw colors

Create approved raw families in `Primitives`. The default ramp steps are `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950`.

- `color/brand/{step}` and `color/neutral/{step}`.
- `color/secondary/{step}` when an independent secondary family is approved.
- `color/red/{step}`, `color/green/{step}`, `color/yellow/{step}` and `color/blue/{step}` for approved feedback source families.
- `color/white`, `color/black`, `color/transparent` and approved alpha values.

Family names and steps describe raw color, never actions such as hover or pressed. Do not create a second identical ramp when the brand already uses an approved source family; preserve a named source relationship. Document every approved shade, including values unused by current components. Missing shades in the approved scope cannot be hidden by documenting only those that were created.

Raw hex values do not imply UI permission or contrast eligibility. Populate each variable's description with its family/step and approved role mappings, or explicitly say that it is reserved and has no current semantic mapping. Keep raw variables hidden from normal component property scopes.

## Global semantic colors

Create these roles in `Color`, with independently resolved `Light` and `Dark` aliases to `Primitives`. Each row below supplies the purpose for both the visible reference and native variable description. Additional approved roles must meet the same documentation contract. Optional visited-link behavior may be marked out of scope explicitly.

| Group | Exact token | Purpose and usage |
| --- | --- | --- |
| Background | `color/background/canvas` | Base area behind the interface; use around content regions, not as a substitute for elevated surfaces. |
| Background | `color/background/transparent` | No visible surface fill for text-like or unfilled controls; underlying content remains visible, so evaluate foreground contrast against that actual surface. |
| Background | `color/background/surface` | Default content surface for panels and containers; pair with primary and secondary content roles. |
| Background | `color/background/subtle` | Low-emphasis grouping surface; use to distinguish related content without implying selection. |
| Background | `color/background/strong` | Emphasized neutral surface; verify its content pairing rather than assuming primary text works. |
| Background | `color/background/inverse` | Contrasting surface for inverse content; pair with inverse text and icons. |
| Background | `color/background/disabled` | Unavailable neutral control background; do not use for active content. |
| Background | `color/background/overlay` | Translucent backdrop behind temporary content; document alpha and the underlying canvas. |
| Background | `color/background/selected` | Persistent selected-item background; combine with a label, mark or shape and distinguish it from hover. |
| Background | `color/background/selected-hover` | Pointer-hover background for an already selected item; retain the selection cue. |
| Brand actions | `color/background/brand/default` | Primary action background; pair with on-brand content. |
| Brand actions | `color/background/brand/hover` | Pointer-hover background for primary actions; preserve layout and validate the foreground pairing. |
| Brand actions | `color/background/brand/pressed` | Background while a primary action is actively pressed; do not use for persistent selection. |
| Brand actions | `color/background/brand/disabled` | Unavailable primary action background; pair with disabled text and icon roles and remove activation. |
| Destructive actions | `color/background/danger/default` | Destructive action background; pair with on-danger content, not error-message content. |
| Destructive actions | `color/background/danger/hover` | Pointer-hover background for destructive actions; preserve layout and validate the foreground pairing. |
| Destructive actions | `color/background/danger/pressed` | Background while a destructive action is actively pressed; do not use for persistent selection. |
| Destructive actions | `color/background/danger/disabled` | Unavailable destructive action background; pair with disabled text and icon roles and remove activation. |
| Text | `color/text/primary` | Main readable content and headings on normal surfaces; use for highest neutral emphasis. |
| Text | `color/text/secondary` | Supporting descriptions and secondary labels; preserve readable contrast on the specified surface. |
| Text | `color/text/subtle` | Low-emphasis metadata and helper content; it remains readable active content, not disabled text. |
| Text | `color/text/disabled` | Content of unavailable controls; do not use for active instructions or data. |
| Text | `color/text/inverse` | Content on the inverse neutral surface; validate against that surface in each mode. |
| Text | `color/text/on-brand` | Content on the brand action background; check default, hover and pressed pairings separately. |
| Text | `color/text/on-danger` | Content on destructive action backgrounds; do not reuse neutral-surface danger ink without testing. |
| Text | `color/text/brand` | Branded emphasis on ordinary surfaces; this is not the foreground for a filled brand action. |
| Text | `color/text/danger` | Destructive action label on ordinary surfaces; use status/error roles for validation feedback. |
| Text | `color/text/selected` | Content that identifies a persistent selection; pair with the selected background and another selection cue. |
| Icons | `color/icon/primary` | Main functional icon on normal surfaces; keep a separate contract from text. |
| Icons | `color/icon/secondary` | Supporting icon with less emphasis than the main content icon. |
| Icons | `color/icon/subtle` | Low-emphasis noncritical icon; validate contrast whenever the icon conveys necessary information. |
| Icons | `color/icon/disabled` | Content of unavailable controls; do not use for active actions or status. |
| Icons | `color/icon/inverse` | Content on the inverse neutral surface; validate against that surface in each mode. |
| Icons | `color/icon/on-brand` | Content on the brand action background; check default, hover and pressed pairings separately. |
| Icons | `color/icon/on-danger` | Content on destructive action backgrounds; do not reuse neutral-surface danger ink without testing. |
| Icons | `color/icon/brand` | Branded icon on ordinary surfaces; this is not the foreground for a filled brand action. |
| Icons | `color/icon/danger` | Destructive action icon on ordinary surfaces; use status/error roles for validation feedback. |
| Icons | `color/icon/selected` | Content that identifies a persistent selection; pair with the selected background and another selection cue. |
| Links | `color/text/link/default` | Navigable inline text on a documented surface; retain an underline or equivalent non-color identification. |
| Links | `color/text/link/hover` | Link text while pointed at; preserve its destination meaning and non-color cue. |
| Links | `color/text/link/pressed` | Link text during activation; do not use as a selected navigation indicator. |
| Links | `color/text/link/visited` | Previously visited destination text when that behavior is supported; preserve readability and link identification. |
| Borders | `color/border/subtle` | Quiet, nonessential separation; do not rely on it as the sole boundary of a required control. |
| Borders | `color/border/default` | Normal field and container boundary; validate non-text contrast where the boundary identifies a control. |
| Borders | `color/border/strong` | Emphasized boundary for a region needing stronger separation. |
| Borders | `color/border/focus` | Visible keyboard-focus boundary; use with the approved width and offset, independently of selection. |
| Borders | `color/border/disabled` | Boundary of an unavailable control; do not use for active inputs. |
| Borders | `color/border/brand` | Brand-related emphasis on a boundary; use focus for keyboard focus and selected for persistent selection. |
| Borders | `color/border/danger` | Destructive action outline; use status/error/border to identify invalid content. |
| Borders | `color/border/selected` | Persistent selection boundary paired with a mark, label or other non-color cue. |
| Status | `color/status/information/background` | Background for neutral informative feedback; use with the matching status roles and a specific message. |
| Status | `color/status/information/text` | Readable message text for neutral informative feedback; use with the matching status roles and a specific message. |
| Status | `color/status/information/icon` | Meaningful icon for neutral informative feedback; use with the matching status roles and a specific message. |
| Status | `color/status/information/border` | Supporting boundary for neutral informative feedback; use with the matching status roles and a specific message. |
| Status | `color/status/success/background` | Background for confirmation of a successful outcome; use with the matching status roles and a specific message. |
| Status | `color/status/success/text` | Readable message text for confirmation of a successful outcome; use with the matching status roles and a specific message. |
| Status | `color/status/success/icon` | Meaningful icon for confirmation of a successful outcome; use with the matching status roles and a specific message. |
| Status | `color/status/success/border` | Supporting boundary for confirmation of a successful outcome; use with the matching status roles and a specific message. |
| Status | `color/status/warning/background` | Background for a condition requiring caution; use with the matching status roles and a specific message. |
| Status | `color/status/warning/text` | Readable message text for a condition requiring caution; use with the matching status roles and a specific message. |
| Status | `color/status/warning/icon` | Meaningful icon for a condition requiring caution; use with the matching status roles and a specific message. |
| Status | `color/status/warning/border` | Supporting boundary for a condition requiring caution; use with the matching status roles and a specific message. |
| Status | `color/status/error/background` | Background for validation or system failure requiring correction; use with the matching status roles and a specific message. |
| Status | `color/status/error/text` | Readable message text for validation or system failure requiring correction; use with the matching status roles and a specific message. |
| Status | `color/status/error/icon` | Meaningful icon for validation or system failure requiring correction; use with the matching status roles and a specific message. |
| Status | `color/status/error/border` | Supporting boundary for validation or system failure requiring correction; use with the matching status roles and a specific message. |

The name describes property, purpose, then state. Keep `pressed` for temporary activation and `selected` for persistent choice. Keep `danger` for destructive actions and `error` for invalid input or system feedback. Equal resolved values do not make those roles interchangeable.

The existing `color/status/{status}/{property}` group is a deliberate grouped contract: bind its text member only to text, icon member only to icons, border member only to strokes and background member only to surfaces. Do not create parallel synonyms such as `color/action/primary` for `color/background/brand/default`, or `color/border/error` for `color/status/error/border`.

## Component color rule

Use global semantic roles by default. Introduce component aliases only under [Design Tokens](design-tokens.md).

- Containers use `color/background/*` or the matching status background.
- Text uses `color/text/*` or the matching status text.
- Icons use `color/icon/*` or the matching status icon.
- Strokes use `color/border/*` or the matching status border.
- Destructive filled actions use `color/text/on-danger` and `color/icon/on-danger`; outline actions use the ordinary-surface danger roles.
- Transparent fills resolve to an approved variable; state changes do not introduce local raw colors.

## Internal QA

Check approved versus implemented names, values, scopes, modes, alias targets and descriptions. Inspect each foreground/background pairing in every state and mode, including alpha compositing. Verify selection, focus and feedback retain non-color cues. Do not collapse scope to match an incomplete implementation.

The full approved Light/Dark contract remains required unless the downstream user explicitly approves a departure. A technical mode limit or the absence of dark values is a recorded blocker, not permission to silently ship Light only.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Read [Documentation Visual Language](../06-governance/documentation-visual-language.md) and [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md) before building the guides.

Color documentation is intentionally split into two complementary reference frames:

1. `Documentation / Colors` for primitive/source colors.
2. `Documentation / Color variables` for semantic roles and Light/Dark resolution.

Do not force primitive colors and semantic variables into one visual structure.

### Documentation / Colors

This is the source-palette reference. Use a wide horizontal family layout similar to the approved current design, while keeping the project's own typography, colors, token names, and brand character.

Recommended root width: `2848px` or another 4px-aligned width when the complete approved ramp requires it.

Visible structure:

```text
Documentation / Colors
  Page header
    Foundations → Colors
    Colors
    Short explanation of the source palette
    Optional compact system metadata
  Source palette
    Base
    Brand
    Secondary, when approved
    Neutral
    Every approved feedback/source family
  Quiet footer / system context
```

For each family:

- show the family name and one concise sentence describing its role;
- lay the approved steps horizontally in ascending order, wrapping only when required by the available width;
- show a compact swatch card for every approved value;
- show the familiar step/name and resolved uppercase hex or alpha;
- show the approved anchor/default indicator when one exists;
- keep white/transparent values legible with appropriate inside boundaries or compositing treatment;
- show contrast text only when it represents an explicit tested pairing and is useful to designers.

Primitive documentation must not imply that components may bind directly to raw colors.

### Documentation / Color variables

This is the semantic-role reference. Use the approved hierarchical documentation pattern rather than a generic inventory table.

Recommended root width: `2528px` or another 4px-aligned width that keeps all four columns readable.

Visible structure:

```text
Documentation / Color variables
  Page header
    Foundations → Color variables
    Color variables
    Short explanation of semantic roles and modes
    Optional compact system metadata
  Section / Background color
  Section / Text color
  Section / Icon color
  Section / Border color
  Section / Feedback color
  Quiet footer / system context
```

Each semantic section uses:

```text
Section heading
  {Section title}
  Variables [small badge]
Description
Table
  Name
  Light mode
  Dark mode
  Usage
```

Adapt mode columns only if the approved system uses different modes.

#### Name column

Show the semantic token without the redundant `color/` prefix when the page context already establishes the collection, for example `text/primary` rather than `color/text/primary`.

Use indentation and subtle connector lines only for real semantic relationships.

Recommended hierarchy for the default contract:

- `background/brand/default` → `hover`, `pressed`, `disabled`
- `background/danger/default` → `hover`, `pressed`, `disabled`
- `text/link/default` → `hover`, `pressed`, `visited`
- each feedback `{status}/background` → `text`, `icon`, `border`

Flat roles such as `text/primary`, `icon/primary`, or `border/focus` remain flat unless the approved token model defines children.

Do not invent hierarchy merely to match the visual reference.

#### Light and Dark mode columns

Show the resolved primitive source as a compact pill containing:

- a bound color swatch;
- the familiar source name, such as `neutral-900`, `brand-500`, `red-600`, or `white`.

Light-mode pills use the normal documentation surface. Dark-mode pills may use a dark neutral container when it improves legibility and visually reinforces the mode comparison. This container is documentation chrome, not a new token.

Show both mode values even when they resolve to the same primitive.

Do not display alias IDs or raw API data.

#### Usage column

Write one concise sentence for each role. Explain what the role is for, not what the color looks like. Add misuse restrictions only when they prevent a likely semantic mistake.

Do not replace row-specific usage with one generic family paragraph.

#### Row styling

- Use subtle horizontal dividers.
- Keep rows compact and aligned.
- Allow usage text to wrap instead of clipping or shrinking.
- Avoid heavy cards around every cell.
- Separate semantic sections with significantly more vertical space than individual rows.
- Keep the table visually quiet enough that the token relationships remain the focus.

### Color documentation QA

Use [Documentation Acceptance](../06-governance/documentation-acceptance.md).

Fail when:

- any approved primitive or semantic role is missing;
- a mode pill shows the wrong resolved source;
- hierarchy is invented or a real state relationship is flattened in a way that harms comprehension;
- child connector lines do not correspond to actual semantic relationships;
- usage text is generic, duplicated, or clipped;
- primitive and semantic pages drift into different documentation chrome without an approved reason;
- the layout copies an external system's names, brand, typography, proprietary copy, or irrelevant sections;
- top-level documentation frames overlap after width changes;
- a screenshot looks structurally random even when the data is technically complete.

Inspect readable screenshots of both `Documentation / Colors` and `Documentation / Color variables`, including the first and last semantic sections, before accepting the Foundation.

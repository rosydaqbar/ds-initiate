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

Build `Documentation / Color` and any linked reference continuations using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). A complete palette and complete semantic role reference are required.

### Required visible structure and copy

```text
Documentation / Color
  Header
    Color
    Color establishes hierarchy, identifies actions, and communicates state.
  Overview
  Contents
  Palette
    Base and alpha colors
    Brand
    Secondary, when approved
    Neutral
    Every approved feedback/source family
  Semantic color reference
    Backgrounds
    Brand actions
    Destructive actions
    Text
    Icons
    Links
    Borders and focus
    Information, Success, Warning, Error
  Appearance modes
  Interaction states and selection
  Foreground/background pairings
  Feedback and overlays
  Do and don't
  Accessibility and remaining checks
```

Overview copy: `Choose a semantic color by the purpose and state of the element. The palette provides source values; the role reference explains how those values are used in each appearance.`

### Complete palette reference

Show EVERY approved family and EVERY approved shade, plus base and alpha colors. A three-shade overview cannot replace the full ramp.

Give each family a visible heading and an original sentence explaining its role in the approved identity. Give each shade:

1. Familiar family and step, plus exact variable name.
2. Bound swatch showing the actual color.
3. Uppercase resolved `#RRGGBB`, plus opacity when not opaque.
4. A concise explanation of its approved use or an explicit reserved/no-current-semantic-use label.
5. Links or names of semantic roles that use it where helpful. Do not imply direct primitive use in components.

Use a `1440px` reference width. A family header spans the row; shade cells are `240px` wide with `16px` padding and a `208×72px` bound preview. Five cells plus four `16px` gaps require `1264px`; wrap additional shades in ascending order. There is no cap on total shades or rows.

Put labels on a readable neutral background. An optional text sample inside a swatch must identify its foreground and pairing; the swatch is not certified by an unlabeled AA/AAA badge. Transparent swatches use a checkerboard or named compositing surface and visible alpha. White has a subtle inside boundary so it remains perceptible.

### Complete semantic role reference

Create a row for EVERY implemented semantic role and verify it covers EVERY approved role. Use the exact contract table above plus approved additions. Split by property and purpose, and repeat headings for continuation frames.

| Column | Width | Required visible content |
| --- | ---: | --- |
| Token | 304px | Familiar name plus exact searchable slash-separated token |
| Purpose and usage | 448px | Specific use, applicable state, relevant pairing and misuse restriction |
| Light | 344px | Bound sample, resolved source name, hex and alpha under explicit Light mode |
| Dark | 344px | Bound sample, resolved source name, hex and alpha under explicit Dark mode |

Column widths sum to `1440px`; use `16px` cell padding, no inter-column gap, and Hug rows. Every mode cell has a `48×48px` swatch plus an applied preview when needed. Text and icon samples use their intended surface; borders surround a visible surface; overlays composite over a named background. Documentation text remains readable outside the sample.

Show a primitive source name such as `Brand 600` as well as the resolved hex, never an alias ID in place of the value. Resolve the actual chain internally, including its mode behavior. Show both modes even when they have equal values. Do not merge distinct roles because their colors happen to match.

Every role has its own usage text; a paragraph for Text or Backgrounds alone is insufficient. Native variable descriptions mirror the purpose, state and constraints. They supplement the visible entry.

### Appearance modes and interaction states

Show the same neutral composition in Light and Dark with Canvas, Surface, primary/secondary text, an icon, default border, brand action and focus. Set each specimen's mode explicitly. Label the roles and values; do not create a product screen.

Create separate Brand and Destructive action state rows with Default, Hover, Pressed, Focus and Disabled. Each state has a named `176×48px` bound preview, foreground and background token/value labels and one sentence explaining its trigger. Focus adds the focus treatment to the current appearance; it does not replace selection.

Add Selected and Selected + Hover examples using the selection roles, with a visible mark or label. Show that selection persists after activation, while press is momentary. Show enabled and disabled content pairings independently.

Use `224px` state cells, `24px` padding and `16px` gaps inside a `1280px` unpadded row; five cells and four gaps require `1184px`. Grow cells vertically for the labels.

### Foreground/background pairings

Provide a pair reference for every permitted text/icon/meaningful boundary combination used by the documented examples and components. Include the actual foreground and background token names, mode, state, resolved colors, alpha/compositing background, measured ratio, use class and result.

Distinguish normal text, large text and necessary non-text graphics. A result applies only to its named pair and use class. A palette shade does not pass or fail accessibility in isolation. Use [Accessibility](accessibility.md) for thresholds and evidence boundaries; compute the result before rounding its displayed ratio.

Do not label disabled content as suitable for active information. Mark inactive controls as a scoped exception where applicable. If a pairing fails, repair the approved mapping or restrict its use visibly and record the unresolved decision.

### Feedback and overlays

Show Information, Success, Warning and Error as complete bound treatments, each with background, text, icon and border names and values. Use specific, neutral messages and a visible symbol or label. Put mode comparisons alongside each treatment.

Use a `1440px` unpadded row with four `320px` examples and three `24px` gaps (`1352px` total); each example has `24px` internal padding. If the available width is smaller, wrap rather than compressing the content.

Show an overlay over its named canvas with the actual alpha value and the elevated surface above it. Explain which content is dimmed and which stays active.

### Do and don't

Create distinct visual comparisons with a caption under each side:

- Choose a semantic surface role for a container / avoid a similar-looking raw swatch applied directly.
- Keep one primary action and quieter supporting actions / avoid competing primary actions.
- Combine error color with a correction message and cue / avoid a red boundary with no explanation.
- Preserve selection while showing focus / avoid using focus color as the only selection indicator.

Generic advice such as “apply the documented decision” is not a substitute for these examples.

### Documentation QA

Use [Documentation Acceptance](../06-governance/documentation-acceptance.md). Fail when:

- Any approved shade, base/alpha color or semantic role is missing from implementation or its visible reference.
- A role lacks its exact name, individual usage, bound sample or resolved mode value.
- Variable descriptions are empty or generic.
- A label differs from its binding, mode or composited appearance.
- A pairing claim has no named foreground/background or evidence.
- State, feedback, overlay, mode or do-and-don't examples are absent or consist only of text boxes.
- A complete reference is replaced by a summary or deferred to the variables panel.
- Rows clip, text becomes too small, or unrelated generic guidance fills the guide.

Record missing content as incomplete and repair it before accepting the Foundation. Keep raw IDs and test logs internal while preserving all designer-facing specifications.

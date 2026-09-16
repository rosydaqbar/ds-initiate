# Color

**Library section:** Foundations

## Required input

Approved project colors, neutral/feedback direction, appearance modes, accessibility target, and any production token contract to preserve.

Read [Project Data Boundary](../06-governance/project-data-boundary.md). No concrete palette value or typeface from an example project is a reusable default.

If the project already has a production color contract, preserve it. If not, use the reusable architecture below only after the required project-sensitive values are explicitly approved.

## Raw colors

Create approved raw/source families in `Primitives`.

The reusable default step labels are:

`50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950`

This fixes naming/order only. It does not supply the actual color values.

Default family grammar when the project uses those concepts:

- `color/brand/{step}`
- `color/neutral/{step}`
- `color/secondary/{step}` when an independent secondary family is approved
- approved feedback/source families such as `color/red/{step}`, `color/green/{step}`, `color/yellow/{step}`, or another project-approved family
- `color/white`, `color/black`, `color/transparent`, and approved alpha values when required

Do not create a family that the project does not need merely because an example used it.

Family names and steps describe source color, never interaction states. Populate each raw variable description with its source identity and current semantic mappings, or state that it is reserved with no current semantic mapping.

Raw values are hidden from normal component use unless the approved production architecture explicitly defines them as public semantic values.

## Global semantic colors

When the project does not supply an existing semantic contract, use this default reusable role contract. The actual Light/Dark/source mappings remain project data and must be explicitly resolved before build.

If the project has a different approved production semantic contract, preserve it and document the departure rather than forcing this table.

| Group | Exact token | Purpose and usage |
| --- | --- | --- |
| Background | `color/background/canvas` | Base area behind interface content regions. |
| Background | `color/background/transparent` | No visible surface fill for text-like or unfilled controls. |
| Background | `color/background/surface` | Default content surface for panels and containers. |
| Background | `color/background/subtle` | Low-emphasis grouping surface that does not imply selection. |
| Background | `color/background/strong` | Emphasized neutral surface requiring an approved foreground pairing. |
| Background | `color/background/inverse` | Contrasting neutral surface paired with inverse content. |
| Background | `color/background/disabled` | Unavailable neutral control background. |
| Background | `color/background/overlay` | Backdrop behind temporary overlay content. |
| Background | `color/background/selected` | Persistent selected-item background used with a non-color cue. |
| Background | `color/background/selected-hover` | Hover background for an already selected item. |
| Brand actions | `color/background/brand/default` | Primary brand-action background. |
| Brand actions | `color/background/brand/hover` | Pointer-hover background for a primary brand action. |
| Brand actions | `color/background/brand/pressed` | Momentary pressed background for a primary brand action. |
| Brand actions | `color/background/brand/disabled` | Unavailable primary-action background. |
| Destructive actions | `color/background/danger/default` | Destructive-action background. |
| Destructive actions | `color/background/danger/hover` | Pointer-hover background for a destructive action. |
| Destructive actions | `color/background/danger/pressed` | Momentary pressed background for a destructive action. |
| Destructive actions | `color/background/danger/disabled` | Unavailable destructive-action background. |
| Text | `color/text/primary` | Highest-emphasis readable text on ordinary surfaces. |
| Text | `color/text/secondary` | Supporting descriptions and secondary labels. |
| Text | `color/text/subtle` | Low-emphasis readable metadata/helper content. |
| Text | `color/text/disabled` | Text content of unavailable controls. |
| Text | `color/text/inverse` | Text on the inverse neutral surface. |
| Text | `color/text/on-brand` | Text on brand-filled action surfaces. |
| Text | `color/text/on-danger` | Text on destructive filled surfaces. |
| Text | `color/text/brand` | Branded emphasis on ordinary surfaces. |
| Text | `color/text/danger` | Destructive-action emphasis on ordinary surfaces. |
| Text | `color/text/selected` | Text identifying persistent selection. |
| Icons | `color/icon/primary` | Highest-emphasis functional icon on ordinary surfaces. |
| Icons | `color/icon/secondary` | Supporting icon with lower emphasis. |
| Icons | `color/icon/subtle` | Low-emphasis noncritical icon. |
| Icons | `color/icon/disabled` | Icon content of unavailable controls. |
| Icons | `color/icon/inverse` | Icon on the inverse neutral surface. |
| Icons | `color/icon/on-brand` | Icon on brand-filled action surfaces. |
| Icons | `color/icon/on-danger` | Icon on destructive filled surfaces. |
| Icons | `color/icon/brand` | Branded icon on ordinary surfaces. |
| Icons | `color/icon/danger` | Destructive-action icon on ordinary surfaces. |
| Icons | `color/icon/selected` | Icon identifying persistent selection. |
| Links | `color/text/link/default` | Default navigable link text on a documented surface. |
| Links | `color/text/link/hover` | Link text while pointed at. |
| Links | `color/text/link/pressed` | Link text during activation. |
| Links | `color/text/link/visited` | Previously visited destination text when supported. |
| Borders | `color/border/subtle` | Quiet nonessential separation. |
| Borders | `color/border/default` | Normal field/container boundary. |
| Borders | `color/border/strong` | Emphasized boundary for stronger separation. |
| Borders | `color/border/focus` | Visible keyboard-focus boundary independent of selection. |
| Borders | `color/border/disabled` | Boundary of an unavailable control. |
| Borders | `color/border/brand` | Brand-related boundary emphasis. |
| Borders | `color/border/danger` | Destructive-action boundary. |
| Borders | `color/border/selected` | Persistent selection boundary paired with a non-color cue. |
| Status | `color/status/information/background` | Background for informative feedback. |
| Status | `color/status/information/text` | Readable informative-feedback message text. |
| Status | `color/status/information/icon` | Meaningful informative-feedback icon. |
| Status | `color/status/information/border` | Supporting informative-feedback boundary. |
| Status | `color/status/success/background` | Background for successful-outcome feedback. |
| Status | `color/status/success/text` | Readable success-feedback message text. |
| Status | `color/status/success/icon` | Meaningful success-feedback icon. |
| Status | `color/status/success/border` | Supporting success-feedback boundary. |
| Status | `color/status/warning/background` | Background for caution feedback. |
| Status | `color/status/warning/text` | Readable warning-feedback message text. |
| Status | `color/status/warning/icon` | Meaningful warning-feedback icon. |
| Status | `color/status/warning/border` | Supporting warning-feedback boundary. |
| Status | `color/status/error/background` | Background for validation/system-failure feedback. |
| Status | `color/status/error/text` | Readable error-feedback message text. |
| Status | `color/status/error/icon` | Meaningful error-feedback icon. |
| Status | `color/status/error/border` | Supporting error-feedback boundary. |

The naming grammar is property → purpose → state. Keep `pressed` for temporary activation and `selected` for persistent choice. Keep destructive action semantics separate from validation/system-error semantics even when they resolve to equal colors.

The grouped status contract binds each member only to its matching property: background → surfaces, text → text, icon → icons, border → strokes.

## Explicit semantic hierarchy for documentation

The default contract defines these parent/child relationships for `P2 — Semantic variable table` documentation:

- `color/background/brand/default` → `hover`, `pressed`, `disabled`
- `color/background/danger/default` → `hover`, `pressed`, `disabled`
- `color/text/link/default` → `hover`, `pressed`, `visited`
- each `color/status/{status}/background` → `text`, `icon`, `border`

All other roles remain flat unless an approved project-specific semantic contract explicitly defines another parent/child relationship.

Do not infer hierarchy from naming similarity alone.

## Component color rule

Use global semantic roles by default.

- Containers use approved background/status-background roles.
- Text uses approved text/status-text roles.
- Icons use approved icon/status-icon roles.
- Strokes use approved border/status-border roles.
- Transparent fills resolve through an approved semantic role.
- Introduce component aliases only under [Design Tokens](design-tokens.md) when a component needs an independent stable contract.

## Internal QA

Check:

- approved versus implemented names;
- values and modes;
- scopes and alias targets;
- variable descriptions;
- foreground/background pairings required by the actual components;
- alpha compositing;
- selection and focus distinction;
- status meaning not relying on color alone;
- project-sensitive values come from the current approved project record rather than an example.

Do not silently reduce mode scope because one mode is incomplete. Record it as blocked.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build.

Read:

- [Project Data Boundary](../06-governance/project-data-boundary.md)
- [Documentation Construction Contract](../06-governance/documentation-visual-language.md)
- [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md)
- [Documentation Acceptance](../06-governance/documentation-acceptance.md)

Build exactly two complementary guides when both source colors and semantic roles are in scope:

1. `Documentation / Colors` — `P1 — Palette families`
2. `Documentation / Color variables` — `P2 — Semantic variable table`

### Documentation / Colors

Use the canonical `2848px` P1 frame and canonical shared header/footer.

Populate families in the approved project order. For each family show:

- family name and concise role sentence;
- every approved value in source order;
- bound swatch;
- familiar step/name;
- resolved value/alpha;
- anchor/default marker only when the project explicitly defines one.

Normal swatches are exactly `160×156px`. Approved anchor swatches are exactly `224×156px`. Follow all other P1 measurements from the construction contract.

Do not assume a specific brand family, feedback family, anchor step, or concrete color value.

### Documentation / Color variables

Use the canonical `2528px` P2 frame and canonical shared header/footer.

Semantic sections follow the approved semantic contract order.

For the reusable default contract, the order is:

1. Background
2. Brand actions
3. Destructive actions
4. Text and links
5. Icons
6. Borders and focus
7. Information
8. Success
9. Warning
10. Error

Projects with an explicitly approved production semantic contract use that contract's groups/order instead.

For a two-mode project, table columns are exactly:

`Name 820px | Mode 1 360px | Mode 2 360px | Usage 828px`

Use canonical P2 row/pill/connector geometry.

Display semantic names without redundant collection prefix when page context already establishes it. Preserve full identity in native variable data/descriptions.

Mode pills show the actual resolved source name and bound `28×28px` swatch. Do not show alias IDs.

### Usage copy

Every semantic role gets one concise role-specific usage sentence. Do not replace row-level meaning with one generic family paragraph.

### Color documentation QA

Fail when:

- any approved primitive or semantic role is missing;
- a swatch or mode pill resolves incorrectly;
- an anchor/default marker is invented;
- hierarchy is invented or an explicit hierarchy is flattened;
- usage is generic/duplicated/clipped;
- root width, header, body rhythm, table columns, row geometry, swatch geometry, or canvas placement differs from the canonical contract;
- another project's brand name, palette, typeface, token mapping, or reference copy appears as a default;
- top-level frames overlap;
- screenshot QA was not performed.

Inspect readable screenshots of both guides, including first and last reference rows, before accepting the Color Foundation.
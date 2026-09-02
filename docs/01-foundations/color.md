# Color

**Library section:** Foundations

## Required input

Approved primary and secondary brand colors, neutral direction, status-color direction, supported appearance modes, and accessibility target.

## Raw colors

Create raw scales in `Primitives`:

- `color/brand/50–950`
- `color/secondary/50–950`
- `color/neutral/50–950`
- `color/red/50–950`
- `color/green/50–950`
- `color/yellow/50–950`
- `color/blue/50–950`
- `color/white`, `color/black`, `color/transparent`, and approved alpha values

Raw names describe color families, not UI meaning. Keep them hidden from normal component-property scopes.

## Global semantic colors

Create mode-aware roles in `Color`. These are the reusable colors that designers and components normally use.

| Property | Minimum roles |
| --- | --- |
| Background | `color/background/canvas`, `surface`, `subtle`, `strong`, `inverse`, `disabled`, `overlay` |
| Brand background | `color/background/brand/default`, `hover`, `pressed`, `disabled` |
| Danger background | `color/background/danger/default`, `hover`, `pressed`, `disabled` |
| Text | `color/text/primary`, `secondary`, `subtle`, `disabled`, `inverse`, `on-brand`, `brand`, `danger` |
| Icon | `color/icon/primary`, `secondary`, `subtle`, `disabled`, `inverse`, `on-brand`, `brand`, `danger` |
| Border | `color/border/subtle`, `default`, `strong`, `focus`, `disabled`, `brand`, `danger` |
| Status | `color/status/information/*`, `success/*`, `warning/*`, `error/*`, each with `background`, `text`, `icon`, and `border` when required |

Name interaction states under the property they change: background, text, icon, or border. One design decision has one semantic role.

Use `danger` for destructive actions and `error` for validation or system-status feedback. Do not use a red value merely because it visually matches.

## Component color rule

Bind components directly to global `Color` roles first. Add a component-specific alias only when the criteria in [Design Tokens](design-tokens.md) are met.

When one component contains both text and icons, bind them separately:

- Text layers use `color/text/*`.
- Icon and vector layers use `color/icon/*`.
- Containers use `color/background/*`.
- Strokes use `color/border/*`.

## Internal QA

- No production component binds to `Primitives` or a hard-coded color.
- Light and Dark values resolve correctly.
- Text, non-text controls, focus, and interaction states meet the approved WCAG target.
- Status and selection do not rely on color alone.
- Hover, pressed, focus, and disabled states remain distinguishable without changing geometry.

Keep measured ratios and test evidence in internal QA records.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Create `Color Guidelines` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Include:

- The approved brand and supporting palette with a short statement of purpose.
- Global color roles grouped by Background, Text, Icon, Border, and Status.
- Light and Dark usage examples for the most common roles.
- Interaction-state examples for brand and danger actions.
- Status examples that combine color with text or icon meaning.
- Do-and-don't examples showing correct semantic selection.
- One concise accessibility line: `✓ WCAG 2.2 AA checked`, or the stricter approved target.

Do not show the complete raw-variable inventory, alias chains, code syntax, collection counts, contrast ratios, or validation calculations.

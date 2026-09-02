# Accessibility

**Library section:** Foundations and Utility

## Default release gate

Use WCAG 2.2 AA until the discovery brief approves a stricter target.

- Interactive target: minimum `44×44px` in product compositions. A visible 32px control may sit inside a transparent 44px target wrapper.
- Focus: visible `4px` semantic focus treatment, not clipped by the component or overlay.
- Keyboard: every interaction has a documented key path, logical focus order, Escape behavior for overlays, and focus return.
- Text: test 200% text zoom and long localized content without clipping critical information.
- Contrast: validate text, non-text controls, focus, and interactive states in every supported appearance.
- Status: pair color with text, icon, shape, or programmatic announcement.
- Motion: provide the reduced-motion behavior defined in [motion.md](motion.md).
- Modes: review Light, Dark, and high-contrast needs for the approved brand on real examples. Review additional branded themes only when explicitly included in scope.

Keep component-specific accessibility requirements in each component specification. The Foundation guide is mandatory; separate component landing frames remain optional.

Accessibility acceptance is part of component release, not a final optional audit.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Accessibility` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

### Required visible structure and copy

```text
Documentation / Accessibility
  Header
    Accessibility
    Accessible design helps people perceive, understand, navigate, and operate the interface.
  Overview
  Essential design decisions
  Do and don't
  Accessibility status
```

Use this overview copy: `Apply accessibility requirements while designing each Foundation and component. These examples cover the decisions designers must make most often; detailed test evidence remains in internal QA.`

Create exactly six `400px`-wide guidance examples across two annotated blocks. Each contains a labeled visual, its required value or behavior, why it matters, and this usage copy:

1. `Target size · minimum 44×44px` — `Give interactive elements enough usable area, even when the visible control is smaller.` Show a `32px` control centered inside a measured `44×44px` target.
2. `Visible focus · 4px` — `Show a clear keyboard-focus treatment that is not clipped or confused with selection.`
3. `Keyboard order` — `Keep focus order aligned with the visual reading and task order.` Show a neutral three-item sequence labeled `1`, `2`, and `3`.
4. `Text expansion · 200%` — `Allow essential text to wrap and containers to grow without clipping.` Show the same neutral text block at default and expanded size.
5. `Status beyond color` — `Pair status color with a label, icon, or other visible cue.` Show a status example with all three cues.
6. `Reduced motion` — `Replace non-essential movement with an instant change or short opacity transition.` Show Standard and Reduced motion side by side.

Create three comparison pairs:

- Do: `Provide at least a 44×44px interaction target.` / Don't: `Do not make the visible icon the only clickable area when it is too small.`
- Do: `Keep focus visible around the complete interactive element.` / Don't: `Do not remove, hide, or clip keyboard focus.`
- Do: `Allow text and containers to expand.` / Don't: `Do not truncate essential instructions or errors.`

Create an `Accessibility status` panel containing one sentence about the approved target and `✓ WCAG 2.2 AA checked` only after the required checks pass, or the approved stricter target. Do not show raw contrast ratios, test cases, metadata, or validation logs.

The guide fails QA if any example is only an illustration without the required value, reason, and usage sentence.

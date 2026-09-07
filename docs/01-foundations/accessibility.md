# Accessibility

**Library section:** Foundations and Utility

## Default release gate

Use WCAG 2.2 AA until the discovery brief approves a stricter target.

- Interactive target: minimum `44×44px` in product compositions. A visible 32px control can sit inside a transparent 48px target wrapper with 8px insets; choose geometry that also preserves the 4px grid.
- Focus: visible `4px` semantic focus treatment, not clipped by the component or overlay.
- Keyboard: every interaction has a documented key path, logical focus order, Escape behavior for overlays, and focus return.
- Text: test 200% text zoom and long localized content without clipping critical information.
- Contrast: validate text, non-text controls, focus, and interactive states in every supported appearance.
- Status: pair color with text, icon, shape, or programmatic announcement.
- Motion: provide the reduced-motion behavior defined in [motion.md](motion.md).
- Modes: review Light, Dark, and high-contrast needs for the approved brand on real examples. Review additional branded themes only when explicitly included in scope.

Keep component-specific accessibility requirements in each component specification. The Foundation guide is mandatory; separate component landing frames remain optional.

Accessibility acceptance is part of component release, not a final optional audit.

## Standards and evidence boundary

The `44×44px` interaction target and `4px` focus treatment are this framework's construction requirements. They are not the numerical minimums of every WCAG AA criterion. WCAG 2.2 AA target-size guidance uses a 24 CSS pixel minimum with defined exceptions; this framework keeps the larger target. See [Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

For AA [text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), normal text requires at least 4.5:1 and large text at least 3:1. Large text is at least 18pt regular or 14pt bold (24 CSS px or approximately 18.67 CSS px). Required [non-text graphics and control indicators](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) generally require 3:1 against adjacent colors, subject to the criterion's exceptions. Compute pass/fail on the unrounded ratio and label the specific foreground, background, mode, state and use class. Composite alpha over the named background before evaluating it. A logo or disabled-control exception is not a pass for active UI content.

Separate design review from runtime checks. Figma can supply geometry, contrast, intended focus and content examples. Keyboard operation, accessible names/roles, screen-reader output and preference handling require the implemented product. Report each as checked, pending or not applicable with a reason. Never infer full WCAG conformance from a Figma guide.

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

Document EVERY approved requirement, including Contrast and Appearance modes, in a complete rule reference. Each entry has its requirement, reason, actual example and design/runtime verification boundary. Use as many `400px`-wide guidance examples as necessary. Each contains a labeled visual, its required value or behavior, why it matters, and this usage copy:

1. `Target size · minimum 44×44px` — `Give interactive elements enough usable area, even when the visible control is smaller.` Show a `32px` control centered inside a measured `48×48px` target with `8px` insets. Label both the 44px minimum and the example's actual 48px bounds.
2. `Visible focus · 4px` — `Show a clear keyboard-focus treatment that is not clipped or confused with selection.`
3. `Keyboard order` — `Keep focus order aligned with the visual reading and task order.` Show a neutral three-item sequence labeled `1`, `2`, and `3`.
4. `Text expansion · 200%` — `Allow essential text to wrap and containers to grow without clipping.` Show the same neutral text block at default and expanded size.
5. `Status beyond color` — `Pair status color with a label, icon, or other visible cue.` Show a status example with all three cues.
6. `Reduced motion` — `Replace non-essential movement with an instant change or short opacity transition.` Show Standard and Reduced motion side by side.

7. `Contrast pairings` — show a permitted and a failing named foreground/background pair with their actual ratio, mode and use class; explain the appropriate alternative.
8. `Appearance modes` — show the same content in Light and Dark and document any approved high-contrast behavior without claiming runtime preference support from a mockup.

Create three comparison pairs:

- Do: `Provide at least a 44×44px interaction target.` / Don't: `Do not make the visible icon the only clickable area when it is too small.`
- Do: `Keep focus visible around the complete interactive element.` / Don't: `Do not remove, hide, or clip keyboard focus.`
- Do: `Allow text and containers to expand.` / Don't: `Do not truncate essential instructions or errors.`

Create an `Accessibility status` panel naming the approved target, the design checks actually completed and the runtime checks still pending. Show pair-specific contrast results where they guide a valid choice. Keep raw calculations, IDs and test logs internal. Do not print an unscoped WCAG checked badge.

The guide fails QA if any example is only an illustration without the required value, reason, and usage sentence.

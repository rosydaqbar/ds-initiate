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

Create `Accessibility Guidelines` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

- Explain target size, visible focus, keyboard order, text expansion, non-color status cues, and reduced motion with simple examples.
- Include do-and-don't examples for the most important designer decisions.
- Show one concise status: `✓ WCAG 2.2 AA checked`, or the stricter approved target.
- Do not display measured contrast ratios, test cases, metadata, or validation logs.
- Keep keyboard, screen-reader, and contrast evidence in internal QA records; verify metadata and screenshots internally before completion.

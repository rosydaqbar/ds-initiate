# Borders

**Library section:** Foundations

## Create in Figma

Create `FLOAT` variables in `Border`: `border/width/none = 0`, `border/width/default = 1`, `border/width/strong = 2`, and `border/width/focus = 4`. The `1px` and `2px` values use inside strokes so outer component geometry remains on the 4px grid.

Bind border color to the exact roles in [Color](color.md), including `color/border/subtle`, `color/border/default`, `color/border/strong`, `color/border/focus`, `color/border/disabled` and `color/status/error/border` for validation. Destructive actions use `color/border/danger`. Use solid strokes by default. A drop zone may use a dashed `1px` inside stroke with dash `4` and gap `4`; no other dashed style is published without a documented pattern.

Focus treatment is a `4px` outer ring or an equivalent Effect Style and must not change Auto Layout size.

## Validation

Borders must remain visible in every appearance mode and should not be the only indicator of selection or error.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Borders` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

### Required visible structure and copy

```text
Documentation / Borders
  Header
    Borders
    Borders define boundaries, separation, focus, and error emphasis without changing layout.
  Overview
  Complete border width reference
  Border widths
  Border purposes
  Focus and error
  Do and don't
  Accessibility
```

Use this overview copy: `Choose a border by the boundary or state it communicates. Border width and color work together, but selection and error must also use another visible cue.`

Create a complete four-row width reference for `border/width/none = 0`, `default = 1`, `strong = 2` and `focus = 4`, plus any approved additions. Show exact name, value, actual inside/outside alignment, purpose and a measured preview. Zero shows an explicit no-stroke sample. Link to the complete Color border-role reference for mode values.

Then create the following focused `224px`-wide applied specimens with 16px padding: Each specimen shows a `160×80px` bound preview, familiar name, resolved border color, width, and usage sentence:

1. `Subtle separator · 1px` — `Use for quiet separation between surfaces or content groups.`
2. `Default boundary · 1px` — `Use for standard component and container boundaries.`
3. `Strong boundary · 2px` — `Use when a boundary needs greater visual emphasis.`
4. `Keyboard focus · 4px` — `Use only for the approved visible keyboard-focus treatment.`
5. `Error boundary · 1px` — `Use with an error message to identify invalid content.`
6. `Dashed drop zone · 1px · 4px dash · 4px gap` — `Use only when this treatment is approved for a drop zone.` Omit this card when the treatment is not approved.

Create these comparisons:

- Do: `Pair a selected border with a visible selection label or icon.`
- Don't: `Do not communicate selection through border color alone.`
- Do: `Pair an error border with an error message and icon when appropriate.`
- Don't: `Do not use a red border without explaining the problem.`

Finish with: `Focus and error boundaries must remain visible in every supported appearance.` Report the design checks actually performed and the remaining implementation checks under [Accessibility](accessibility.md).

The visible width reference covers every Border variable. Each applied preview shows its exact width token and color role, both mode values, and its individual purpose. A missing width, a danger/error role mix-up, unlabeled stroke, or missing focus behavior fails QA. Keep internal exception reports and validation logs outside the guide.

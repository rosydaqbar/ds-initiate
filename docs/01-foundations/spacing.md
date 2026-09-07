# Spacing

**Library section:** Foundations

## Figma build

Create `FLOAT` variables in the `Spacing` collection using the exact scale defined in [4px-grid.md](4px-grid.md): `0`, `4`, `8`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `64`, `80`, and `96`.

Name variables by their pixel value: `spacing/0`, `spacing/4`, `spacing/8`, `spacing/12`, `spacing/16`, `spacing/20`, `spacing/24`, `spacing/32`, `spacing/40`, `spacing/48`, `spacing/64`, `spacing/80`, and `spacing/96`. Do not add values between the published steps or create component-specific spacing variables.

## Rules

- Components use the scale rather than one-off values.
- Optical corrections are limited to vector paths; frame geometry stays on the 4px grid.
- New values require a repeated product need.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Spacing` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

### Required visible structure and copy

```text
Documentation / Spacing
  Header
    Spacing
    Spacing creates consistent relationships between elements using the shared 4px rhythm.
  Overview
  Complete spacing scale
  Shared sizing reference
  Choosing spacing
    Inline gaps
    Control padding
    Container padding
    Section separation
  Do and don't
  Accessibility
```

Use this overview copy: `Choose spacing according to the relationship between elements. Closely related content uses smaller values; separate groups and sections use progressively larger values.`

First document EVERY spacing value: `0`, `4`, `8`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `64`, `80`, `96`. Use the individual purposes in [4px Grid](4px-grid.md). Each row shows the exact `spacing/{value}` name, pixel value, true-size measurement and usage sentence. Label zero as `0px — no gap or inset`; do not give it a nonzero bar.

Add the complete shared sizing reference: `size/control/32`, `40`, `48`, `56`; `size/icon/16`, `20`, `24`, `32`; and `size/target/minimum = 44`. Show the full name, value, measured preview and purpose for EVERY size, plus any explicitly approved additions. Distinguish visible control size from interaction target bounds. This guide owns sizing documentation even though the creation contract is in [4px Grid](4px-grid.md).

Reference rows use 1440px total: Name 288px, Value 160px, Measurement 400px, Usage 592px; 16px cell padding and Hug height. Then explain the scale in four usage groups:

| Group | Representative values | Required usage copy |
| --- | --- | --- |
| Inline gaps | `4px`, `8px` | `Use small gaps between icons, labels, and tightly related controls.` |
| Control padding | `12px`, `16px` | `Use control padding to balance label length, icon size, and control height.` |
| Container padding | `24px`, `32px` | `Use container padding to separate content from the edge of a surface.` |
| Section separation | `48px`, `64px` | `Use larger spacing to separate distinct groups and major sections.` |

For each demonstrated value, create a `280px`-wide row with a `16px`-high variable-bound bar, the visible value such as `16px`, and one short example label such as `Default component padding`. Keep every bar at its true pixel length; do not scale it. The complete scale remains visible in the reference above. Show exact searchable names alongside familiar labels; implementation code syntax is unnecessary.

Create these comparison examples:

- Do: `Use one spacing value consistently for elements with the same relationship.` Show three items with equal `16px` gaps.
- Don't: `Do not mix arbitrary gaps inside the same group.` Show `14px`, `18px`, and `22px` gaps labeled as incorrect.

Finish with: `Consistent spacing preserves grouping and helps controls remain easy to identify.` Report the design checks actually performed and the remaining implementation checks under [Accessibility](accessibility.md).

The guide fails QA if any spacing or shared size is missing, if a measured bar differs from its token value, if zero lacks a label, or if any row lacks its name, value, measurement or individual use.

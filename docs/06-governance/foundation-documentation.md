# Mandatory Foundation Documentation

Every Foundation item includes a designer-facing Figma guide in the same build. Do not ask whether to create it. A Foundation item is complete only after its underlying values, styles, assets, or rules and its guide both pass internal QA.

This requirement does not change the separate opt-in rule for Atom, Molecule, or Organism landing frames.

## Audience boundary

The Figma guide helps a designer use the system. It is not a build log, token database, or QA report.

### Show in Figma

- What the Foundation controls.
- When and how to use it.
- Representative, variable-bound examples.
- Do-and-don't examples.
- Supported modes when they change designer decisions.
- A concise accessibility status such as `✓ WCAG 2.2 AA checked` when relevant.

### Keep internal

- Complete implemented inventories and collection counts.
- Variable IDs, alias paths, scopes, and code syntax.
- Metadata dumps and state-ledger details.
- Raw contrast ratios and calculation tables.
- 4px audit output and rendering-exception reports.
- Validation steps, screenshots as evidence, and pass/fail logs.

Internal information remains in the Markdown construction specification, build ledger, and chat summary so the system can be maintained without cluttering the designer experience.

## Build sequence

1. Read the Foundation specification and approved discovery brief.
2. Inspect existing Figma values, styles, assets, and documentation.
3. Create or update the Foundation and run its internal checks.
4. Build or refresh its designer-facing guide from the actual result.
5. Inspect the guide's metadata and screenshot internally.
6. Correct defects before marking the Foundation complete.

If a Foundation changes, refresh its guide in the same change. Missing required input remains a blocker; do not invent assets or show placeholder guidance as approved work.

## Required designer-facing structure

Use only the sections that help a designer make a decision:

```text
{Foundation guide name} [FRAME, vertical Auto Layout, Fixed × Hug]
  Header
    Foundation name
    One-sentence purpose
  Section / Usage
    When to use
    How to apply it
  Section / Examples
    Representative bound specimens
  Section / Do and don't
    Focused correct and incorrect examples
  Section / Accessibility
    Concise guidance and checked status when relevant
```

Item-specific files may rename or split these sections. Do not add `Complete inventory`, `Implemented scale`, `Controlled exceptions`, `Variables and styles`, or `Validation results` sections.

## Frame construction

| Property | Construction |
| --- | --- |
| Object | Regular `FRAME`; not a published component |
| Placement | Existing Foundations or Shared Assets section; at least `64px` from adjacent top-level frames |
| Root | Vertical Auto Layout, `1200px` fixed width, Hug height, `40px` padding, `24px` section gap |
| Wider specimens | Reflow first; expand the root to the next multiple of 4 only when an actual-size specimen cannot fit |
| Header | Fill × Hug, vertical Auto Layout, `12px` gap |
| Section | Fill × Hug, vertical Auto Layout, `16px` gap |
| Specimen grid | Horizontal wrap Auto Layout, `16px` row and column gaps unless the item specifies another value |
| Styling | Use the system's semantic colors, Text Styles, radii, and effects |

Use connected instances for asset examples. Use variable-bound geometry for spacing, radius, border, color, and similar specimens. Visible labels should explain use in plain language; they must not expose implementation identifiers merely because those identifiers exist.

## Avoid circular dependencies

Foundation guides must work before the component library exists. Use text, variable-bound geometry, and approved shared assets. Do not create Buttons, fields, organisms, or product screens solely to populate a guide.

## Internal QA

Run these checks without adding the results to the Figma guide:

- The guide uses the actual implemented values, modes, styles, and assets.
- Variable bindings and connected instances remain intact.
- Structural dimensions follow the 4px construction rule.
- Text, focus rings, shadows, and examples do not clip.
- Do-and-don't examples communicate the intended rule without depending on hidden technical details.
- Accessibility claims are backed by the required tests.
- Metadata and screenshot review pass.

Report the outcome in chat or the build ledger. In Figma, show only the concise accessibility checkmark and designer-relevant guidance.

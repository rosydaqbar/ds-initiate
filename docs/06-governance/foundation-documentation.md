# Mandatory Foundation Documentation

Every Foundation item includes a designer-facing Figma guide in the same build. Its values, Styles, assets, or rules and its guide must both pass review before the item is complete. Component guides retain their separate opt-in rule.

Before building or revising a guide, read:

1. [Project Data Boundary](project-data-boundary.md)
2. [Documentation Construction Contract](documentation-visual-language.md)
3. [Documentation Acceptance](documentation-acceptance.md)
4. The owning Foundation specification

The construction contract is normative. Do not improvise a different shell, width, page placement, table anatomy, or specimen layout because another reference looks attractive.

## Documentation outcome

A complete guide lets a designer find a specific approved choice, read its resolved specification, understand its purpose, and see the correct bound/measured specimen without opening these specification files.

Every implemented color, token, Text Style, Effect Style, shared size, and reusable asset treatment in approved scope requires a visible reference entry. Every approved behavioral rule requires visible guidance.

A reference entry contains:

- familiar designer-facing name;
- exact searchable token, Style, or asset name when applicable;
- actual resolved value and unit;
- all supported mode values when applicable;
- concise row-specific purpose and usage;
- actual bound specimen, connected instance, or measured diagram;
- applicable restriction, pairing, state, or alternative when needed.

A family description does not replace individual entries. A small selection of examples does not replace complete approved reference coverage.

## Public reference and internal evidence

Required designer-facing information:

- complete approved palette ramps, base colors, and alpha values;
- complete semantic roles with every supported mode resolution;
- every implemented Text Style and its usable metrics;
- every shared spacing, size, radius, border, layout, elevation, and motion role;
- every approved icon and reusable asset treatment in scope;
- concrete usage and misuse guidance;
- pair-specific contrast results only when actually tested and useful for a designer decision.

Keep execution evidence out of the designer-facing guide:

- node IDs and variable IDs;
- alias traversal logs;
- scopes and serialized bindings;
- raw API responses;
- screenshot evidence;
- validation logs;
- variant calculations and build ledgers.

Do not reproduce another design system's brand, names, proprietary wording, palette, or asset catalog.

## Coverage by Foundation

| Foundation | Complete reference required | Canonical documentation pattern |
| --- | --- | --- |
| Design Tokens | Collection purposes, naming grammar, mode behavior, primitive → semantic → consumer traceability | `P5 — Guidance and traceability` |
| Colors | Every approved primitive/source value, base value, and alpha value | `P1 — Palette families` |
| Color variables | Every approved semantic role and every supported mode resolution | `P2 — Semantic variable table` |
| Typography | Every implemented Text Style and approved typeface/weight capability | `P3 — Specimen rows` |
| 4px Grid | Construction rule, exceptions, and measured examples | `P4 — Measured diagrams` |
| Spacing | Every spacing token and zero behavior | `P4 — Measured diagrams` |
| Grid and Layout | Every breakpoint, margin, gutter, column, container, and reflow rule | `P4 — Measured diagrams` |
| Radius | Every radius role | `P4 — Measured diagrams` |
| Borders | Every stroke/focus-width role and approved treatment | `P4 — Measured diagrams` |
| Elevation | Every Effect Style and every effect layer | `P3 — Specimen rows` |
| Iconography | Every approved icon and supported treatment/size | `P3 — Specimen rows` |
| Illustration and Imagery | Every approved reusable treatment and ratio | `P3 — Specimen rows` |
| Motion | Every duration/easing role, trigger, animated property, and reduced-motion replacement | `P3 — Specimen rows` plus prototypes |
| Accessibility | Every approved design requirement and verification boundary | `P5 — Guidance and comparisons` |
| Content | Every approved writing/formatting rule with correct/incorrect examples | `P5 — Guidance and comparisons` |

This mapping is fixed. Do not choose another body pattern for variety.

## Canonical shell and canvas placement

All Foundation guides use the exact root width, header shell, body padding, section rhythm, footer, canvas order, and `200px` horizontal frame spacing defined in [Documentation Construction Contract](documentation-visual-language.md).

Do not restate alternative geometry inside an item file. If an item recipe conflicts with the construction contract, stop and report the exact conflict rather than choosing a different geometry silently.

When a guide exceeds a reasonable canvas height, create a continuation frame using the same canonical width and shell. Do not compress the guide, shrink text, change its assigned root width, or omit approved entries.

## Values and bindings

- Read implemented values and names from Figma after the underlying Foundation exists.
- Populate visible labels and native descriptions from the same resolved record.
- Bind each specimen to the value it claims to demonstrate.
- A hex or numeric label without an actual bound/measured specimen is incomplete.
- Set appearance mode explicitly on mode-dependent sample containers.
- Resolve cross-collection aliases and alpha internally; show designer-facing resolved source names, never raw alias IDs.
- Text samples use their actual Text Style.
- Spacing, size, radius, border, and layout specimens measure the actual value at true size.
- Effect specimens use the actual Effect Style.
- Connected assets remain connected.
- Missing project-sensitive input is a blocker under [Project Data Boundary](project-data-boundary.md); never borrow another project's value.

## Reference-specific requirements

### Colors

Use `P1 — Palette families`. The family sequence comes from the approved project palette. Do not assume brand, neutral, red, green, or yellow families exist unless they are approved for that project.

### Color variables

Use `P2 — Semantic variable table`. The semantic-group order comes from the owning Color specification. Parent/child connectors appear only for relationships explicitly declared in the specification.

### Typography, effects, assets, motion

Use `P3 — Specimen rows`. Each displayed specimen uses the actual project object, not a redrawn stand-in.

### Dimensions and layout

Use `P4 — Measured diagrams`. Measurements render at true size and use the project's actual values.

### Design Tokens, Accessibility, Content

Use `P5 — Guidance and comparisons`. Do not convert these into a dashboard of equal cards or a long implementation dump.

## Reference adaptation

If the user supplies a reference, inspect it to understand the information problem, then select the already-defined canonical pattern. Do not copy its arbitrary frame width, card style, font, token names, copy, or palette.

If the current canonical patterns cannot represent the approved information, stop and report the unsupported requirement instead of inventing a new documentation geometry.

## Build sequence

1. Read approved Discovery and project inputs.
2. Read the four documents listed at the top of this file.
3. Determine the Foundation's canonical pattern from the fixed mapping.
4. Record the expected approved inventory before implementation.
5. Build or repair the underlying Foundation.
6. Reconcile approved versus implemented values.
7. Build the guide using the exact canonical shell and assigned pattern.
8. Reconcile approved versus implemented versus documented entries.
9. Screenshot-review the whole hierarchy and the first/last reference rows.
10. Fix any contract, binding, content, clipping, or brand-leak failure before marking complete.

## Acceptance failures

A Foundation guide is incomplete when any of these occur:

- an approved value, role, Style, asset, or rule is missing;
- the visible value differs from the implemented value;
- a specimen is unbound, stale, reused incorrectly, detached, or not true-size where measurement matters;
- usage text is generic or duplicated across distinct entries;
- the wrong canonical pattern is used;
- root width, header shell, body rhythm, table anatomy, or canvas placement differs from the construction contract;
- another project's brand name, palette, font, copy, or token mapping appears as current-project input without approval;
- a reference is copied literally instead of being represented through the framework contract;
- text clips, rows overlap, mode labels are wrong, or hierarchy is structurally ambiguous;
- screenshot QA was not actually performed.

## Accessibility status

Use scoped evidence statements only. A design specimen can establish visual checks such as a named contrast pairing or target geometry, but it cannot prove production keyboard, screen-reader, or whole-product conformance.

Name completed design checks and remaining implementation checks separately. See [Accessibility](../01-foundations/accessibility.md).
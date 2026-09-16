# Design System Build Specifications

This repository uses Atomic Design for composition/build order and a deterministic documentation construction contract for designer-facing Figma output.

The framework is brand-agnostic. Read [Project Data Boundary](06-governance/project-data-boundary.md) before generating or maintaining project-sensitive values.

## Atomic Design and Figma organization

| Atomic Design level | Meaning | Figma library section |
| --- | --- | --- |
| Foundations | Shared visual rules, tokens, and reusable assets | Foundations and Shared Assets |
| Atoms | Smallest reusable UI components | Base Components |
| Molecules | Small combinations of atoms with one clear purpose | Base Components |
| Organisms | Larger reusable combinations | Components |
| Patterns | Requested guidance for recurring tasks | Patterns and Utility |

Atomic Design determines build order. Product-surface labels are not library levels.

## Documentation structure

- [Discovery](00-discovery/README.md)
- [Foundations](01-foundations/README.md)
- [Atoms](02-atoms/README.md)
- [Molecules](03-molecules/README.md)
- [Organisms](04-organisms/README.md)
- [Patterns](05-patterns/README.md)
- [Governance and build process](06-governance/README.md)

## Naming rule

Use familiar component names such as `Button`, `Checkbox`, `Modal`, or `Data table`.

Atomic level and library section remain specification metadata; do not add them to the component name.

## Mandatory construction rules

- [Project Data Boundary](06-governance/project-data-boundary.md)
- [4px construction grid](01-foundations/4px-grid.md)
- [Figma construction standard](06-governance/figma-construction-standard.md)
- [Documentation Construction Contract](06-governance/documentation-visual-language.md)
- [Executable component specification format](06-governance/component-specification-format.md)

Every structural choice that can be specified exactly must be represented as an exact measurement, fixed ordering rule, calculation, decision table, or blocking question rather than free-form visual taste.

## Figma documentation requirements

| Item level | Timing | Completion rule |
| --- | --- | --- |
| Foundations | Mandatory in the same build | Underlying Foundation and canonical designer guide complete together |
| Atoms, Molecules, Organisms | Optional after component QA and explicit approval | Production component can complete without a guide |

Foundation guides do not choose their layout ad hoc. [Documentation Construction Contract](06-governance/documentation-visual-language.md) fixes page order, root widths, shell geometry, documentation typography scale, pattern mapping, table/specimen/measured layouts, canvas placement, and screenshot QA.

The current project supplies brand-sensitive values through approved Discovery. The reusable repository supplies the construction grammar.

Use [Mandatory Foundation Documentation](06-governance/foundation-documentation.md) and [Documentation Acceptance](06-governance/documentation-acceptance.md) for Foundation coverage and validation.

Use [Optional Component Documentation](06-governance/optional-component-documentation.md) only after the named component passes QA and the user approves that guide.

Do not treat external references or example projects as brand defaults.
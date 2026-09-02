# Design System Build Specifications

This documentation uses Atomic Design for both composition and organization.

## How the two structures work together

| Atomic Design level | What it means | Figma library section |
| --- | --- | --- |
| Foundations | Shared visual rules and design tokens | Foundations and Shared Assets |
| Atoms | Smallest reusable UI components | Base Components |
| Molecules | Small combinations of atoms with one clear purpose | Base Components |
| Organisms | Larger reusable combinations of atoms and molecules | Components |
| Patterns | Guidance for recurring tasks that use several components | Patterns and Utility |

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

Use the component's familiar name: `Button`, `Checkbox`, `Modal`, or `Data table`. Atomic level and library section are metadata inside its specification; they are not added to the component name.

Avoid conceptual category names in the Assets panel. Designers should search for the component they need, not understand the methodology first.

## Mandatory construction rules

- [4px construction grid](01-foundations/4px-grid.md)
- [Figma construction standard](06-governance/figma-construction-standard.md)
- [Executable component specification format](06-governance/component-specification-format.md)

Every item file states the exact Figma building block to create.

## Figma documentation requirements

| Item level | Documentation timing | Completion rule |
| --- | --- | --- |
| Foundations | Mandatory in the same build; no separate opt-in question | Values, assets, or rules and their designer guide are completed together |
| Atoms, Molecules, Organisms | Optional after internal component QA; ask the user first | The component can be complete without designer documentation |

Use [Mandatory Foundation Documentation](06-governance/foundation-documentation.md) for Foundation guides and [Optional Component Documentation](06-governance/optional-component-documentation.md) for component landing frames. Both are adaptive to the actual built result.

Designer-facing Figma frames use a readable editorial structure with purpose, usage, focused annotated examples, actual permutations when relevant, do-and-don't guidance, and a concise accessibility status. Every displayed specimen includes its familiar name, resolved designer-facing value, and explanation. Complete implementation inventories, long token tables, specimen dashboards, implementation data, and QA evidence stay in the Markdown specifications, native Figma panels, and build ledger.

# Foundations

Foundations define the shared visual language used by every generated project's components.

Project-sensitive values come from approved Discovery. The framework defines how those values are constructed and documented. Read [Project Data Boundary](../06-governance/project-data-boundary.md).

Figma documentation is mandatory for every Foundation item in requested scope. Build it alongside the underlying values, Styles, assets, or rules. The Foundation is complete only when both implementation and guide pass QA.

Read [Documentation Construction Contract](../06-governance/documentation-visual-language.md) and [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md) before building any guide.

Documentation layout is not selected ad hoc. Use the fixed mapping below.

| Foundation | Specification | Canonical guide pattern | Root width |
| --- | --- | --- | ---: |
| Design tokens | [design-tokens.md](design-tokens.md) | P5 — Guidance and traceability | `1600px` |
| Colors | [color.md](color.md) | P1 — Palette families | `2848px` |
| Color variables | [color.md](color.md) | P2 — Semantic variable table | `2528px` |
| Typography | [typography.md](typography.md) | P3 — Specimen rows | `1600px` |
| 4px construction grid | [4px-grid.md](4px-grid.md) | P4 — Measured diagrams | `1600px` |
| Spacing | [spacing.md](spacing.md) | P4 — Measured diagrams | `1600px` |
| Grid and layout | [grid-and-layout.md](grid-and-layout.md) | P4 — Measured diagrams | `1664px` |
| Radius | [radius.md](radius.md) | P4 — Measured diagrams | `1600px` |
| Borders | [borders.md](borders.md) | P4 — Measured diagrams | `1600px` |
| Elevation | [elevation.md](elevation.md) | P3 — Specimen rows | `1600px` |
| Iconography | [iconography.md](iconography.md) | P3 — Specimen rows | `1600px` |
| Logos | [logos.md](logos.md) | P3 — Specimen rows when approved artwork exists | `1600px` |
| Illustration and imagery | [illustration-and-imagery.md](illustration-and-imagery.md) | P3 — Specimen rows | `1664px` |
| Motion | [motion.md](motion.md) | P3 — Specimen rows + prototypes | `1600px` |
| Accessibility | [accessibility.md](accessibility.md) | P5 — Guidance and comparisons | `1600px` |
| Content | [content.md](content.md) | P5 — Guidance and comparisons | `1600px` |

All guides use the canonical header/footer, body rhythm, typography scale, and canvas-placement rules from the construction contract.

Foundation values are populated only from the approved current-project brief, approved proposals, or supplied production sources. Do not borrow another project's palette, typeface, radius, assets, copy, or semantic mapping.

The 4px construction grid is mandatory for structural layout. Execution IDs and raw QA evidence stay out of designer-facing documentation.
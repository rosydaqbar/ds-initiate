# Quality Checklist

## Structure

- Auto Layout is used where content changes.
- Structural X, Y, W, H, padding, gap, and finite radius values are whole-number multiples of `4px`.
- Only documented stroke, icon/vector, shadow, and pill exceptions are off-grid.
- Long/short content resizes correctly.
- Component instances do not require detachment.
- Repeated internal responsibilities use private components.

## Properties and states

- Property names are consistent.
- Optional content uses component properties rather than duplicate variants.
- Invalid combinations are not created.
- Required interaction states are present.
- Each public component set contains `≤30` variants.
- Variant math is written in the component specification and matches Figma.

## Project-data isolation

- [Project Data Boundary](project-data-boundary.md) was read before implementation.
- Brand/product names come from the current project's approved input.
- Concrete palette values come from the current project.
- Typeface families/weights come from the current project.
- Radius/density/elevation/motion character comes from the current project.
- Logos/icons/imagery/illustrations/product copy come from the current project.
- Example-project brand, color, font, node ID, Figma URL, token mapping, or distinctive copy is not used as current-project input without explicit approval.
- Missing project-sensitive input stops the build rather than triggering a fallback to an example value.

## Foundations

- No hard-coded component colors unless explicitly approved as the semantic contract.
- Components do not bind directly to raw primitives under the default architecture.
- Every approved appearance mode resolves correctly.
- Every collection has one clear responsibility.
- Spacing, radius, typography, and effects use approved shared variables/Styles.
- Every built Foundation has mandatory designer documentation in the same workflow.
- Foundation implementation and guide pass metadata, structural, coverage, and screenshot QA before dependent component work begins.

## Canonical Foundation documentation

- Page order matches [Documentation Construction Contract](documentation-visual-language.md).
- Assigned root width matches the fixed Foundation-width table.
- Top-level guide frames are aligned at `Y = 0`.
- Adjacent top-level guide frames have exactly `200px` horizontal gap.
- Header uses the canonical `476px` shell.
- Body uses canonical padding and `112px` major-section rhythm.
- Guide uses its assigned `P1`/`P2`/`P3`/`P4`/`P5` pattern.
- Footer uses canonical construction.
- Documentation typography uses the current project's approved interface typeface with the fixed documentation scale.
- External references did not override framework geometry or current-project brand values.

## Pattern-specific documentation

### P1 — Palette families

- Root `2848px`.
- Normal swatches `160×156px`.
- Approved anchor swatch `224×156px` only when the project defines an anchor.
- Preview `80px` high.
- Swatch radius `12px`.
- Normal swatch gap `32px`.
- Sequence matches approved source order.

### P2 — Semantic variable table

For a two-mode system:

- Root `2528px`.
- Columns `820 | 360 | 360 | 828`.
- Header `56px`.
- Default row `88px` before wrapping.
- Mode swatches `28×28px`.
- `1px` row dividers.
- Child connector area `48×48px` and only for explicit relationships.

For one mode, columns are `820 | 480 | 1068`.

More than two modes use continuation frames rather than squeezed extra columns.

### P3 — Specimen rows

- Correct assigned root width.
- Row minimum `120px`.
- `32px` vertical padding.
- `24px` specimen/annotation gap.
- Connected/actual specimen at `100%` scale.

### P4 — Measured diagrams

- Row minimum `144px`.
- `32px` vertical padding.
- `360px` label/specification column.
- `32px` gap.
- True-size measurement; no convenience scaling.

### P5 — Guidance and comparisons

- Root `1600px`.
- Reading column `800px`.
- Comparison `1120px` total.
- Comparison columns `548px + 24px + 548px`.

## Accessibility

- Visible focus is defined for interactive controls.
- Keyboard behavior is documented where implementation is required.
- Status does not rely on color alone.
- Content survives approved localization/zoom requirements.
- Design-only evidence is not overstated as production conformance.

## Markdown specification — always required

- Purpose, anatomy, properties, states, usage, and accessibility are documented.
- Public/private publishing status is correct.
- Exact page, Figma object, layer tree, measurements, bindings, interactions, and QA are specified.
- Foundation item links to the canonical mandatory documentation contract.
- Component item contains an optional documentation recipe used only after QA and approval.
- Construction decisions are exact measurements/rules or explicit blockers, not free-form aesthetic choices.

## Component documentation — only after approval

- Component passed production QA first.
- User approved documentation for the named component.
- Root shell/section order follows [Optional Component Documentation](optional-component-documentation.md).
- Every specimen is connected and at `100%` scale.
- Every public axis/property/default/constraint is documented.
- Required anatomy/dimensions table matches implementation.
- No private helper/API is exposed.
- Final metadata/screenshot pass confirms no clipping or structural drift.

## Complete reference acceptance

- Approved, implemented, and documented inventories reconcile under [Documentation Acceptance](documentation-acceptance.md).
- Every approved value has the required bound/measured specimen and usage.
- Native descriptions match visible purpose.
- First/last rows/specimens of every group were screenshot-reviewed.
- Generic repeated copy, stale values, missing modes, invented hierarchy, wrong canonical geometry, clipping, overlap, or project-data leakage fail acceptance.
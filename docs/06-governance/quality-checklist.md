# Quality Checklist

## Structure

- Auto Layout is used where content changes.
- X, Y, W, H, padding, gap, and finite radius values are whole-number multiples of 4.
- Only documented stroke, icon/vector, shadow, and pill exceptions are off-grid.
- Long and short content resize correctly.
- Component instances do not require detachment.
- Repeated internal parts use private components.

## Properties and states

- Property names are consistent.
- Optional content uses component properties rather than duplicate variants.
- Invalid combinations are not created.
- Required interaction states are present.
- Each public component set contains no more than 30 variants.
- Variant math is written in the component specification and matches Figma.

## Foundations

- No hard-coded component colors and no component bindings to `Primitives`.
- Approved brand values are resolved and every supported appearance mode works; no generic brand placeholders remain.
- Every variable collection has one clear responsibility and uses the approved collection structure.
- Spacing, radius, typography, and effects use shared values or styles.
- Every built Foundation has its mandatory Figma documentation, created in the same workflow without a separate opt-in question.
- The Foundation and its documentation pass metadata and screenshot QA before the item is complete or dependent component work begins.
- Foundation specimens reflect actual variables, styles, assets, and supported modes under [Mandatory Foundation Documentation](foundation-documentation.md).

## Accessibility

- Focus is visible.
- Keyboard behavior is documented.
- Status does not rely on color alone.
- Content survives localization and zoom.

## Markdown specification — always required

- Purpose, anatomy, properties, states, usage, and accessibility are documented.
- Public/private publishing status is correct.
- Realistic examples are present.
- The exact page, Figma object, layer tree, measurements, variable bindings, interactions, and QA are documented.
- Each Foundation has an adaptive recipe for mandatory Figma documentation; each Atom, Molecule, and Organism has a recipe for its optional landing frame.

## Component landing documentation — only after user approval

- The component passed component QA before documentation construction began.
- The user explicitly approved documentation for this named component.
- The frame follows [Optional Component Documentation](optional-component-documentation.md).
- Every specimen remains connected and reflects the finished component's actual API, measurements, bindings, and behavior.
- Irrelevant sections and unbuilt options are omitted.
- The visible frame focuses on purpose, usage, actual permutations, and do-and-don't examples.
- Accessibility appears as a concise checked status plus any remaining designer responsibility.
- Inventories, binding tables, alias paths, metadata, contrast calculations, 4px audit output, and validation logs are not shown in the Figma frame.
- A final metadata inspection and screenshot pass confirms the documentation without changing the component API.

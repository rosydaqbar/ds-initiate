# Figma Construction Standard

This is the mandatory build contract for every item in this design system. An item document is complete only when another designer can build it without inventing measurements or architecture.

## Documentation requirement by level

- **Foundations:** build and validate the documentation in the same workflow as the values, assets, or rules. Do not ask for a separate opt-in. Follow [Mandatory Foundation Documentation](foundation-documentation.md).
- **Atoms, Molecules, and Organisms:** finish component QA, then ask before building the optional landing frame. Follow [Optional Component Documentation](optional-component-documentation.md).

The component completion boundary below applies to Atoms, Molecules, and Organisms; it does not waive mandatory Foundation documentation.

## Choose the correct Figma object

| Need | Create |
| --- | --- |
| No visual axis and only editable content | One main component with text, boolean, and instance-swap properties |
| One or more visual axes such as size or state | One component set if the Cartesian product is 30 variants or fewer |
| More than 30 combinations | Multiple public component sets split by the primary visual style |
| Independent optional or replaceable content | A nested private component named `_{Parent}/{Part}` |

Never encode editable text, icon choice, icon visibility, or arbitrary content as variants. Use Figma component properties.

## Required item-document sections

Every Atom, Molecule, and Organism file must specify:

1. The page and exact public/private objects to create.
2. The component-set split and variant count calculation.
3. A layer tree using final Figma layer names.
4. Exact size, padding, gap, alignment, radius, and resizing behavior.
5. Variant axes, property names, types, defaults, and preferred values.
6. Semantic variable and Style bindings for every visual property.
7. Prototype reactions where interaction states are represented.
8. A 4px and accessibility QA checklist.
9. An item-specific optional documentation recipe that is used only after the finished component is validated and the user approves the separate documentation step.

These implementation details remain in Markdown and internal QA. The optional Figma landing frame contains designer-facing usage, actual component permutations, do-and-don't examples, and concise accessibility status.

## 4px construction

Follow [the 4px construction grid](../01-foundations/4px-grid.md). Structural values must be divisible by 4. The controlled exceptions are `1px` borders/dividers, approved icon strokes, vector-path optical adjustment, shadow details, and the pill-rendering radius.

## Auto Layout rules

- Production frames use Auto Layout unless the element is a vector or a documented overlay.
- Default component width is `Hug contents`; use `Fill container` only inside a parent designed to stretch.
- Fixed control heights come from `size/control/*` variables.
- Text layers use `Hug contents` and remain visible in the Layers panel.
- Decorative layers are not used to create padding.
- Use `Min width` or `Min height` rather than invisible spacer rectangles.
- Use absolute positioning only for overlays, centered loading indicators, unread badges, or similarly layered content documented in the item file.

## Component properties

Use sentence-case display names:

- `Label` — `TEXT`
- `Show leading icon` — `BOOLEAN`
- `Leading icon` — `INSTANCE_SWAP`
- `Show trailing icon` — `BOOLEAN`
- `Trailing icon` — `INSTANCE_SWAP`
- `Supporting text` — `TEXT`
- `Disabled` or `Loading` — nested properties when independent of the public visual axes

Expose only properties that consumers should edit. Keep internal slot mechanics private.

## Variable binding

Create variables before components. Bind fills, strokes, text colors, padding, gaps, dimensions, radii, opacity, and boolean visibility wherever Figma permits. `Color` roles must alias `Primitives`; component layers must not bind directly to `Primitives`.

- Containers use `color/background/*`.
- Text uses `color/text/*`.
- Icons and vectors use `color/icon/*`.
- Strokes use `color/border/*`.
- Components bind global semantic roles by default. Add `component/{name}/*` aliases only when the component-token criteria in [Design Tokens](../01-foundations/design-tokens.md) are met.

Text uses Text Styles. Shadows use Effect Styles. Code syntax is set only after the production token names are known.

## Variant presentation

Lay component variants out inside their component set with:

- `State` as columns.
- `Size` and then `Intent` as rows.
- `16px` gap between variants.
- `40px` internal set padding.
- `64px` between public component sets.

Variant presentation is part of component construction. A separate landing frame is not. After component QA passes, follow [Optional Component Documentation](optional-component-documentation.md): ask the user whether to build it and proceed only after explicit approval.

## Component completion boundary

- Build and validate the production component before offering documentation.
- Do not create a landing frame, placeholder frame, or documentation-only helper during the default component build.
- Ask the item-specific documentation question only after metadata and screenshot validation pass.
- If approved, derive the frame from the finished Figma component and its item specification; do not rely on a static specimen template.
- Keep variant math, variables, bindings, metadata, contrast ratios, and validation results out of the designer-facing frame.
- Show purpose, usage, actual variants and properties, do-and-don't examples, and concise accessibility status.
- Documentation approval for one item does not authorize documentation for another item.

## Naming

- Public components: PascalCase, for example `Button`.
- Style-split sets: `Button/Primary`, `Button/Secondary`.
- Private parts: `_Button/Content`, `_Input/Indicator`.
- Variant properties: `Size=Small, Intent=Default, State=Hover`.
- Property values use Title Case; booleans use native `true` and `false`.

## Required internal QA

- Component set contains no more than 30 variants.
- Every instance remains connected to a main component.
- No production layer has fractional X, Y, W, or H values.
- Structural measurements are divisible by 4.
- Only documented stroke, vector, shadow, and pill exceptions remain.
- Every visual property uses a semantic variable or approved Style.
- Text expansion to 200% does not clip critical content.
- Interactive controls expose visible focus and meet a minimum `44×44px` target in product composition.
- Light and Dark modes are reviewed for the approved brand; additional branded themes are reviewed only when explicitly included in scope.
- The published asset name, description, status, and owner are present.
- Component completion does not depend on an optional documentation landing frame.

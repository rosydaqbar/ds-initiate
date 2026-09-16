# Figma Construction Standard

This is the mandatory build contract the framework follows for every generated item. An item specification is complete only when another executor can build it without inventing architecture, measurements, or project-sensitive values.

Read [Project Data Boundary](project-data-boundary.md) before applying this standard.

## Documentation requirement by level

- **Foundations:** build and validate designer documentation in the same workflow as the underlying values/assets/rules. Follow [Documentation Construction Contract](documentation-visual-language.md) and [Mandatory Foundation Documentation](foundation-documentation.md).
- **Atoms, Molecules, Organisms:** finish component QA first, then ask before building optional documentation. Follow [Optional Component Documentation](optional-component-documentation.md).

Foundation documentation is not optional. Component documentation does not define component completion.

## Project-sensitive values

Do not substitute an example project's values for missing current-project input.

The current project supplies color values, typeface, radius character, density, effects, modes, assets, content voice, and component scope. The framework defines how approved values are constructed and documented.

If a required project-sensitive value is unresolved, stop and ask the smallest specific question.

## Choose the correct Figma object

| Need | Create |
| --- | --- |
| No public visual axis | One main component with component properties |
| One or more visual axes and Cartesian product `≤30` | One component set |
| Cartesian product `>30` | Multiple public sets split by primary visual style |
| Independent repeated internal responsibility | Private nested component `_{Parent}/{Part}` |

Never encode arbitrary copy, icon choice, or simple visibility as a variant. Use Text, Boolean, and instance-swap properties.

## Required component-specification sections

Every Atom, Molecule, and Organism specification defines:

1. Figma page and exact public/private objects.
2. Component-set split and variant-count calculation.
3. Final layer tree with exact names and resizing behavior.
4. Exact dimensions, padding, gap, alignment, radius, and sizing behavior.
5. Variant axes, values, defaults, and ordering.
6. Public Text/Boolean/instance-swap properties and defaults.
7. Semantic variable and Style bindings for every visual property.
8. Prototype reactions for represented interaction states.
9. Responsive behavior when applicable.
10. Internal 4px/content/interaction/accessibility QA.
11. Optional component-documentation recipe derived from the final public API.

Do not leave structural choices to executor taste.

## 4px construction

Follow [4px construction grid](../01-foundations/4px-grid.md).

Structural X, Y, width, height, padding, gap, finite corner radius, and layout measurements use whole-number multiples of `4px`.

Controlled rendering exceptions:

- `1px` and `2px` borders;
- `1px` dividers;
- approved icon/vector strokes;
- vector optical adjustment;
- shadow/effect details;
- pill radius when represented as effectively infinite rounding.

## Auto Layout rules

- Production frames use Auto Layout unless they are vectors or explicitly layered overlays.
- Default component width = Hug contents.
- Use Fill container only when the parent contract requires stretching.
- Fixed control heights bind to approved sizing variables.
- Text layers use Hug height and remain visible in Layers.
- Do not use decorative spacer rectangles to create padding.
- Use Min width/height when minimum geometry is required.
- Absolute positioning is limited to explicitly layered content such as overlays, loading indicators, unread badges, or documented optical elements.

## Component properties

Use sentence-case public property names.

Canonical property roles:

- `Label` — `TEXT`
- `Show leading icon` — `BOOLEAN`
- `Leading icon` — `INSTANCE_SWAP`
- `Show trailing icon` — `BOOLEAN`
- `Trailing icon` — `INSTANCE_SWAP`
- `Supporting text` — `TEXT`
- independent `Disabled`/`Loading` behavior — nested property or documented state mechanism rather than arbitrary variant multiplication

Expose only properties a consumer should edit.

## Variable binding

Create approved variables before dependent components.

- `Color` semantic roles alias `Primitives` or the project's approved raw source collection.
- Production component layers do not bind directly to raw project colors unless the approved architecture explicitly says that raw color is itself the public semantic contract.
- Containers bind background/surface semantic roles.
- Text binds text semantic roles.
- Icons/vectors bind icon semantic roles.
- Strokes bind border semantic roles.
- Status elements bind property-specific status roles.
- Add component aliases only when the component-token criteria in [Design Tokens](../01-foundations/design-tokens.md) are met.

Use approved Text Styles for text and Effect Styles for elevation. Do not hard-code another project's token names merely because an example file used them.

## Variant presentation

Public component sets use deterministic canvas organization:

- `State` as columns.
- `Size`, then `Intent` as rows when those axes exist.
- `16px` gap between variants.
- `40px` component-set internal padding.
- `64px` between sibling public component sets.

When an axis does not exist, remove it rather than inventing placeholders.

## Foundation documentation construction

All mandatory Foundation guides use [Documentation Construction Contract](documentation-visual-language.md).

That contract fixes:

- page order;
- assigned root width per Foundation;
- `Y = 0` top-level alignment;
- `200px` horizontal guide gap;
- canonical `476px` documentation header;
- shared body padding and `112px` major-section rhythm;
- documentation typography scale;
- fixed Foundation → pattern mapping;
- exact semantic-variable table geometry;
- exact palette swatch geometry;
- specimen/measured/guidance pattern geometry;
- screenshot QA.

Do not reinterpret those values from an external reference. External references are explanatory evidence only.

## Optional component documentation

After a component passes QA, ask whether to build its named guide.

When approved:

- use the same canonical documentation chrome as Foundations;
- use the project's actual component instances and values;
- use connected instances at 100% scale;
- document every public axis/property without reproducing the full Cartesian product by default;
- keep private helpers, variant math, node IDs, and raw binding dumps out of designer-facing documentation;
- do not redesign the documentation shell for each component.

See [Optional Component Documentation](optional-component-documentation.md).

## Naming

- Public components: PascalCase, e.g. `Button`.
- Style-split sets: `Button/Primary`, `Button/Secondary`.
- Private parts: `_Button/Content`, `_Input/Indicator`.
- Variant properties: `Size=Small, Intent=Default, State=Hover`.
- Property values: Title Case where user-visible in the Assets panel; booleans use native `true`/`false`.

## Required internal QA

- Every public set contains `≤30` variants.
- Every production instance stays connected.
- No structural production layer has fractional geometry.
- Structural measurements follow the 4px rule.
- Only documented rendering exceptions remain.
- Visual properties bind to approved semantic variables/Styles.
- Critical content survives 200% text expansion.
- Interactive controls have visible focus and meet approved target geometry in product composition.
- Every approved appearance mode is reviewed.
- Published assets have required naming/description/ownership metadata.
- Component completion does not depend on optional documentation.
- Mandatory Foundation guides match the canonical documentation geometry and assigned pattern.
- No example-project brand value appears as an unapproved current-project value.

## Documentation completeness gate

Follow [Documentation Acceptance](documentation-acceptance.md).

Reject a guide when:

- approved/implemented/documented inventories disagree;
- a specimen is not actually bound/measured as claimed;
- visible values are stale;
- required entries are absent;
- the wrong canonical documentation pattern is used;
- canonical frame width, shell, body rhythm, table geometry, or canvas placement differs;
- screenshot review shows clipping, weak grouping, overlap, or brand leakage;
- an example project's identity has been used as unapproved current-project input.
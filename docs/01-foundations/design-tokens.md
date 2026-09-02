# Design Tokens

**Library section:** Foundations

## Purpose

Store reusable design decisions once, give each decision a clear meaning, and connect those decisions to Figma components.

## Token layers

Use these responsibilities; do not add a layer without a distinct purpose.

| Layer | Responsibility | Designer use |
| --- | --- | --- |
| `Primitives` | Raw approved values such as color ramps | Hidden from normal component work |
| Global semantic collections | Reusable roles such as background, text, spacing, and radius | Default choice for components and compositions |
| `Component` aliases | Optional roles owned by one component family | Added only when a component needs an independent contract |

Brand colors are raw color families inside `Primitives`. Reusable UI roles, such as a brand action background, belong in `Color`.

## Create in Figma

Create only the collections required by the approved scope:

| Collection | Modes | Contents |
| --- | --- | --- |
| `Primitives` | `Value` | Raw brand, secondary, neutral, red, green, yellow, and blue color scales; white, black, transparent, and approved alpha values |
| `Color` | `Light`, `Dark` | Globally reusable background, text, icon, border, status, focus, and overlay roles |
| `Spacing` | `Value` | The approved 4px spacing scale |
| `Sizing` | `Value` | Control, icon, target, and other shared dimensions |
| `Radius` | `Value` | Role-based corner values such as control, surface, media, and pill |
| `Border` | `Value` | Approved border and focus-ring widths |
| `Layout` | `Value` | Breakpoint examples, margins, gutters, columns, and container widths |
| `Motion` | `Value` | Approved duration and easing roles |
| `Typography` | `Value` when needed | Font family, weight, size, and line-height values when the implementation requires atomic typography variables |

Create Text Styles for usable type combinations and Effect Styles for elevation. Create only the listed collections, and keep one clear responsibility per collection.

## Global semantic color contract

Color names describe the property first and then its meaning:

- `color/background/surface`
- `color/background/brand/default`
- `color/text/primary`
- `color/text/on-brand`
- `color/icon/primary`
- `color/border/focus`
- `color/status/error/background`

The Light and Dark values alias `Primitives`. Components use these semantic roles by default and never bind directly to raw palette values.

## Optional component tokens

Do not create component tokens during Foundations merely because a component might exist later. Add them while building a component only when at least one condition is true:

- The component needs a stable public styling contract independent of the current global role.
- Several parts or states repeat the same mapping and a component name makes ownership clearer.
- A future change to this component should not change unrelated components using the same global role.

Example:

```text
component/button/primary/background/default
→ color/background/brand/default
→ primitives/color/brand/600
```

Do not reuse a `component/button/*` token in another component. If several unrelated components need the same decision, that decision belongs in a global semantic collection instead.

## Internal build order and QA

1. Create approved raw values in `Primitives` and hide them from normal property scopes.
2. Create global semantic roles with narrow scopes and mode-aware aliases.
3. Create the required non-color collections using common, specific names.
4. Create Text Styles and Effect Styles.
5. Set code syntax only when an actual production token source exists.
6. Verify aliases, scopes, modes, and hard-coded-value absence internally.
7. Add component aliases later only when a built component meets the criteria above.

Internal metadata, collection counts, alias IDs, code syntax, and validation logs must not appear in designer-facing Figma documentation.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Create `Design Tokens` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Include:

- A plain-language diagram explaining `Primitives` → global semantic role → optional component alias.
- A short “How to choose a token” section based on property and purpose.
- Representative examples for color, spacing, radius, typography, and motion.
- A Light and Dark example showing that the role stays the same while its value changes.
- Do-and-don't examples for semantic selection and raw-value avoidance.

Do not show a complete implemented inventory, collection counts, alias paths, variable IDs, scopes, code syntax, or QA results in the Figma frame.

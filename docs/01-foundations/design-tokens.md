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
→ Primitives collection: color/brand/600
```

Do not reuse a `component/button/*` token in another component. If several unrelated components need the same decision, that decision belongs in a global semantic collection instead.

## Internal build order and QA

1. Create approved raw values in `Primitives` and hide them from normal property scopes.
2. Create global semantic roles with narrow scopes and mode-aware aliases.
3. Create the required non-color collections using common, specific names.
4. Create Text Styles and Effect Styles.
5. Populate EVERY variable and Style description with its purpose, state and usage restrictions. Descriptions must distinguish neighboring roles, even if their values match. Set code syntax only when an actual production token source exists.
6. Verify aliases, scopes, modes, and hard-coded-value absence internally.
7. Add component aliases later only when a built component meets the criteria above.

Internal metadata, collection counts, alias IDs, code syntax, and validation logs must not appear in designer-facing Figma documentation.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Design Tokens` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

### Required visible structure and copy

```text
Documentation / Design Tokens
  Header
    Design tokens
    Design tokens store reusable design decisions and connect those decisions to components.
  Overview
  Collection and naming reference
  How tokens are organized
  How to choose a token
  Examples
  Appearance modes
  Do and don't
```

Use this overview copy: `A token gives a shared design decision a stable meaning. Designers choose a token by what an element does; the system resolves the approved value.`

Create a three-step horizontal diagram inside one annotated example block. Use `304px`-wide steps, `24px` padding, and visible arrows between them:

| Card | Required title | Required copy | Example label |
| --- | --- | --- | --- |
| 1 | Palette values | `Approved raw values provide the source material for the system.` | `Brand 600 · #RRGGBB` using the actual approved value |
| 2 | Reusable roles | `A role names how a value is used across interfaces.` | `Background / Brand / Default` |
| 3 | Component choices | `A component uses the reusable role unless it needs an independent, stable decision.` | `Primary action background` |

Show exact searchable names and resolved values alongside those plain-language labels. Trace one actual source → semantic role → consumer relationship, naming the collection separately from the variable. Do not prepend `primitives/` to a variable that is actually named `color/brand/600`. If no component exists yet, use a labeled bound shape as the consumer.

Create `How to choose a token` as three numbered steps with this exact copy:

1. `Identify the property you are styling: background, text, icon, border, spacing, size, radius, type, elevation, or motion.`
2. `Choose the role that matches the element's purpose and state.`
3. `Use the component-specific choice only when the component documentation explicitly provides one.`

Create a visible naming reference for EVERY used collection from the table above. Explain its purpose, exact naming grammar, type, mode behavior and owning guide. Point to the complete Color, Typography, Spacing/Sizing, Radius, Border, Layout, Elevation and Motion references rather than duplicating their catalogs. Use stable property/purpose/state naming. Never replace `spacing/*` with `space/*`, or `color/background/brand/default` with `color/action/primary`, without an explicit migration.

Create five `240px`-wide examples for `Color`, `Spacing`, `Radius`, `Typography`, and `Motion` inside one wrapping annotated block. Each example must contain a familiar name, its resolved value, and one sentence explaining the decision. Use implemented values rather than placeholder values.

Create two `480×240px` appearance cards labeled `Light` and `Dark`. Demonstrate the same `Background / Surface` role resolving to the current value in each mode. Show both resolved hex values and add: `The role and purpose remain the same while the resolved value changes.`

Create these comparisons:

- Do: `Choose the reusable role that describes the element's purpose.`
- Don't: `Do not select a raw value only because it looks similar.`
- Do: `Reuse one decision everywhere it has the same meaning.`
- Don't: `Do not create a component-specific choice without a distinct component need.`

Keep exact searchable token names, resolved sources and values visible. Do not show IDs, raw binding/alias dumps, execution counts or QA logs. The guide fails QA when the diagram contains only abstract boxes, an example omits its resolved value, or a token choice lacks a plain-language explanation.

# Color

**Library section:** Foundations

## Required input

Approved primary and secondary brand colors, neutral direction, status-color direction, supported appearance modes, and accessibility target.

## Raw colors

Create raw scales in `Primitives`:

- `color/brand/50–950`
- `color/secondary/50–950`
- `color/neutral/50–950`
- `color/red/50–950`
- `color/green/50–950`
- `color/yellow/50–950`
- `color/blue/50–950`
- `color/white`, `color/black`, `color/transparent`, and approved alpha values

Raw names describe color families, not UI meaning. Keep them hidden from normal component-property scopes.

## Global semantic colors

Create mode-aware roles in `Color`. These are the reusable colors that designers and components normally use.

| Property | Minimum roles |
| --- | --- |
| Background | `color/background/canvas`, `surface`, `subtle`, `strong`, `inverse`, `disabled`, `overlay` |
| Brand background | `color/background/brand/default`, `hover`, `pressed`, `disabled` |
| Danger background | `color/background/danger/default`, `hover`, `pressed`, `disabled` |
| Text | `color/text/primary`, `secondary`, `subtle`, `disabled`, `inverse`, `on-brand`, `brand`, `danger` |
| Icon | `color/icon/primary`, `secondary`, `subtle`, `disabled`, `inverse`, `on-brand`, `brand`, `danger` |
| Border | `color/border/subtle`, `default`, `strong`, `focus`, `disabled`, `brand`, `danger` |
| Status | `color/status/information/*`, `success/*`, `warning/*`, `error/*`, each with `background`, `text`, `icon`, and `border` when required |

Name interaction states under the property they change: background, text, icon, or border. One design decision has one semantic role.

Use `danger` for destructive actions and `error` for validation or system-status feedback. Do not use a red value merely because it visually matches.

## Component color rule

Bind components directly to global `Color` roles first. Add a component-specific alias only when the criteria in [Design Tokens](design-tokens.md) are met.

When one component contains both text and icons, bind them separately:

- Text layers use `color/text/*`.
- Icon and vector layers use `color/icon/*`.
- Containers use `color/background/*`.
- Strokes use `color/border/*`.

## Internal QA

- No production component binds to `Primitives` or a hard-coded color.
- Light and Dark values resolve correctly.
- Text, non-text controls, focus, and interaction states meet the approved WCAG target.
- Status and selection do not rely on color alone.
- Hover, pressed, focus, and disabled states remain distinguishable without changing geometry.

Keep measured ratios and test evidence in internal QA records.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Color`. Follow [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md) and the exact content contract below.

### Frame construction

| Property | Specification |
| --- | --- |
| Root | Vertical Auto Layout; `1600px` Fixed × Hug; `0px` padding; `0px` gap; semantic canvas fill |
| Header | Fill × Hug; `80px` horizontal and `64px` vertical padding; `12px` gap |
| Article | Fill × Hug; vertical Auto Layout; `80px` padding; `64px` section gap; center alignment |
| Reading column | `800px` Fixed × Hug; vertical Auto Layout; `16px` gap; left aligned |
| Section | Vertical Auto Layout; Fill × Hug; `32px` gap; center alignment |
| Annotated example | `800px` default width; up to `1280px`; Hug height; `32px` padding; `24px` gap |
| Palette rows | Horizontal wrap Auto Layout; Fill × Hug; `12px` gap |
| Comparison row | Horizontal wrap Auto Layout; up to `1120px`; `24px` gap |

Use the approved documentation Text Styles and semantic colors. Bind every preview fill, text fill, icon fill, stroke, focus ring, and overlay to the actual `Color` or `Primitives` variable it demonstrates. The visible hex label must show the current resolved value of that binding.

### Required layer tree

```text
Documentation / Color [FRAME]
  Header [FRAME, Fill × Hug]
    Foundations
    Color
    Color creates hierarchy, communicates state, and expresses the approved visual identity.
  Article [FRAME, Fill × Hug]
    Section / Overview
      Copy [FRAME, 800 Fixed × Hug]
        Overview
        Color is organized into a palette and reusable color roles. The palette defines the available values. Color roles explain where those values belong in an interface.
        Usage principles
          Choose by purpose
          Preserve hierarchy
          Communicate more than color
    Section / Palette overview
      Copy [FRAME, 800 Fixed × Hug]
      Palette example [FRAME, 800 Fixed × Hug]
        Brand
        Secondary
        Neutral
        Feedback
    Section / Using color
      Copy [FRAME, 800 Fixed × Hug]
      Focused usage examples [FRAME, up to 1120 Fixed × Hug]
        Surfaces
        Content
        Actions
        Boundaries and focus
        Feedback
        Overlays
    Section / Appearance modes
      Copy [FRAME, 800 Fixed × Hug]
      Light and Dark comparison [FRAME, up to 1120 Fixed × Hug]
    Section / Interaction states
      Copy [FRAME, 800 Fixed × Hug]
      Brand action
      Danger action
    Section / Feedback colors
      Copy [FRAME, 800 Fixed × Hug]
      Information
      Success
      Warning
      Error
    Section / Do and don't
      Copy [FRAME, 800 Fixed × Hug]
      Semantic choice comparison
      Hierarchy comparison
    Section / Accessibility [FRAME, 800 Fixed × Hug]
      Accessibility guidance
      ✓ {approved accessibility target} checked
```

Every text line shown in this tree is a visible Figma text layer. Do not replace the overview or section introductions with layer names, annotations, or descriptions stored only in Figma metadata.

### Header and overview copy

Create the following visible text exactly:

- Title: `Color`
- Definition: `Color creates hierarchy, communicates state, and expresses the approved visual identity.`
- Overview: `Color is organized into a palette and reusable color roles. The palette defines the available values. Color roles explain where those values belong in an interface.`
- Principle: `Choose by purpose` — `Use a color role that describes the job of the element instead of selecting a palette value by appearance.`
- Principle: `Preserve hierarchy` — `Reserve the strongest colors for the most important actions, messages, and areas of emphasis.`
- Principle: `Communicate more than color` — `Pair status and selection colors with text, icons, shape, or another visible cue.`

### Palette section

Introductory copy: `The palette contains the approved color families used to create interface roles. Each swatch shows its familiar family name, step, and current resolved value.`

Create four compact family groups where the approved values exist. Place a visible title and purpose above each group:

| Group title | Required purpose copy |
| --- | --- |
| Brand | `Primary identity color used to create the strongest branded emphasis and primary action roles.` |
| Secondary | `Supporting identity color used for secondary emphasis, accents, and approved complementary moments.` |
| Neutral | `Foundation for canvases, surfaces, text, icons, borders, and disabled states.` |
| Feedback | `Supporting colors communicate information, success, warning, and error.` |

For Brand, Secondary, and Neutral, select exactly three steps that explain the usable range: one light value, the approved core value, and one dark value. For Feedback, show only the core Information, Success, Warning, and Error values. This is a palette overview, not a complete implemented inventory.

Create this structure for each selected value:

```text
{Family} {Step} [FRAME, vertical Auto Layout, 112 Fixed × Hug, 8px gap]
  Preview [RECTANGLE, 112×72, 8px radius, variable-bound fill]
  {Family} {Step} [TEXT]
  #{RRGGBB} [TEXT]
```

Use an inside `1px` subtle border on a preview only when necessary to make a very light color edge visible. Preserve the actual alpha value when a color is translucent and display it as `#RRGGBB · {opacity}%`. A swatch without both its familiar name and resolved value is incomplete.

`#RRGGBB` and `{opacity}` are instructions in this specification, never literal Figma copy. Replace them with the selected variable's actual uppercase hex value and opacity. If the value has not been approved or implemented, stop instead of showing a placeholder.

### Using color section

Introductory copy: `Choose color according to the job it performs. These focused examples show the common decisions; the complete implementation remains in Figma's variables panel.`

Create exactly six focused usage examples inside one or two annotated example blocks. Do not create a role inventory table or a dashboard of six equal cards. Each example contains one applied visual, no more than three representative role chips, a heading, and one written explanation. Every role chip shows its familiar name and current resolved hex value.

1. `Surfaces` — demonstrate Canvas, Surface, and Subtle. Copy: `Use surface roles to separate levels of content while keeping the canvas visually quiet.`
2. `Content` — demonstrate Primary text, Secondary text, and Primary icon on one surface. Copy: `Use text and icon roles to create readable emphasis without changing content size.`
3. `Actions` — demonstrate Brand background with On-brand text, plus a quieter supporting treatment. Copy: `Reserve brand emphasis for the most important action or selected state.`
4. `Boundaries and focus` — demonstrate Default border and Focus treatment. Copy: `Use borders for boundaries and the focus role only for visible keyboard focus.`
5. `Feedback` — demonstrate one compact status message using background, icon, text, and border together. Copy: `Combine feedback roles with a label and icon so meaning never depends on color alone.`
6. `Overlays` — demonstrate Overlay behind an elevated neutral surface. Copy: `Use the overlay role to separate temporary content from the underlying interface.`

When Light and Dark modes are supported, show the resolved Light and Dark value as two compact chips beside the relevant example. If one mode is supported, show one value. These examples explain representative use; they must not enumerate every role.

### Appearance modes section

Introductory copy: `Color roles keep the same meaning in every supported appearance. Their resolved values change to preserve hierarchy and readability.`

Create two `548×320px` specimen frames named `Light` and `Dark` in one `1120px` comparison block with a `24px` gap. Give each specimen `32px` padding and `24px` internal gap. Apply the corresponding mode to each frame. In both frames, show the same neutral composition made only from geometry and text: Canvas, Surface, Primary text, Secondary text, Default border, Brand emphasis, and Focus. Label every example with its role name and resolved hex value. Do not create a product screen.

### Interaction states section

Introductory copy: `Interactive colors change predictably to communicate hover, press, focus, and unavailable states without changing layout.`

Create one group for `Brand action` and one for `Danger action`. Each group contains five `224px`-wide state cards in a wrapping row with a `16px` gap:

| State | Required visible explanation |
| --- | --- |
| Default | `Resting interactive color.` |
| Hover | `Pointer-hover color; geometry stays unchanged.` |
| Pressed | `Active-press color; geometry stays unchanged.` |
| Focus | `Default color with the approved visible focus treatment.` |
| Disabled | `Unavailable color with reduced emphasis and no interactive reaction.` |

Each card contains the state name, a `176×48px` variable-bound preview with the neutral label `Action`, the background's resolved hex value, and the explanation above. Use `20px` card padding, `12px` gap, and `12px` radius. The preview uses the approved control radius. Do not build a Button component solely for this section.

### Feedback colors section

Introductory copy: `Feedback colors communicate a situation and its severity. Always combine the color treatment with a clear label and icon or equivalent cue.`

Create four `260px`-wide, Hug-height status examples in one `1120px` annotated block with `24px` gaps. Give each example `24px` padding and `16px` internal gap. Bind each background, border, icon, and text layer to its status role. Use these visible examples:

| Card | Title | Supporting copy |
| --- | --- | --- |
| Information | `Information` | `Additional details are available.` |
| Success | `Success` | `The action was completed.` |
| Warning | `Warning` | `Review this before continuing.` |
| Error | `Error` | `Something needs attention.` |

Below each card, show four compact rows labeled `Background`, `Text`, `Icon`, and `Border`, each with its resolved hex value. The status title and icon must remain visible; a colored rectangle by itself is not a status example.

### Do-and-don't section

Create these two comparison rows. Each side must contain the example, heading, and exact instruction.

**Semantic selection**

- Do: `Choose a color role by the purpose of the element.` Show a surface using `Background / Surface`, with that role name visible.
- Don't: `Do not choose a visually similar palette value for a component.` Show the same surface using a raw neutral swatch, with `Raw palette value` visible.

**Hierarchy and meaning**

- Do: `Reserve strong brand color for the most important action or emphasis.` Show one strong action and one quieter supporting action.
- Don't: `Do not give every action the same visual emphasis.` Show two competing strong actions.

### Accessibility section

Create this visible guidance:

- `Use only approved foreground and background combinations.`
- `Pair status, selection, and error colors with text, icons, or another visible cue.`
- `Do not use disabled colors for active information.`
- `✓ WCAG 2.2 AA checked` after the required checks pass, or replace the target with the approved stricter target.

Do not show raw contrast ratios or testing calculations.

### Documentation QA

The Color guide fails documentation QA when any of these conditions is true:

- A swatch omits its familiar name or resolved hex value.
- A color family omits its purpose.
- A usage example omits its explanation or the resolved value for a role it shows.
- Interaction-state examples are unlabeled or fail to explain the state change.
- A feedback example communicates only through a colored box.
- Do-and-don't examples omit their written instruction.
- The frame contains a long inventory table or attempts to reproduce every implemented value or role.
- The frame contains only palette or role boxes without the required overview and usage guidance.

Keep variable IDs, alias chains, code syntax, collection counts, raw contrast ratios, and validation logs internal. Their exclusion does not permit removing any visible designer-facing content specified above.

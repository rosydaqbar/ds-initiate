# Naming and Publishing

## Component names

Use familiar names such as `Button`, `Input Field`, `Dropdown Menu`, `Modal`, and `Data Table`.

Private implementation components begin with `_` and are not published. Documentation-only helpers begin with `.`.

## Variable names

Use stable slash-separated names such as `color/text/primary`, `color/icon/primary`, `spacing/16`, and `radius/control`.

Variant properties use `Property=Value` with Title Case values, for example `Size=Medium, State=Hover`. Public component sets are split by primary visual style when the full product would exceed 30 variants, for example `Button/Primary` and `Button/Secondary`.

## Figma placement

- Atoms: Base Components.
- Molecules: Base Components.
- Organisms: Components.

## Status

Use Draft, Beta, Stable, Deprecated. Deprecated items include a replacement and migration note.

## Reference names and descriptions

Use the same exact name in the specification, native variable/Style panel and visible guide. Display a familiar label alongside it, never instead of it. Define property, purpose and state consistently; avoid a second vocabulary such as `space/*` for `spacing/*` or `color/action/*` for action backgrounds already owned by `color/background/*`. The deliberate `color/status/{status}/{property}` family retains separate text, icon, border and background members.

Every variable and Style has a concise description stating its meaning, use, applicable state and important restriction. Equal values do not justify empty descriptions or merging distinct roles. Values shown in guides resolve from the same current source. Reference naming changes require explicit migration of all affected bindings and documentation.

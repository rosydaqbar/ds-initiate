# Motion

**Library section:** Foundations

## Figma prototype and handoff values

| Role | Duration | Easing | Use |
| --- | ---: | --- | --- |
| `motion/instant` | 0ms | none | Pressed state |
| `motion/fast` | 100ms | ease out | Hover and small state changes |
| `motion/standard` | 160ms | ease out | Menus, tooltips, disclosure |
| `motion/emphasized` | 240ms | ease in-out | Modals and drawers |
| `motion/slow` | 320ms | ease in-out | Large spatial transition |

Use Smart Animate only when matching layers preserve identity and motion explains state or spatial relationship. Prefer opacity and transform over layout-changing animation.

Reduced motion removes non-essential translation, parallax, marquee, and repeated shimmer. Replace them with instant state changes or opacity changes no longer than `100ms`.

Motion must explain state, relationship, or hierarchy. It is not added solely for decoration.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Create `Motion Guidelines` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

- Group approved motion roles by intended use and show the duration and easing designers need to select them.
- Show paired standard and reduced-motion examples.
- Use `320x160px` frames with `24px` padding and simple geometry.
- Keep matching layer names consistent between prototype states.
- Add do-and-don't examples for purposeful and decorative motion.
- Do not build production components only to demonstrate motion.
- Do not display reaction metadata or validation results. Verify reactions, labels, and reduced-motion behavior internally.

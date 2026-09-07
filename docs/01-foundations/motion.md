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

Create duration FLOAT variables named exactly `motion/instant`, `motion/fast`, `motion/standard`, `motion/emphasized` and `motion/slow` in Motion, storing milliseconds. Document and store named easing curves separately, for example `motion/easing/ease-out` and `motion/easing/ease-in-out` as STRING handoff values when variables are useful. Resolve an easing name to the exact approved cubic-bezier control points; a label such as ease out alone is not an exact timing contract. Prototype properties that cannot bind variables use the same resolved value, with drift checked internally.

Use Smart Animate only when matching layers preserve identity and motion explains state or spatial relationship. Prefer opacity and transform over layout-changing animation.

Reduced motion removes non-essential translation, parallax, marquee, and repeated shimmer. Replace them with instant state changes or opacity changes no longer than `100ms`.

Motion must explain state, relationship, or hierarchy. It is not added solely for decoration.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Motion` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md).

### Required visible structure and copy

```text
Documentation / Motion
  Header
    Motion
    Motion explains state changes, spatial relationships, and hierarchy over time.
  Overview
  Motion roles
  Standard and reduced motion
  Do and don't
  Accessibility
```

Use this overview copy: `Choose motion by the size and meaning of the change. Motion should help a person understand what happened, where an element came from, or which layer is active.`

Create a complete reference containing EVERY approved duration and easing role, followed by the applied examples. Each `240px`-wide example contains a simple `192×96px` prototype preview, exact token name, duration, numeric easing curve, animated property, trigger, purpose and reduced-motion replacement. The baseline usage sentences are:

| Role | Visible value | Required usage sentence |
| --- | --- | --- |
| Instant | `0ms · none` | `Use for a pressed state or change that must feel immediate.` |
| Fast | `100ms · ease out` | `Use for hover and small state changes.` |
| Standard | `160ms · ease out` | `Use for menus, tooltips, and disclosure.` |
| Emphasized | `240ms · ease in-out` | `Use for modals, drawers, and important transitions.` |
| Slow | `320ms · ease in-out` | `Use only for a large spatial transition that needs more time to understand.` |

Create three paired demonstrations using `320×160px` frames with `24px` padding: `Reveal`, `Move`, and `Loading`. Place `Standard motion` and `Reduced motion` side by side. Show the visible labels `Duration`, `Easing`, `Property changing`, and `Reduced-motion replacement` beneath each pair. Reduced motion removes non-essential translation and uses an instant change or opacity no longer than `100ms`.

Create one comparison row:

- Do: `Use motion to explain state, origin, destination, or hierarchy.`
- Don't: `Do not add repeated or decorative movement that communicates nothing.`

Finish with: `Provide a reduced-motion behavior for every non-essential translation, parallax effect, marquee, or repeated shimmer.` Report the design checks actually performed and the remaining implementation checks under [Accessibility](accessibility.md).

Do not build production components solely for the guide. Do not show reaction metadata or validation logs. The guide fails QA when an example omits its role, duration, easing, purpose, or reduced-motion behavior.

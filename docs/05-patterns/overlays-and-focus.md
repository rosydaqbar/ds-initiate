# Overlays and Focus Pattern

**Figma deliverable:** overlay decision matrix and linked focus prototypes

## Create in Figma

Create a `1200px` documentation frame with `40px` padding and `24px` gaps. Demonstrate each overlay anchored to a real trigger with an `8px` placement offset.

| Need | Component | Focus behavior |
| --- | --- | --- |
| Brief non-interactive clarification | Tooltip | Opens on hover/focus; focus stays on trigger |
| Supplemental interactive content | Popover | Move focus only when interaction requires it |
| Choice or action list | Dropdown/Context Menu | Arrow-key roving focus; Escape returns to trigger |
| Blocking decision or short task | Modal | Trap focus; background inert; return focus |
| Longer secondary task | Drawer | Trap focus when modal; fixed header/footer |

Tooltip/Popover/Menu use `8px` viewport inset minimum. Modal uses semantic scrim and `24px` viewport margin Desktop, `16px` Mobile. Drawer widths are `320`, `480`, or `640px`; Mobile uses full-height 360px structure. Nested overlays require an explicit focus-return chain and may not create two simultaneous scrims.

Create `Closed`, `Open`, `Edge flipped`, `Keyboard focus`, and `Dismissed` prototype frames. QA Escape, outside click policy, scroll lock, focus trap/return, reduced motion, and 4px-aligned geometry.

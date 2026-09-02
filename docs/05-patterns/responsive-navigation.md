# Responsive Navigation Pattern

**Figma deliverable:** linked navigation examples at 1440, 768, and 360 widths

## Create in Figma

Desktop uses Header Navigation `64px` high and expanded Sidebar Navigation `256px` wide. Tablet keeps the `64px` Header and uses the `64px` collapsed Sidebar. Mobile uses a `56px` Header and replaces Sidebar with either the `64px` Mobile bottom bar or a Drawer opened from the Header.

Create frames for `Default`, `Nested section expanded`, `Mobile menu open`, `Destination selected`, and `Notification present`. Use connected navigation organisms; do not make one enormous responsive component set.

Main content padding is `32px` Desktop, `24px` Tablet, and `16px` Mobile. Desktop/Tablet content begins below the Header; Mobile content reserves the chosen bottom-navigation safe region. Drawer traps focus and returns it to the menu trigger. Browser Back closes a transient navigation overlay before leaving the page when platform behavior supports it.

QA: one active destination, active state beyond color, label access in collapsed mode, complete keyboard order, no hidden destination at 200% zoom, and 4px-aligned shell geometry.

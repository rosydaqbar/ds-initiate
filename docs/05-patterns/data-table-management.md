# Data-Table Management Pattern

**Figma deliverable:** Desktop and Mobile management states built from Data Table

## Create in Figma

Use a `1200px` Desktop table region. Place Filter Bar, optional bulk-action bar, Data Table, and Pagination with `16px` gaps. Header/row height is `40px` Compact or `48px` Standard. Define every column width in 4px increments and record whether it is Fixed, Fill, or Min/Max constrained.

Create frames for `Default`, `Sorted`, `Filtered`, `Rows selected`, `Loading`, `No data`, `No results`, `Partial error`, and `Column overflow`. Bulk bar is `56px` high and shows selection count plus only actions valid for the selection. Sorting never changes column width. Loading rows match populated row count/height.

At Mobile width `328px`, choose and document one strategy: intentional horizontal scroll with persistent key column, or a separate card-list composition. Do not compress a desktop table until text becomes unreadable.

QA: sort announcement, selected-count announcement, independent focus for row controls, accessible full value for truncated cells, preserved filters/pagination, and grid-aligned table geometry.

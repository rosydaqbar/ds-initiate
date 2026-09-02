# Search and Filtering Pattern

**Figma deliverable:** one documented task flow across Desktop and Mobile frames

## Create in Figma

Create `Search and filter / Desktop` at `1200px` content width and `Search and filter / Mobile` at `328px`. Place Search Field and filter controls in Filter Bar; use `12px` control gaps, `12px` gap before applied Tags, and `24px` before the results region.

Create frames for `Unfiltered`, `Query entered`, `Filters applied`, `Loading`, `No results`, and `Error`. Immediate search begins after product-approved input delay; submitted search uses an explicit Button. Loading preserves result-region height. No Results keeps the query and applied Tags visible and offers `Clear filters`; it is not the first-use Empty state.

Desktop displays filter controls directly until they overflow. Mobile uses one Filter Button that opens a Drawer; applied Tags remain visible in the page. Reset removes query only when labeled “Clear search”; “Reset filters” does not silently clear search.

QA: result count announcement, keyboard-operable filters, removable Tags with specific names, focus preserved after results update, and 4px-aligned layout values.

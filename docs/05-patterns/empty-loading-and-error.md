# Empty, Loading, and Error States Pattern

**Figma deliverable:** a state decision matrix plus matched component examples

## Create in Figma

Create a `1200px` documentation frame with `40px` padding and `24px` gaps. Add exact examples for `First use`, `No results`, `No permission`, `Loading`, `Partial data`, `Offline`, and `System error`.

| Situation | Use | Preserve |
| --- | --- | --- |
| Expected content is loading | Shape-matched Skeleton | Region height and surrounding controls |
| Short indeterminate action | Spinner plus status label | Activating control width |
| No content exists yet | Empty State with creation action | Page context |
| Filters return nothing | Empty State with clear-filters action | Query and applied filters |
| Part of the page failed | Inline Alert inside the failed region | Successful data elsewhere |
| Whole task cannot continue | Empty State Region in the owning product context | Navigation and recovery route |

Loading examples use the same W/H as populated content. Retry actions remain connected Buttons. Do not show Spinner and Skeleton for one region. Create both Desktop and `328px` Mobile examples.

QA: status announcement, recovery action, correct reason-specific copy, no layout jump, and 4px-aligned region geometry.

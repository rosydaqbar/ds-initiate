# Form Layout and Validation Pattern

**Figma deliverable:** documentation and example frames, not a component

## Create in Figma

Create `Form pattern / Desktop` at `1200px` and `Form pattern / Mobile` at `360px`. Use a `720px` Desktop form column and `328px` Mobile column. Stack Form Sections with `32px` gaps, fields with `20px` gaps, labels/control/messages with `4px` gaps, and actions `24px` after the final field.

Use connected Form Field, Form Section, Alert, and Button Group instances. Desktop related short fields may share equal Fill columns with `24px` gap; Mobile always stacks them.

Create state frames: `Default`, `Focus`, `Inline error`, `Error summary`, `Saving`, and `Success`. Validate on blur for format problems and on submit for incomplete groups unless approved product requirements call for earlier validation. Error summary appears above the first section and links/focuses the affected field. Preserve entered values on error. Saving keeps action widths fixed.

QA: visible labels, required meaning in text, error association, keyboard order, 44px targets, 200% text expansion, and no structural value outside the 4px grid.

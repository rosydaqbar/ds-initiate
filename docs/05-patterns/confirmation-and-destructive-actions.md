# Confirmation and Destructive Actions Pattern

**Figma deliverable:** prototype flow with trigger, confirmation, loading, failure, and completion frames

## Create in Figma

Use confirmation only for irreversible, high-impact, or difficult-to-recover actions. Prefer immediate action plus Undo Toast when recovery is reliable.

Build `Destructive flow / Desktop` using a `400px` Small Modal and `Destructive flow / Mobile` using a `328px` Modal. Modal padding is `24px` Desktop and `16px` Mobile; content gap is `16px`; actions start `24px` after the description. The destructive Button is last in LTR visual order and uses the Critical intent; Cancel is Secondary. Never use two Critical buttons.

Create frames: `Trigger`, `Confirmation`, `Typed confirmation` when the risk justifies it, `Loading`, `Failure`, and `Completed or Undo`. Name the object and consequence in the title/body. Loading preserves button width and blocks repeat activation. Failure keeps the Modal open and preserves typed input.

Prototype Open overlay, initial focus on the least destructive useful control, Escape/Cancel return to trigger, and successful completion returns focus to the next logical location.

QA: accessible title/description, focus trap/return, explicit consequence, no color-only danger meaning, and all structural values on the 4px grid.

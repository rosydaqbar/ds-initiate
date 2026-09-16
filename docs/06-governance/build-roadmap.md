# Build Roadmap

## Phase 0 — Discovery

Complete the brand questionnaire, collect approved project inputs/assets, resolve conflicts, and produce the deterministic project-resolution record.

Do not approve Discovery while a required project-sensitive value is silently inferred from an example project. Mark unresolved values `REQUIRES APPROVAL` or `BLOCKED`.

Read [Project Data Boundary](project-data-boundary.md).

## Phase 1 — Foundations

Create approved tokens, modes, Text Styles, Effect Styles, reusable assets, and mandatory Foundation guides.

For every Foundation:

1. Resolve the underlying project values from approved Discovery/production sources.
2. Build/validate the Foundation implementation.
3. Build its mandatory guide using the exact Foundation → pattern mapping and geometry in [Documentation Construction Contract](documentation-visual-language.md).
4. Reconcile approved, implemented, and documented inventories under [Documentation Acceptance](documentation-acceptance.md).
5. Screenshot-QA the canonical shell, body pattern, first/last rows, canvas placement, and project-data isolation.
6. Fix all failures before beginning dependent component work.

Do not choose documentation width, shell, row anatomy, or body pattern during execution; those are repository decisions.

## Phase 2 — Atoms

Build and validate the smallest reusable controls and visual elements.

Use approved project tokens/Styles only. Do not borrow visual values from the example used to derive repository documentation grammar.

After an Atom passes component QA, ask whether to build its optional designer guide. If approved, use the fixed component-guide shell and section order in [Optional Component Documentation](optional-component-documentation.md).

## Phase 3 — Molecules

Combine validated Atoms into focused reusable components.

Finish component QA first. Optional designer guides follow the same deterministic component-documentation contract only after explicit approval.

## Phase 4 — Organisms

Combine validated Atoms/Molecules into larger reusable regions without product-surface library categories.

Finish component QA first. Optional designer guides follow the deterministic component-documentation contract only after explicit approval.

## Phase 5 — Patterns and integration validation

Document recurring tasks only when requested. Validate building blocks together without introducing Templates/Pages as Atomic Design levels or creating page-level library categories.

## Phase 6 — Release

Run:

- accessibility-design checks within evidence limits;
- naming/publishing checks;
- semantic token-binding checks;
- 4px structural audit;
- responsive/content checks;
- documentation coverage reconciliation;
- canonical documentation geometry/canvas-placement checks;
- project-data isolation audit;
- final screenshot review;
- consumer-file verification.

Publish in dependency order.
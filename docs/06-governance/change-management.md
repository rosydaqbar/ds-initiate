# Change Management

## Version impact

- Patch: documentation or non-breaking visual correction.
- Minor: additive token, property, component, or pattern.
- Major: removed or renamed token/property, changed default, or required migration.

## Workflow

Describe the user problem, identify dependencies, prototype safely, review accessibility and migration impact, update documentation, publish in dependency order, and announce the change.

Foundation changes include updating and validating their mandatory Figma documentation in the same change. For Atoms, Molecules, and Organisms, update already-approved landing frames when their sources change; do not create an absent optional landing frame without the user's approval.

Every public component records design owner, code owner when available, status, last review date, and next review trigger.

Reference completeness is part of every change: update the approved inventory, underlying object, native description, visible entry, resolved mode values and pairing/usage guidance together. Reconcile all three sets under [Documentation Acceptance](documentation-acceptance.md). A renamed or removed public token needs a replacement mapping and migration note; never silently rename consumers.

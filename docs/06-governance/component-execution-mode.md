# Component Execution Mode

## Purpose

Before implementing any Atom, Molecule, or Organism scope, explicitly ask the user how component implementation should proceed.

Do not infer an execution mode from urgency, wording, project size, or prior behavior unless the user has already explicitly selected a mode for the current component scope.

## Required mode gate

After Foundations required by the approved component scope are complete and before creating the first component, ask:

> How do you want to implement the component scope?
>
> - **YOLO everything** — implement all approved in-scope components in dependency order without pausing for confirmation between components.
> - **One by one** — implement and validate one component at a time, report the result, then wait for approval before continuing to the next component.

The user may answer with equivalent wording. Record the selected mode and use it for the current approved component scope.

## YOLO everything

In YOLO mode:

- implement the complete approved component scope in dependency order: Atoms → Molecules → Organisms;
- do not pause for routine confirmation between components;
- validate each component before dependent components consume it;
- continue automatically after successful component QA;
- stop only when a blocking conflict, missing required project input, failed validation, unavailable dependency, or explicit user intervention prevents deterministic continuation;
- do not expand beyond the approved component scope;
- do not treat YOLO as permission to skip inspection, QA, accessibility-design checks within evidence limits, semantic bindings, the 4px construction rule, or required dependency order.

Optional component documentation is still a separate approval. Do not interrupt YOLO implementation to ask about optional guides after each component. Finish the approved implementation batch first, then ask which completed component guides, if any, the user wants to build.

## One by one

In one-by-one mode:

1. Select the next dependency-safe component from the approved scope.
2. Inspect its dependencies and target Figma state.
3. Implement the component.
4. Run its required QA.
5. Report what was completed, validation actually performed, and any unresolved issue.
6. Ask for approval before starting the next component.

If optional component documentation is relevant, ask about it only after the component passes QA. The user may approve the guide, skip it, or continue to the next component.

## Mode changes

The user's latest explicit instruction wins.

If the user changes from YOLO to one-by-one, stop after the current safe validated unit and use one-by-one behavior from that point forward.

If the user changes from one-by-one to YOLO, continue through the remaining approved scope without routine confirmation pauses.

A new or materially expanded component scope requires a new mode decision unless the user explicitly says to reuse the previous mode.

## Scope boundary

This mode gate applies only to Atom, Molecule, and Organism implementation.

It does not bypass:

- Discovery approval;
- Foundation approval and validation;
- project-data boundaries;
- required Figma inspection;
- deterministic construction contracts;
- blocking questions;
- optional component-documentation approval;
- release and publishing checks.

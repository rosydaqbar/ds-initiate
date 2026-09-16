# Repository Governance

This document is for repository upkeep. It is not part of the design-system generation workflow and must not be used as project input.

## Boundary

The repository may standardize framework behavior that must stay consistent across projects, including:

- Atomic Design build order and neutral library organization;
- the 4px construction rule;
- component object-selection and public-variant rules;
- documentation page order, geometry, pattern mapping, and QA;
- validation behavior;
- executor instructions that are intentionally project-neutral.

Do not encode project identity as framework defaults. Project names, product context, colors, typefaces, assets, radius character, density, elevation character, motion character, content, appearance modes, component scope, Figma IDs, and reference-specific values belong to the project using the framework.

## Example-project isolation

An example project may be used to extract reusable construction grammar. It must not become the default visual identity of the framework.

Before merging a repository change that was informed by an example project:

1. Search the changed files for the example project's brand/product name, concrete colors, typefaces, node IDs, file IDs, URLs, distinctive copy, and project-specific token mappings.
2. Remove values that are acting as reusable defaults unless they are intentionally generic fixtures.
3. Keep only project-neutral construction rules or clearly labeled synthetic test fixtures.
4. Confirm the consumer-facing Discovery flow remains the source of project-specific values.
5. Confirm another project can use the framework without inheriting the example project's identity.

## Contract synchronization

When a shared framework rule changes, update every affected representation in the same change. This can include:

- `AGENTS.md`;
- consumer-facing documentation under `docs/`;
- `docs/06-governance/documentation-layout-contract.json`;
- validation scripts and tests;
- executor examples;
- indexes and local links.

Do not leave contradictory Markdown and machine-readable contracts active at the same time.

`documentation-layout-contract.json` is the machine-readable authority for numeric documentation geometry. `documentation-visual-language.md` explains semantics and behavior. A mismatch between them is a repository defect and should be resolved before release.

## Consumer-facing documentation rule

Consumer-facing documentation describes only:

- what input the framework needs from the user;
- what the framework will generate;
- how the generated design system is constructed;
- what approvals are required;
- how the generated Figma output is validated.

Do not put repository-upkeep instructions, contributor workflow, pre-commit checks, CI details, diff-review instructions, or maintainer responsibilities in `README.md`, `AGENTS.md`, or `docs/`.

## Validation

Run from the repository root after changing framework contracts:

```sh
node scripts/validate-documentation.mjs
node --test scripts/validate-documentation.test.mjs
```

The static validator checks repository contracts, links, required documentation sections, deterministic geometry, and known example-project leakage. It does not replace Figma inspection during an actual generated-system build.

GitHub Actions runs the same checks on pushes to `main` and on pull requests.

## Release check

Before considering a repository-level contract change complete:

- static validation passes;
- tests pass;
- consumer-facing docs contain no repository-upkeep instructions;
- shared contracts agree;
- example-project values are not acting as defaults;
- unrelated consumer-facing behavior is unchanged unless intentionally modified.

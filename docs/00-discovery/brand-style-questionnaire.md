# Brand Style Questionnaire

Ask these ten questions before creating visual Foundations.

Discovery supplies **project data**. The reusable repository supplies **construction rules**. Never convert one project's answers into repository defaults; see [Project Data Boundary](../06-governance/project-data-boundary.md).

Record exact values when they exist. Use `Not applicable` only when the field genuinely does not apply. Do not infer unresolved brand decisions from an example project.

## 1. What brand and product is this system for?

Record:

- official brand name;
- product name;
- one-sentence product description;
- primary audience;
- main platforms;
- three most important user tasks.

## 2. Which approved brand assets already exist?

Attach or link:

- logos/marks;
- brand guidelines;
- production color specifications;
- licensed fonts and approved weights;
- icon set;
- imagery/illustration library;
- existing Figma library;
- production design-token files.

Name the decision owner when approved inputs conflict.

## 3. What exact color direction should the system use?

Record:

- approved primary, secondary, and accent values when they exist;
- neutral direction: cool, balanced, warm, or supplied production neutrals;
- approved appearance modes;
- prohibited colors;
- existing production palette/token contract that must be preserved;
- whether missing palette ramps/supporting/status values may be proposed for approval.

A core brand hex is not a complete palette. If required ramp values or semantic mappings are not supplied, mark them `Requires proposal` and resolve them explicitly before Figma mutation. Never borrow another project's palette.

## 4. What typography should define the interface?

Record:

- interface typeface;
- display typeface if different;
- monospace typeface when required;
- approved/licensed numeric weights;
- compact, standard, or spacious text density;
- casing rule;
- existing production type treatments to preserve.

Do not substitute a font from an example project.

## 5. What should the interface feel like?

Record exactly three desired traits and three traits to avoid, plus one sentence describing the intended impression.

Suggested vocabulary may be used to help the user answer, but the selected traits are project data and are not reusable defaults.

Desired examples: `Modern` · `Trustworthy` · `Friendly` · `Premium` · `Bold` · `Calm` · `Playful` · `Technical` · `Minimal` · `Editorial`

Avoid examples: `Corporate` · `Childish` · `Luxury` · `Loud` · `Cold` · `Dense` · `Decorative` · `Generic` · `Futuristic` · `Casual`

## 6. What shape and density should controls and surfaces use?

Record:

- default control radius;
- default surface radius;
- button shape;
- input shape;
- interface density;
- default control height;
- any approved exception to the 4px structural rule.

Suggested answer values may be presented, but none are project defaults until approved.

## 7. How should surfaces separate from one another?

Record:

- main surface treatment;
- border contrast;
- shadow character;
- card treatment;
- overlay treatment;
- visual treatments to avoid.

Do not infer these from another project's documentation chrome.

## 8. What icon, imagery, and motion styles belong to the project?

Record:

- icon construction: outline, filled, two-tone, or supplied set;
- stroke character when applicable;
- corner character;
- approved imagery/illustration subject and treatment;
- motion character;
- attached approved assets.

## 9. What accessibility, language, and content rules are required?

Record:

- accessibility target;
- keyboard requirement;
- reduced-motion requirement;
- supported languages;
- RTL requirement;
- minimum text size;
- product voice/content rules.

Use `WCAG 2.2 AA` only as the repository default when the user does not require another target.

## 10. Which building blocks belong in the first release?

Record no more than fifteen public components in build-priority order.

Confirm whether scope stops at:

`Foundations → Atoms → Molecules → Organisms`

Do not add Templates, Pages, product screens, or product-surface categories.

## Deterministic project resolution record

Before asking for final Discovery approval, produce one normalized project-resolution record containing every project-sensitive value that downstream generation may use.

At minimum record:

- brand/product identity;
- approved color anchors and supplied palette values;
- palette values still requiring explicit proposal/approval;
- approved appearance modes;
- primary/display/mono typefaces and available numeric weights;
- shape/density values;
- surface/elevation treatment;
- icon/imagery/motion treatment;
- accessibility/language/content requirements;
- first-release component list;
- existing production tokens/assets that override repository defaults;
- explicit exclusions.

Use exact values rather than paraphrases whenever possible.

If a downstream visual value is still unresolved, label it `BLOCKED` or `REQUIRES APPROVAL`. Do not treat a broad adjective as permission to invent an exact implementation value after Discovery approval.

## Foundation scope record

For selected Foundations, record the exact approved inventory or resolution status of:

- palette families and steps;
- semantic roles/modes;
- Text Styles/type scale inputs;
- spacing/sizing scales;
- radii;
- borders;
- effects/elevation;
- motion roles;
- layouts/breakpoints;
- required reusable assets.

Mark explicit exclusions with reason.

The framework may provide a canonical architecture, but current-project production values or explicitly approved departures outrank it.

## Required output

Turn the answers into the [Discovery Brief](discovery-brief-format.md), including the deterministic project-resolution record.

Summarize unresolved decisions and wait for approval before creating project-sensitive Foundations.

Discovery approval authorizes only values recorded as approved. It does not authorize an executor to fill later gaps from an example project or personal taste.
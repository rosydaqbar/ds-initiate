# Content

**Library section:** Foundations

## Create the content contract

- Use sentence case for interface labels unless approved brand guidance requires otherwise.
- Button labels start with a clear verb; Link labels describe the destination.
- Field labels name the requested value. Help text explains format before an error occurs.
- Validation identifies the problem and the correction; avoid generic “Invalid input.”
- Empty states distinguish no data, no results, no permission, and failure.
- Notifications state what happened, its object, and the next action when needed.
- Dates, time, numbers, currency, percentages, and file sizes use the product locale and documented precision.
- Buttons and navigation labels remain one line and grow horizontally. Body, help, alert, and empty-state text wrap. Data-cell truncation requires an accessible full value.

Build `Documentation / Content` with the shared `1600px` editorial frame. Use approved Text Styles and text-only examples first; add connected component instances only when they already exist.

Examples use realistic product language and avoid placeholder text in final documentation.

## Mandatory Figma documentation

**Build status:** Required in the same Foundation build; do not ask a separate documentation question.

Build one regular frame named `Documentation / Content` using [Mandatory Foundation Documentation](../06-governance/foundation-documentation.md). Use approved Text Styles and realistic, neutral copy.

### Required visible structure and copy

```text
Documentation / Content
  Header
    Content
    Clear interface language helps people understand what happened and what to do next.
  Overview
  Writing principles
  Common interface content
  Locale and formatting
  Do and don't
  Accessibility
```

Use this overview copy: `Write for the user's task. Prefer familiar words, direct actions, and specific feedback. Keep labels concise while allowing explanations, errors, and empty states to wrap.`

Create three writing-principle examples in one annotated block:

- `Clear` — `Use familiar words and state the subject directly.`
- `Concise` — `Include the information needed to decide or act; remove repetition.`
- `Helpful` — `Explain what happened and provide the next action when one is available.`

Create a complete reference for EVERY approved content rule, each with individual usage and correct/incorrect copy. Then show the following applied examples: Each example contains a correct sample, a short explanation, and an incorrect comparison:

1. `Actions` — Correct: `Save changes`. Explanation: `Start action labels with a specific verb.` Incorrect: `OK`.
2. `Links` — Correct: `View order details`. Explanation: `Describe the destination instead of the interaction.` Incorrect: `Click here`.
3. `Labels and help` — Correct label: `Email address`; help: `Use the address where you receive receipts.` Explanation: `Name the requested value and explain the format before an error occurs.`
4. `Errors` — Correct: `Enter an email address in the format name@example.com.` Explanation: `Identify the problem and how to correct it.` Incorrect: `Invalid input.`
5. `Empty states` — Correct: `No results match these filters. Clear filters to view all items.` Explanation: `Distinguish no data, no results, no permission, and failure.` Incorrect: `Nothing here.`
6. `Notifications` — Correct: `Your changes were saved.` Explanation: `State what happened and name the affected object when needed.` Incorrect: `Success!`.

Document all four empty-state meanings separately: no data (explain how to add it), no results (explain how to adjust the search/filter), no permission (explain the access limitation and available next action), and failure (explain what failed and a valid recovery). Do not make one no-results example stand for all four. Include notification outcome, affected object and next action when relevant.

Create one `Locale and formatting` panel showing the approved locale and one real example each for date, time, number, currency, percentage, and file size. Label the locale and formatting rule; do not invent a locale when Discovery has not approved one.

Create one `Wrapping` comparison with a short label, long supporting text, and empty value. Add: `Control and navigation labels remain concise. Body, help, error, alert, and empty-state content wraps. Truncated data requires access to the full value.` Include every approved script only when the script is in scope.

Finish with: `Content must remain understandable when read out of visual context and when text expands.` Report the design checks actually performed and the remaining implementation checks under [Accessibility](accessibility.md).

Use existing connected component instances only when they already exist; otherwise use text and neutral geometry. Do not build components solely for this guide. Do not show stress-test results or validation logs. The guide fails QA if an example lacks its explanation or correct and incorrect copy.

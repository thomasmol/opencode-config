Here are some general instructions to improve our collaboration:

In your first line you begin run the bash command `date "+%Y-%m-%d %H:%M:%S"` to get the current date and time.

## When we are planning or creating a spec

Examine existing code for guidance regarding implementation preferences and practices. After making the plan and todos, always uncover unanswered questions or ambiguities in the plan by asking the user for clarification. This ensures that the plan is clear and actionable before proceeding to execution mode. Be as concise as possible when asking for clarification.

## When we are building

If you encounter any uncertainties or ambiguities in the plan or tasks, promptly ask the user for clarification. This helps to ensure that the implementation aligns with the user's expectations and requirements. Keep your questions focused and to the point to facilitate quick responses. Always follow the user's instructions and plan or spec precisely and avoid making assumptions about their requirements. Instead, ask the user for clarification on any uncertainties or ambiguities.

## Chat style guide

- Use sentence case in all normal prose.
- Always capitalize the first word of each sentence.
- Always capitalize the pronoun "I".
- Use proper punctuation.
- Do not write regular sentences in Title Case (e.g., not "This Is A Sentence").
- Keep responses concise, but never sacrifice grammar, capitalization, or clarity for brevity.
- If style rules conflict, prioritize correct grammar and readability.

## Engineering principles

- Write the simplest code that solves the problem. Do not introduce abstractions, layers, or indirection until you have two concrete use cases — one is a guess, two is a pattern.
- Prefer flat over nested, inline over extracted, concrete over generic. A 50-line function that reads top to bottom is better than five 10-line functions you have to jump between.
- Every new file, type, or wrapper must justify its existence. If it doesn't reduce complexity, it adds it.
- Solve the stated problem. Do not refactor adjacent code, add tangential improvements, or "improve" things that weren't asked about.
- When in doubt between two approaches, pick the one with fewer moving parts.

## Code style guide

- Use sentence case in headers, copy, and other text.
- AVOID title casing in sentences and headings, except for names and acronyms.
- AVOID `else` statements unless necessary.
- AVOID `try`/`catch` where possible.
- AVOID `let`, prefer `const`.
- AVOID `any` type or `unknown` type casting.
- AVOID unnecessary destructuring.
- AVOID comments in code.
- AVOID adding new toast/sonner as UI feedback. Instead provide feedback near the action.
- Return the created/updated object directly from mutations, void from deletes.
- Never return status variables like `{ success: true }`.
- Use single-word variable names where possible.
- Extract reusable constants with SCREAMING_CASE.

## Philosophy

This codebase and project will likely outlive you. Every shortcut and hack compounds into technical debt that slows the whole process down. This means patterns we establish will be copied. Therefore you may prioritize design over implementation, when we are building something new, for the sake of future maintainability.

But maintainability does not mean more code, more layers, or more abstractions. The most maintainable code is short, obvious, and does one thing. Over-engineering is just as costly as under-engineering — it creates indirection that makes the codebase harder to read, harder to change, and harder to delete. Write code that a tired engineer at 2am can follow without a diagram.

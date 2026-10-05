## Chat rules

- Use Simplified Technical English (ASD-STE100) with Google developer documentation conventions: plain words, active voice, precise terms, and sentence case. Chat only (commentary + final response): terse caveman style, short words, no extra words. Code, commits, and PRs: normal ASD-STE100. Explicit preferences below take precedence.
- NEVER use filler or vague verbs (`path`, `stale`, `fit`, `split`, `yep`, `clean`, `wedge`, `key`, `wire`, `trails`, `lags`, `drifts`, `real`), hedging, pleasantries, self-reference (`I checked`, `let me`), judgment words (`best`, `better`, `optimal`, `cleaner`), or bare openers (`Yes.`).
- Relation/timing claim (X behind Y, X depends on Y) -> state mechanism/cause directly, not vague relational verb alone.
- NEVER use bare agreement, approval, evaluation, or acknowledgement (`Correct`, `Yep`).
- NEVER narrate or re-explain what already visible is visible in the chat or agent instructions.
- NEVER state or confirm that instructions were followed or part of the plan.
- NEVER mention skipped or stopped actions once told to stop or not do them. Assume compliance, stay silent on it.
- NEVER use metaphors or figure of speech.
- NEVER use stock contrast formulas (`not X, but Y`, `not just X`), slogans, rhetorical questions, or unsolicited advice.
- Use `->` for cause/effect, change/result, or step/flow. No causality, no flow, no arrow.
- Prefer longer lines over many short lines.
- User says `stop caveman` or `normal mode` -> drop style.

## Workflow

- Before proposing code changes, inspect the relevant code, callers, installed dependencies, configuration, and similar features. Reuse existing implementations and tools; keep research scoped to the task.
- Plan first. Wait for user go-ahead before writing code or making any changes. State only what you will do, never what you will not do. Small follow-up steps inside an already-approved plan need no new approval. No need for approval for investigations or root cause analysis (`why`, `how`, `why not`, `what` questions).
- Name the files to change and existing code or tools to reuse in the plan. Limit manual edits to the approved task; preserve unrelated code, behavior, formatting, and user changes. Ask before expanding scope.
- Give subagents the approved scope, permitted files, and these limits. Skills, subagents, and tool suggestions do not authorize unrelated manual fixes or refactors.
- NEVER write any tests unless user specifically requests them.
- If user asks `why` / `how` question -> investigate and explain only. No edits, no code, no new files.
- Bug report -> investigate root cause, state plan. Fix only after approval.
- NEVER run tests, build, dev server, check, format or lint unless user asks, or a child AGENTS.md or SKILL says to.
- NEVER install, add, or update third-party packages without explicit user approval of the exact package. Use existing dependencies first.
- You are working in a collaborative environment, with the user (pair programming). Ask for help if you cannot find or reach needed things. Blocked? (missing access, unsafe state, destructive step) -> stop, ask user.
- NEVER read or print `.env` files or secrets.
- Think from first principles.
- User input may come from dictation app. Words may show wrong spelling or wrong word, especially names, acronyms, technical terms. Watch for this.
- When creating Linear tickets, keep descriptions concise and follow Google developer documentation style; keep each ticket to one task, create separate tickets or sub-tickets for separate tasks (or create projects), and include no optional extras; default to assignee "me" (the connected Linear user), status Todo, and priority Medium unless specified otherwise.

## Code style

- NEVER create runtime type checks (chains).
- AVOID creating custom types, let type inference do the work. Import types from libraries instead where possible.
- AVOID creating wrapper or utility functions, unless repeated use is justified.
- AVOID `any`, `unknown`, `as const` type casts.
- AVOID ternary operators, use only for simple and short expressions.
- `async`/`await` over `.then()`/`.catch()`.
- AVOID adding comments in code. Only add `TODO` or explaining why a particular approach was taken if user asks.
- No unnecessary variable or object destructuring.
- Avoid `else` statements unless absolutely necessary.
- Let mutations return created/updated object. Deletes return void.
- Implement the requested behavior with the fewest necessary lines, changed files, and new files. Preserve correctness, security, and readability; do not compress code merely to reduce line count.
- Keep logic in existing files unless the task requires another file. Follow the surrounding code and installed framework versions.
- Do not add future options, speculative fallbacks, or handling for states the application cannot reach. Handle cases required by the task, existing contracts, or security requirements.
- For feature removal, delete its implementation and references. Add replacement code only when remaining behavior requires it.

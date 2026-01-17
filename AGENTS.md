Be extremely concise. Sacrifice grammar for the sake of concision.

## When in plan or spec mode

Examine existing code for guidance regarding implementation preferences and practices. After making the plan and todos, always uncover unanswered questions or ambiguities in the plan by asking the user for clarification. This ensures that the plan is clear and actionable before proceeding to execution mode. Be as concise as possible when asking for clarification.

## When in build mode

During the build mode, if you encounter any uncertainties or ambiguities in the plan or tasks, promptly ask the user for clarification. This helps to ensure that the implementation aligns with the user's expectations and requirements. Keep your questions focused and to the point to facilitate quick responses. Never do more than what is explicitly specified in the plan without asking for clarification first.

## Style Guide

- Always follow the user's instructions precisely and avoid making assumptions about their requirements.
- Try to keep things in one function unless composable or reusable
- NEVER use title casing for headings, file names, copy, or other text elements. Use sentence case instead.
- DO NOT do unnecessary destructuring of variables
- DO NOT use `else` statements unless necessary
- DO NOT use `try`/`catch` if it can be avoided
- DO NOT return { success: true } in methods or functions
- AVOID `try`/`catch` where possible
- AVOID `else` statements
- AVOID using `any` type
- AVOID `let` statements
- AVOID adding comments in code
- Always use single word variable names where possible
- Always extract values to constants with SCREAMING_CASE where possible
- Be extremely concise. Sacrifice grammar for the sake of concision.

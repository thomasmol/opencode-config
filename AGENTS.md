Thank you for helping me with my work and life. Here are some general instructions to improve our collaboration:

Before you begin run the bash command `date "+%Y-%m-%d %H:%M:%S"` to get the current date and time.

Be extremely concise. Sacrifice grammar for the sake of concision.

## When we are planning or creating a spec

Examine existing code for guidance regarding implementation preferences and practices. After making the plan and todos, always uncover unanswered questions or ambiguities in the plan by asking the user for clarification. This ensures that the plan is clear and actionable before proceeding to execution mode. Be as concise as possible when asking for clarification.

## When we are building

If you encounter any uncertainties or ambiguities in the plan or tasks, promptly ask the user for clarification. This helps to ensure that the implementation aligns with the user's expectations and requirements. Keep your questions focused and to the point to facilitate quick responses. Never do more than what is explicitly specified in the plan without asking for clarification first.

## Style Guide

- Always follow the user's instructions precisely and avoid making assumptions about their requirements.
- Try to keep things in one function unless composable or reusable
- NEVER use title casing for headings, file names, copy, or other text elements. Use sentence case instead.
- DO NOT do unnecessary destructuring of variables
- DO NOT use `else` statements unless necessary
- DO NOT use `try`/`catch` if it can be avoided
- AVOID returning status variables like { success: true } in methods or functions
- Always return the created or updated object directly
- Always return void for delete methods and functions
- AVOID `try`/`catch` where possible
- AVOID `else` statements
- AVOID using `any` type or `unknown` type casting
- AVOID `let` statements
- AVOID adding new comments in code
- Always use single word variable names where possible
- Always extract constants with SCREAMING_CASE
- Be extremely concise. Sacrifice grammar for the sake of concision.

## Philosophy

This codebase and project will likely outlive you. Every shortcut becomes someone else's burden. Every hack compounds into technical debt that slows the whole team down.
You are shaping the future of this project. The patterns you establish will be copied. The corners you cut will be cut again.

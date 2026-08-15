---
name: pr-creation
description: Create (draft) pull requests on GitHub. Use when user requests to create a pr, pull request, draft pr, draft pull request.
---

## What this skill does

Create a draft pull request using GitHub CLI. Assume code is done. Do not make code changes, format changes, config changes, commits, branch changes, or push changes when this skill is active.

## Workflow

0. Lint and format

Use the project's linting and formatting tools to check and fix any issues.

1. Check current branch.

```sh
git branch --show-current
```

Stop if current branch is `main`, `master`, `staging`, `production`, or repo default branch. Inform user PR cannot be created from default/protected branch. Suggest creating a feature branch from committed work.

2. Check repo default branch.

```sh
gh repo view --json defaultBranchRef --jq .defaultBranchRef.name
```

Use this branch as PR base unless user specified another base.

3. Check uncommitted changes.

```sh
git status --porcelain
```

Stop if output is non-empty. Inform user uncommitted changes exist. Ask whether they want to commit/stash/discard manually before PR creation.

4. Check unpushed commits/upstream state.

```sh
git status -sb
```

Stop if output shows ahead commits, no upstream, or branch not pushed. Inform user branch must be pushed before PR creation. Suggest `git push -u origin <current-branch>`.

5. Inspect diff against base branch for PR title/body only.

```sh
git fetch origin
git diff --stat origin/<base-branch>...HEAD
git diff origin/<base-branch>...HEAD
```

Use diff and branchname to create specific title/body. Do not edit files.

6. Create draft PR.

```sh
gh pr create --draft --base <base-branch> --title "feature: specific title" --body $'- Specific change with file/method/class references\n- Another specific change\n\nCloses ISSUE_ID'
```

## PR content rules

Use the Google developer documentation style for PR titles and bodies.

- The title prefix must match the change type: `feature:`, `fix:`, `chore:`, `refactor:`, or `docs:`. After the prefix, write a concise imperative statement in sentence case with no ending period.
- Use short, direct sentences in active voice and present tense. State what changed before explaining why.
- Choose the shortest structure that communicates the change. Use an opening sentence or impact paragraph only when it adds useful context.
- Use a bulleted list for significant implementation details. Reference relevant files, functions, classes, or components by name using backticks.
- Address the reader as “you” only when describing a user action.
- Do not repeat the title. Do not use generic headings such as `Draft PR`, `Changes made`, or `Summary`.
- Do not use promotional or subjective language such as “simple”, “easy”, or “better”.
- Do not include check, test, lint, build, or format results in the PR body unless the user explicitly requests them. CI status belongs in GitHub checks and local success is implied.
- Link Linear issues with `Closes ISSUE_ID ISSUE_ID_2` when issue IDs are provided or can be extracted from the branch name.
- Ask for issue IDs only if the user requests issue links but no issue ID is provided or can be extracted.
- Return the created draft PR URL.

## When to use skill

Use when user requests creating a PR, pull request, draft PR, or draft pull request for already-finished work.

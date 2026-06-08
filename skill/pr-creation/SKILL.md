---
name: pr-creation
description: Create (draft) pull requests on GitHub. Use when user requests to create a pr, pull request, draft pr, draft pull request.
---

## What I do

Create a draft pull request using GitHub CLI. Assume code is done. Do not make code changes, format changes, config changes, commits, branch changes, or push changes when this skill is active.

## Workflow

Run only minimal git/GitHub CLI checks needed for PR creation.

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

- Title prefix must match change type: `feature:`, `fix:`, `chore:`, `refactor:`, `docs:`.
- Body must be specific. Mention relevant files, methods, classes, behavior changes.
- Do not add generic headings like `Draft PR`, `Changes made`, or `Summary`.
- Link Linear issues with `Closes ISSUE_ID ISSUE_ID_2` when issue ids are provided or extractable from branch name.
- Ask for issue ids only if user asked to link issue ids but none are provided or extractable.
- Return created draft PR URL.

## When to use me

Use when user requests creating a PR, pull request, draft PR, or draft pull request for already-finished work.

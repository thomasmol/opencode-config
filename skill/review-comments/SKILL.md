---
name: review-comments
description: Pull GitHub PR review comments for current branch or provided PR number, inspect code, and produce update plan. Use for PR feedback, requested changes, reviewer comments, or plan fixes from review comments.
---

## Purpose

Pull GitHub PR review comments, investigate code, then plan updates. Optional input: PR number.

No file edits before plan. No PR comments, replies, resolves, or review submissions without user consent.

## Workflow

Use `gh` first. Use `git` for branch/diff context. If no `gh` auth/access, stop and report blocker.

1. Find PR.

If user gave PR number, use it. Otherwise find open PR for current branch -> `origin/main`:

```sh
git branch --show-current
git fetch origin main
gh pr list --head <branch> --base main --state open --json number,title,url,headRefName,baseRefName --limit 10
```

If no branch, branch is `main`, no PR, or multiple PRs -> ask user for PR number.

2. Fetch PR + comments.

```sh
gh pr view <pr> --json number,title,url,state,headRefName,baseRefName,reviewDecision
gh pr view <pr> --comments --json comments,reviews
gh api repos/{owner}/{repo}/pulls/<pr>/comments --paginate
gh pr diff <pr> --name-only
git diff --stat origin/main...HEAD
```

If PR base is not `main`, confirm before continuing.

3. Investigate.

Read only files needed for comments. For each substantive comment: identify request, inspect current code + nearby pattern, decide if still applies, group duplicates, separate questions/non-actionable notes.

## Output

```md
PR: #<number> <title>
URL: <url>

Review comments found: <count>

Findings:

- `<file>`:<line> — <reviewer>: <concern> -> <investigation result>

Update plan:

1. <specific change with file/function/component refs>
2. <specific change>

Needs clarification:

- <question, if any>

Not planned:

- <comment> -> <already addressed | duplicate | non-actionable>
```

Keep plan scoped to review comments. No broad refactors unless comment demands it.

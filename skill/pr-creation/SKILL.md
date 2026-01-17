---
name: pr-creation
description: Create (draft) pull requests on GitHub
---

## What I do

- Create draft pull requests to the main or master branch on GitHub for code changes using the GitHub CLI (`gh pr create --draft`).
- Add a relevent title with proper prefixes (choose from: "feat:", "fix:", "chore:", "refactor:") based on the type of changes made.
- If currently on the main or master branch, create a new branch with relevant name and prefix (choose from: "feat/", "fix/", "chore/", "refactor/") and commit before creating the draft PR.
- Add a description with a summary of the changes made. Do not add generic titles or headers like "Draft PR" or "Changes made" or "Summary". Just list the changes and refer to methods, files, classes for references where needed.
- Link (Linear) issues by ids if specified by adding "Closes ISSUE_ID ISSUE_ID_2" in the description. Ask for issue ids if not provided.
- Return the URL of the created draft pull request.

## When to use me

- Use me when you want to create a (draft) pull request on GitHub for your code changes.
- If my current branch is the main or master branch, create a new branch with relevant name and prefix (choose from: "feat/", "fix/", "chore/", "refactor/") before creating the draft PR.

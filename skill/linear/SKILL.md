---
name: linear
description: Create, read, update, and list Linear issues. Use when user requests to create, read, update, or list Linear projects, issues, tickets, or tasks.
---

## What I do

- Create, read, update, and list Linear issues via GraphQL API using CURL commands. 
- Always give the title or some short description of the issue when showing it, not just the identifier.
- Be careful with creating and updating issues: confirm the details before submitting.

## Authentication

Use `LINEAR_API_KEY` environment variable or `Authorization: <API_KEY>` header.

Endpoint: `https://api.linear.app/graphql`

## List issues

If you don't know the team ID, you can list all teams first and then query issues for a specific team.

```graphql
query Teams {
  teams {
    nodes {
      id
      name
    }
  }
}
```

```graphql
query Issues($teamId: String!) {
  team(id: $teamId) {
    issues {
      nodes {
        id
        identifier
        title
        description
        priority
        assignee { name }
        state { name }
      }
    }
  }
}
```

**Input:**
```json
{"teamId": "9cfb482a-81e3-4154-b5b9-2c805e70a02d"}
```

## Search issues

```graphql
query SearchIssues($filter: IssueFilter) {
  issues(filter: $filter) {
    nodes {
      id
      identifier
      title
      description
      priority
      assignee { name }
      state { name }
    }
  }
}
```

**Input (search by title):**
```json
{
  "filter": {
    "title": { "containsIgnoreCase": "bug" }
  }
}
```

**Input (search by description):**
```json
{
  "filter": {
    "description": { "containsIgnoreCase": "login" }
  }
}
```

## Read issue

```graphql
query Issue($id: String!) {
  issue(id: $id) {
    id
    identifier
    title
    description
    priority
    assignee { id name }
    state { id name }
    createdAt
    updatedAt
  }
}
```

**Input:**
```json
{"id": "ENG-123"}
```

Use identifier (`ENG-123`) or UUID.

## Create issue

```graphql
mutation CreateIssue($teamId: String!, $title: String!, $description: String, $priority: Int) {
  issueCreate(
    input: {
      teamId: $teamId
      title: $title
      description: $description
      priority: $priority
    }
  ) {
    success
    issue {
      id
      identifier
      title
      url
    }
  }
}
```

**Input:**
```json
{
  "teamId": "9cfb482a-81e3-4154-b5b9-2c805e70a02d",
  "title": "New feature request",
  "description": "Add dark mode",
  "priority": 2
}
```

## Update issue

```graphql
mutation UpdateIssue($id: String!, $title: String, $description: String, $stateId: String, $priority: Int) {
  issueUpdate(
    id: $id
    input: {
      title: $title
      description: $description
      stateId: $stateId
      priority: $priority
    }
  ) {
    success
    issue {
      id
      identifier
      title
    }
  }
}
```

**Input:**
```json
{
  "id": "ENG-123",
  "title": "Updated title",
  "priority": 3
}
```

Use identifier (`ENG-123`) or UUID for `id`.

## Priority values

- 0: No priority
- 1: Urgent
- 2: High
- 3: Medium
- 4: Low

## Error handling

Check `errors` array in response:

```json
{
  "errors": [
    {
      "message": "Issue not found",
      "path": ["issue"]
    }
  ]
}
```

GraphQL returns 200 with partial data + errors. Always validate `success` field in mutations and check for `errors` array.

## Example request

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: $LINEAR_API_KEY" \
  --data '{"query": "{ viewer { name } }"}' \
  https://api.linear.app/graphql
```

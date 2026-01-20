# OpenCode config

This directory contains my personal configuration for OpenCode, a coding agent tool.

It includes guidelines, skills, tools and more.

Refer to the [OpenCode documentation](https://opencode.ai/docs/) for details on how to customize and use this configuration effectively.

## Notes

- Prefer CLI or http APIs over MCPs
  - Why? -> MCPs often pollute context with a large number of tokens
  - LLMs are pretty good at understanding CLI and (rest) http APIs
  - Add skills detailing how to use a certain CLI or API and add auth tokens to your env
- Allow bash commands in all modes, but restrict potentially destructive ones by setting permission to 'ask'
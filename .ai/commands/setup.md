---
name: /setup
description: Sets up and runs the solution locally
---

**When to use:** Starting any development work (GitHub issue)

**Usage:** `/setup`

**Details:** See README.md Setup section for details

**Content:**

This command consists of the following shell commands, in order:

- Install deps: `pnpm install`
- Run tests: `pnpm test:unit`
- Optionally start dev server as a separate final step: `pnpm dev`

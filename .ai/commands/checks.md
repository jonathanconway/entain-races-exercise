---
name: /checks
description: Checks changes for correctness and conformance to standards
---

**When to use:** Before opening a pull request (GitHub pull-request)

**What it does:** Runs automated checks and generally checks that code conforms to documented Guidelines

**Usage:** `/checks`

**Details:** See README.md Guidelines section for coding standards

**Content:**

This command consists of the following steps:

1. Run shell commands for automated checks:

- Run tests: `pnpm test:unit`
- Run lint: `pnpm lint`
- Run format: `pnpm format`
- Run build: `pnpm build`

2. Check code changes against Guidelines, ensure that they comply

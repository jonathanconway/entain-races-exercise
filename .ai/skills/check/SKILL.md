---
name: check
description: "Use this skill whenever you need to review changes in the local development branch to ensure they conform to guidelines."
---

Check all changes across all folders.

Ensure that all changes adhere to guidance under the `## Guidelines` section in the `README.md` file in the root folder.

ALso ensure that all changes adhere to guidance under the `## Folder Structure` section in `README.md` file of that folder.

- `src/README.md`
  - `src/assets/README.md`
  - `src/components/README.md`
  - `src/composables/README.md`
  - `src/data/README.md`
  - `src/queries/README.md`
    - `src/queries/racing/README.md`
  - `src/stores/README.md`
  - `src/types/README.md`
  - `src/utils/README.md`
  - `src/views/README.md`
    - `src/views/races/README.md`

When modifying any code in any file

- Always adhere to guidance under the `### Guidelines` section in `README.md` file of that folder
- Always adhere to guidance under the `### Notes` section in `README.md` file of that folder

Run `/checks` command to ensure everything works.

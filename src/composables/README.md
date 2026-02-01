# Folder: `composables`

Composables are re-usable units of stateful logic, used by views and components.

## Folder structure

The folder structure is as follows:

- 📁 `composables` (folder)
  - 📄 `{composable}.ts` (file)
  - 📁 `__tests__` (folder)
    - 📄 `{composable}.spec.ts` (file)

### Notes

- `{composable}` is the name of the composable function, in kebab-case, without the `use` prefix
- Each `{composable}.ts` file contains one exported composable function named `use{Composable}`
- Each composable has a unit tests file suffixed with `.spec` in the filename

# Folder: `utils`

Utils are small general-purpose pure functions re-used across the application.

## Folder structure

The folder structure is as follows:

- 📁 `utils` (folder)
  - 📄 `{util}.ts` (file)
  - 📁 `__tests__` (folder)
    - 📄 `{util}.spec.ts` (file)

### Notes

- `{util}` is the name of the util function, in kebab-case
- `{util}` is in the format: `{entity}-{operation}`
  - `{entity}` is a noun describing the primary entity being manipulated
  - `{operation}` is a verb describing the how the entity is being manipulated
  - This is to create visual grouping and ease scanning of the files
- Each `{util}.ts` file contains one exported util function
  - Exported util function is named `{operation}{Entity}`
  - This is to ease autocomplete when calling a util function
- `{util}.ts` file can contain non-exported "private" functions consumed by the exported util function and those are also pure functions
  - This is for encapsulation
- Each util has a unit tests file suffixed with `.spec` in the filename
- If more than 2 parameters are passed to a util, they are wrapped in a params object

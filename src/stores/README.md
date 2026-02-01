# Folder: `stores`

Stores are re-usable units of state and their associated operations.

## Folder structure

The folder structure is as follows:

- 📁 `stores` (folder)
  - 📄 `{store}-store.ts` (file)
  - 📁 `__tests__` (folder)
    - 📄 `{store}-store.spec.ts` (file)

### Notes

- `{store}` is a name that describes the unit of state held in the store
- Each store has one store file and one unit test file

## Rules of stores

- Stores contain logically grouped units of state
- Stores contain all and only operations that the application needs to perform on their specific unit of state
- Stores do not contain operations on data that are not related to accessing or modifying the state, such as pure transformations, summarisation, etc
- Operations on data not related to accessing or modifying the state are located in utils
- Stores are Pinia stores

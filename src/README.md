# Folder: `src`

This folder contains the source files that make up the application.

## Folder structure

The folder structure is as follows:

- 📁 `src` (folder)
  - 📁 `{structure-type}` (folder)
    - 📄 `{structure}.ts` (file)
    - 📁 `__tests__` (folder)
      - 📄 `{structure}.spec.ts` (file)

### Notes

- `main.ts` contains the code that first executes on application start-up and performs global set up, such as the store.
- `App.vue` contains the top-level Vue component, which serves as a container for the whole application.
- `{structure-type}` is one of the types of structures that make up the application:
  - [`assets`](assets/README.md) contains static files served directly to the browser, such as styles
  - [`client`](client/README.md) contains functions that call server-side APIs from the client (and associated types)
  - [`components`](components/README.md) contains re-usable pieces of the user interface
  - [`composables`](composables/README.md) contains re-usable pieces of logic consumed by views and components
  - [`data`](data/README.md) contains static data used by the application
  - [`mocks`](mocks/README.md) contains mock data used by unit tests
  - [`stores`](stores/README.md) contains stores, which contain state used across the application
  - [`types`](types/README.md) contains Typescript interfaces and types used across the application
  - [`utils`](utils/README.md) contains small general-purpose pure functions used across the application
  - [`views`](views/README.md) contains views that make up the application

# Folder: `views`

Views render the elements shown on a particular screen.

Parent views delegate parts of their rendering to child views, for code readability. All the related views are kept together in a group folder.

## Folder structure

The folder structure is as follows:

- 📁 `views` (folder)
  - 📁 `{group}` (folder)
    - 📄 `Neds{Group}{Parent}.vue` (file)
    - 📄 `Neds{Group}{Child1}.vue` (file)
    - 📄 `Neds{Group}{Child2}.vue` (file)
    - 📁 `__tests__` (folder)
      - 📄 `Neds{Group}{Parent}.spec.ts` (file)
      - 📄 `Neds{Group}{Child1}.spec.ts` (file)
      - 📄 `Neds{Group}{Child2}.spec.ts` (file)

## Integration-style tests

Each parent view has one integration-style tests file. This file contains integration-style tests which cover all and only states of the view that are accessible.

Integration-style tests cover the behaviour of the view as a whole but not implementation details. (Implementation details are covered in unit tests dedicated to the specific structures which they test, such as component unit tests for components, util unit tests for utils, etc.).

User interactions are simulated and outputs are asserted on. Externalities, such as API responses, system date/time, etc., are mocked.

# Folder: `components`

Components are re-usable pieces of user interface logic and/or styling.

## Folder structure

The folder structure is as follows:

- 📁 `components` (folder)
  - 📄 `Neds{Component}.vue` (file)
  - 📁 `__tests__` (folder)
    - 📄 `Neds{Component}.spec.ts` (file)
  - 📁 `{group}` (folder)
    - 📁 `__tests__` (folder)
      - 📄 `Neds{Group}{Component}.spec.ts` (file)
    - 📄 `Neds{Group}{Component}.vue` (file)

### Notes

- Groups of related components can be located in a {group} sub-folder, which has the same structure as the components folder
- Components in a group are prefixed with `Neds{Group}`. For example, components in the `Icon` group are prefixed with `NedsIcon{Component}`

## Component file layout

Component files usually have the following layout:

```
<script setup lang="ts">
{imports}

/**
 * @displayName {ComponentName}
 *
 * {Single line summary}
 *
 * {Multiple line detailed section, if needed}
 */

defineProps<{
  {props, if any}
}>

defineSlots<{
  {slot, if any}
}>

{model, if any}
</script>

<template>
  {template}
</template>
```

## Consumption

Components can be consumed by:

- Other components (inside the `components` folder)
- Views (inside the `views` folder)

## State

Component state is entirely controlled by its props. Components do not access stores or any other sources of state. Components can consume utils, which are stateless pure functions.

## Tests

Each component has one test file, containing unit tests for that component.

Component unit tests cover the component in all and only the states that it is actually used in the application.

This includes:

- Props values
- Components passed into slots of the component
- Parents whose slots the component is passed into

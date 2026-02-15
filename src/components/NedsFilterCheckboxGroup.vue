<script setup lang="ts">
import type { VNodeChild } from "vue";

/**
 * @displayName NedsFilterCheckboxGroup
 *
 * Renders a group of checkboxes for filtering options.
 */

defineProps<{
  /**
   * Provides an accessible label for the group
   */
  legend: string;
}>();

defineSlots<{
  /**
   * Checkboxes rendered within the group, instances of `NedsFilterCheckbox`
   */
  default: VNodeChild;
}>();
</script>

<template>
  <fieldset class="checkbox-group">
    <!-- The `legend` is visually hidden using the `sr-only` class, but it can be read by screen readers to improve accessibility. -->
    <legend class="sr-only">{{ legend }}</legend>

    <slot />
  </fieldset>
</template>

<style lang="css" scoped>
.checkbox-group {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-around;
  border: none;
  padding: 0;
  margin: 0;
}
</style>

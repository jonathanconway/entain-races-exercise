<script setup lang="ts">
import type { VNodeChild } from "vue";

import IconGreyhound from "./icons/NedsIconGreyhound.vue";
import IconHarness from "./icons/NedsIconHarness.vue";
import IconHorse from "./icons/NedsIconHorse.vue";

/**
 * @displayName NedsCategoryIcon

 * NedsCategoryIcon is a component that renders an icon based on the category name.
 * If the category name matches one of these, the corresponding icon will be rendered.
 * Otherwise, no icon will be rendered.
 */

defineProps<{
  /**
   * Determines which category icon to render.
   *
   * The component supports three categories:
   * - "Greyhound racing"
   * - "Harness racing"
   * - "Horse racing"
   */
  categoryName: string;
}>();

defineSlots<{
  /**
   * Content rendered inside the icon component.
   * Typically used to provide an accessible title.
   */
  default?: VNodeChild;
}>();
</script>

<template>
  <IconGreyhound v-if="categoryName === 'Greyhound racing'" class="category-icon">
    <slot />
  </IconGreyhound>

  <IconHarness v-else-if="categoryName === 'Harness racing'" class="category-icon">
    <slot />
  </IconHarness>

  <IconHorse v-else-if="categoryName === 'Horse racing'" class="category-icon">
    <slot />
  </IconHorse>
</template>

<style lang="css" scoped>
.category-icon {
  margin: 0.25rem;
}
</style>

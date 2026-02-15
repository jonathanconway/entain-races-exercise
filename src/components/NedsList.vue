<script setup lang="ts">
import type { VNodeChild } from "vue";

/**
 * @displayName NedsList
 *
 * Renders a list of items vertically.
 */

defineSlots<{
  /**
   * List items to be rendered within the list, instances of `NedsListItem`
   */
  default: VNodeChild;
}>();
</script>

<template>
  <ul class="list">
    <slot />
  </ul>
</template>

<style lang="css" scoped>
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

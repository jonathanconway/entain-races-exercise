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
  <ul class="w-full flex flex-col gap-2">
    <slot />
  </ul>
</template>

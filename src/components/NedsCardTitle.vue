<script setup lang="ts">
import type { VNodeChild } from "vue";

/**
 * @displayName NedsCardTitle
 *
 * NedsCardTitle renders a title for a NedsCard.
 * Typically used within the left-hand side of a NedsCard.
 */

defineSlots<{
  /**
   * Title content for the card, typically a string.
   */
  default: VNodeChild;
}>();
</script>

<template>
  <h3><slot /></h3>
</template>

<style lang="css" scoped>
h3 {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: calc(1 / 0.75);
  margin: 0;
}
</style>

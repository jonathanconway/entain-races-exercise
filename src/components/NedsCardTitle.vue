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
  <h3 class="font-bold text-xs uppercase"><slot /></h3>
</template>

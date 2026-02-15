<script setup lang="ts">
import type { VNodeChild } from "vue";

/**
 * @displayName NedsSection
 *
 * Section that groups related components.
 */

defineSlots<{
  /**
   * Content rendered within the section, typically a group of related components such as a title and list of items.
   */
  default: VNodeChild;
}>();
</script>

<template>
  <section class="section">
    <slot />
  </section>
</template>

<style lang="css" scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1.25rem;
}

@media (width > 40rem) {
  .section {
    width: 47.5rem;
  }
}
</style>

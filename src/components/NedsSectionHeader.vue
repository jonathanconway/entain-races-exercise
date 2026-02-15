<script setup lang="ts">
import type { VNodeChild } from "vue";

/**
 * @displayName NedsSectionHeader
 *
 * Section header used at the top of a `NedsSection`.
 * Typically contains a title and controls.
 */

defineProps<{
  /**
   * Title text to be displayed in the header, describing the section content.
   */
  title: string;
}>();

defineSlots<{
  /**
   * Content rendered within the header on the right-hand-side.
   */
  default: VNodeChild;
}>();
</script>

<template>
  <header class="section-header">
    <div class="section-header-title-bar">
      <h2 class="section-header-title-text">{{ title }}</h2>
    </div>

    <slot />
  </header>
</template>

<style lang="css" scoped>
.section-header {
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  gap: 0.5rem;
}

@media (width > 40rem) {
  .section-header {
    flex-direction: row;
    gap: 1rem;
  }
}

.section-header-title-bar {
  width: 100%;
  padding-block: 0.75rem;
  padding-inline: 0.5rem;
  background-image: linear-gradient(var(--color-ntg-header-light), var(--color-ntg-header-dark));
  color: var(--color-white);
}

.section-header-title-text {
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
}
</style>

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
  <header class="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
    <div
      class="w-full bg-gradient-to-b from-ntg-header-light to-ntg-header-dark px-2 py-3 text-white"
    >
      <h2 class="text-sm font-bold uppercase">{{ title }}</h2>
    </div>

    <slot />
  </header>
</template>

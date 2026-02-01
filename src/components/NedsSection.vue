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
  <section class="flex flex-col gap-2 p-5 md:w-190 mx-auto">
    <slot />
  </section>
</template>

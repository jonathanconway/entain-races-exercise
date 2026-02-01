<script setup lang="ts">
import type { VNodeChild } from "vue";

/**
 * @displayName NedsCard
 *
 * Simple container that displays content in a card format.
 * It has a left-hand side and a right-hand side, used for different types of content.
 * The card has a hover effect that adds a shadow and lifts the card slightly, and it is also focusable for accessibility.
 */

defineSlots<{
  /**
   * The left-hand side of the card, typically used for displaying an image or an icon and a title.
   */
  ["left-hand-side"]: VNodeChild;

  /**
   * The right-hand side of the card, typically used for displaying text or other content.
   */
  ["right-hand-side"]: VNodeChild;
}>();
</script>

<template>
  <div
    class="w-full flex px-3 py-2 justify-between bg-white rounded-sm shadow-xs hover:shadow-md hover:-translate-y-[1px] focus:shadow-md focus:-translate-y-[1px] transition-all transition-discrete duration-200 cursor-pointer outline-none"
    tabindex="0"
  >
    <div class="flex flex-col gap-2">
      <slot name="left-hand-side" />
    </div>

    <slot name="right-hand-side" />
  </div>
</template>

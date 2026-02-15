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
  <div class="card" tabindex="0">
    <div class="card-left">
      <slot name="left-hand-side" />
    </div>

    <slot name="right-hand-side" />
  </div>
</template>

<style lang="css" scoped>
.card {
  width: 100%;

  display: flex;
  padding-block: 0.5rem;
  padding-inline: 0.75rem;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.25rem;
  cursor: pointer;
  transition-property: all;
  transition-duration: 0.2s;
  transition-behavior: allow-discrete;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  box-shadow: 0 1px 2px 0 #0000000d;
}

.card:hover,
.card:focus {
  translate: 0 -1px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  outline: none;
}

.card-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>

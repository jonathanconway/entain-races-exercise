<script setup lang="ts">
import type { VNodeChild } from "vue";

import NedsIconCheck from "./icons/NedsIconCheck.vue";

/**
 * @displayName NedsFilterCheckbox
 *
 * Renders a checkbox with a label.
 */

defineProps<{
  /**
   * Unique identifier for the checkbox input
   */
  id: string;

  /**
   * Title of the checkbox
   * - Displayed as a tooltip
   * - Used for accessibility
   * - Used as the value of the checkbox input
   */
  title: string;
}>();

defineSlots<{
  /**
   * Additional content side-by-side with the checkbox, typically a decorative content such as an icon
   */
  default: VNodeChild;
}>();

const model = defineModel();
</script>

<template>
  <label :key="id" :for="id" class="checkbox-label">
    <input
      :id="id"
      :value="id"
      :title="title"
      v-model="model"
      type="checkbox"
      class="checkbox-input"
    />

    <!--
      Checkbox is styled with CSS to create a custom appearance and uses an SVG icon that changes based on the state of the checkbox.
    -->
    <NedsIconCheck class="checkbox-icon" aria-hidden="true" />

    <slot />
  </label>
</template>

<style lang="css" scoped>
.checkbox-label {
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  cursor: pointer;
}

@media (width >= 40rem) {
  .checkbox-label {
    padding: 0;
  }
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.checkbox-input + svg {
  fill: transparent;
  background-color: var(--color-gray-100);
  border-color: var(--color-gray-300);
  transition-property: all;
  transition-duration: 0.2s;
  transition-behavior: allow-discrete;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 1.5rem;
  height: 1.5rem;
}

.checkbox-input:hover + svg {
  background-color: var(--color-white);
}

.checkbox-input:checked + svg {
  background-color: var(--color-brand-dark);
  border-color: var(--color-brand-dark);
  fill: var(--color-white);
}

.checkbox-input:checked:hover + svg,
.checkbox-input:checked:focus + svg {
  background-color: var(--color-brand-light);
  border-color: var(--color-brand-light);
}

.checkbox-icon {
  border-radius: 0.25rem;
  border-width: 2px;
  border-style: solid;
}
</style>

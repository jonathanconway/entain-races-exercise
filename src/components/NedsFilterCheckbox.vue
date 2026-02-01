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
  <label :key="id" :for="id" class="group relative flex flex-row items-center gap-2 py-4 sm:py-0">
    <input
      :id="id"
      :value="id"
      :title="title"
      v-model="model"
      type="checkbox"
      class="absolute size-full opacity-0 [&+svg]:fill-transparent [&+svg]:bg-gray-100 [&+svg]:border-gray-300 [&:hover+svg]:bg-white [&:checked+svg]:bg-brand-dark [&:checked+svg]:border-brand-dark [&:hover+svg]:bg-gray-50 [&:checked+svg]:fill-white [&:checked:hover+svg]:bg-brand-light [&:checked:hover+svg]:border-brand-light [&:checked:focus+svg]:bg-brand-light [&:checked:focus+svg]:border-brand-light cursor-pointer"
    />

    <!--
      Checkbox is styled with Tailwind CSS classes to create a custom appearance and uses an SVG icon that changes based on the state of the checkbox.
    -->
    <NedsIconCheck
      class="size-6 flex items-center border-2 rounded-sm transition-all transition-discrete duration-200 cursor-pointer"
      aria-hidden="true"
    />

    <slot />
  </label>
</template>

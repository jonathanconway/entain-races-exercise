<script setup lang="ts">
import NedsCard from "./NedsCard.vue";

/**
 * @displayName NedsListLoading
 *
 * Loading state for a list of items using skeleton boxes.
 */
</script>

<template>
  <div class="w-full flex flex-col gap-2" aria-busy="true" data-testid="races-list-loading">
    <NedsCard v-for="index in 5" :key="index">
      <template v-slot:left-hand-side>
        <span class="size-[32px] m-1 bg-gray-200 animate-pulse"> &nbsp; </span>
        <span class="w-50 bg-gray-200 text-xs animate-pulse">&nbsp;</span>
      </template>
      <template v-slot:right-hand-side>
        <div class="h-16 flex flex-row items-center">
          <div class="w-16 h-4 bg-gray-200 animate-pulse">&nbsp;</div>
        </div>
      </template>
    </NedsCard>
  </div>

  <!-- The `Loading` text is visually hidden using the `sr-only` class, but it can be read by screen readers to improve accessibility. -->
  <div class="sr-only">Loading</div>
</template>

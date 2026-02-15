<script setup lang="ts">
import NedsCard from "./NedsCard.vue";

/**
 * @displayName NedsListLoading
 *
 * Loading state for a list of items using skeleton boxes.
 */
</script>

<template>
  <div class="loading-container" aria-busy="true" data-testid="races-list-loading">
    <NedsCard v-for="index in 5" :key="index">
      <template v-slot:left-hand-side>
        <span class="loading-left-hand-icon"> &nbsp; </span>
        <span class="loading-left-hand-heading">&nbsp;</span>
      </template>
      <template v-slot:right-hand-side>
        <div class="loading-right-hand-container">
          <div class="loading-right-hand-content">&nbsp;</div>
        </div>
      </template>
    </NedsCard>
  </div>

  <!-- The `Loading` text is visually hidden using the `sr-only` class, but it can be read by screen readers to improve accessibility. -->
  <div class="sr-only">Loading</div>
</template>

<style lang="css" scoped>
.loading-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.loading-left-hand-icon {
  width: 32px;
  height: 32px;
  margin: 0.25rem;
  background-color: var(--color-gray-200);
  animation: var(--animate-pulse);
}

.loading-left-hand-heading {
  width: 12.5rem;
  height: 16px;
  background-color: var(--color-gray-200);
  animation: var(--animate-pulse);
  line-height: calc(1 / 0.75);
}

.loading-right-hand-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.loading-right-hand-content {
  width: 4rem;
  height: 1rem;
  background-color: var(--color-gray-200);
  animation: var(--animate-pulse);
}
</style>

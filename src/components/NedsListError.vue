<script setup lang="ts">
/**
 * @displayName NedsListError
 *
 * Renders an error message, if a list cannot be loaded
 */
</script>

<template>
  <div class="error-container" role="alert" aria-label="Alert" data-testid="races-list-error">
    <div class="error-message">
      ❌ Sorry, something seems to have gone wrong. Please refresh or visit again later.
    </div>
  </div>
</template>

<style lang="css" scoped>
.error-container {
  width: 100%;
}

.error-message {
  padding: 1.25rem;
  background-color: var(--color-red-200);
  text-align: center;
}
</style>

<script setup lang="ts">
/**
 * @displayName NedsListError
 *
 * Renders an error message, if a list cannot be loaded
 */
</script>

<template>
  <div class="w-full" role="alert" aria-label="Alert" data-testid="races-list-error">
    <div class="p-5 bg-red-200 text-center">
      ❌ Sorry, something seems to have gone wrong. Please refresh or visit again later.
    </div>
  </div>
</template>

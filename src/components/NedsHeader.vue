<script setup lang="ts">
/**
 * @displayName NedsHeader
 *
 * Renders the main header for the Neds application.
 */
</script>

<template>
  <header
    class="w-full flex flex-col items-center md:flex-row p-3 md:p-4 bg-gradient-to-b from-brand-light to-brand"
  >
    <h1>
      <a class="flex h-full items-center justify-center select-none cursor-pointer" href="/">
        <!-- The title text is visually hidden using the `sr-only` class, but it can be read by screen readers to improve accessibility. -->
        <span class="sr-only">Neds</span>
        <img
          class="h-6"
          src="https://www.neds.com.au/images/neds/sprites/src/svg-brand-icon/colour/brand-wordmark-onbrand.svg"
          alt="Neds logo"
        />
      </a>
    </h1>
  </header>
</template>

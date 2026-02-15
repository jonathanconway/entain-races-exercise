<script setup lang="ts">
/**
 * @displayName NedsHeader
 *
 * Renders the main header for the Neds application.
 */
</script>

<template>
  <header class="header">
    <h1 class="title">
      <a class="title-link" href="/">
        <!-- The title text is visually hidden using the `sr-only` class, but it can be read by screen readers to improve accessibility. -->
        <span class="sr-only">Neds</span>
        <img
          class="logo"
          src="https://www.neds.com.au/images/neds/sprites/src/svg-brand-icon/colour/brand-wordmark-onbrand.svg"
          alt="Neds logo"
        />
      </a>
    </h1>
  </header>
</template>

<style lang="css" scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(var(--color-brand-light), var(--color-brand));
  padding-block: 0.75rem;
}

@media (width >= 40rem) {
  .header {
    padding: 1rem;
    flex-direction: row;
  }
}

.title {
  margin: 0;
  padding: 0;
}

.title-link {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
}

.logo {
  height: 1.5rem;
}
</style>

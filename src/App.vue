<script setup lang="ts">
import { PiniaColadaDevtools } from "@pinia/colada-devtools";

import NedsHeader from "./components/NedsHeader.vue";
import NedsRaces from "./views/races/NedsRaces.vue";

const isDevelopment = import.meta.env.MODE === "development";
</script>

<template>
  <NedsHeader />
  <main class="flex-1 bg-gray-200">
    <NedsRaces />
  </main>

  <PiniaColadaDevtools v-if="isDevelopment" />
</template>

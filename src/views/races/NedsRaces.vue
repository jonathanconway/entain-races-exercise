<script setup lang="ts">
import NedsSection from "@/components/NedsSection.vue";
import NedsSectionHeader from "@/components/NedsSectionHeader.vue";
import { useRacesView } from "@/composables/use-races-view";

import NedsRacesFilters from "./NedsRacesFilters.vue";
import NedsRacesList from "./NedsRacesList.vue";

const { loading, error, races } = useRacesView();
</script>

<template>
  <NedsSection>
    <NedsSectionHeader title="Next To Go Racing">
      <NedsRacesFilters />
    </NedsSectionHeader>
    <NedsRacesList :loading="loading" :error="error" :races="races" />
  </NedsSection>
</template>

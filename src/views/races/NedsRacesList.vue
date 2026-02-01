<script setup lang="ts">
import NedsList from "@/components/NedsList.vue";
import type { NextRace } from "@/types/next-race";

import NedsListError from "../../components/NedsListError.vue";
import NedsListLoading from "../../components/NedsListLoading.vue";

import NedsRacesListItem from "./NedsRacesListItem.vue";

const props = defineProps<{
  readonly loading: boolean;
  readonly error: boolean;
  readonly races?: readonly NextRace[];
}>();
</script>

<template>
  <NedsListLoading v-if="loading" />
  <NedsListError v-if="error" />

  <NedsList v-if="!loading && !error && races" data-testid="races-list-items">
    <NedsRacesListItem v-for="race in races" :race="race" :key="race.race_id" />
  </NedsList>
</template>

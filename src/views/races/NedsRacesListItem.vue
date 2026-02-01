<script setup lang="ts">
import NedsCard from "@/components/NedsCard.vue";
import NedsCardTitle from "@/components/NedsCardTitle.vue";
import NedsCategoryIcon from "@/components/NedsCategoryIcon.vue";
import NedsCountdown from "@/components/NedsCountdown.vue";
import { useRacesListItemView } from "@/composables/use-races-list-item-view";
import type { NextRace } from "@/types/next-race";

const props = defineProps<{
  race: NextRace;
}>();

const { raceTitle, startDateTimeUtc, countdownFormatted, countdownGettingClose } =
  useRacesListItemView(props);
</script>

<template>
  <li>
    <NedsCard :aria-label="raceTitle">
      <template v-slot:left-hand-side>
        <NedsCategoryIcon aria-label="Category" :category-name="race.category_name">
          <title>{{ race.category_name }}</title>
        </NedsCategoryIcon>

        <NedsCardTitle :id="race.race_id">
          {{ race.meeting_name }} <abbr title="Race Number">R{{ race.race_number }}</abbr>
        </NedsCardTitle>
      </template>
      <template v-slot:right-hand-side>
        <NedsCountdown
          :start-date-time="startDateTimeUtc"
          :countdown="countdownFormatted"
          :countdown-getting-close="countdownGettingClose"
        />
      </template>
    </NedsCard>
  </li>
</template>

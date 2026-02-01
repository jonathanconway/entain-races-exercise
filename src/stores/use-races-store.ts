import { defineStore } from "pinia";
import { computed, ref } from "vue";

import type { RacingJsonRaceSummaryId } from "@/queries/racing/racing-types";
import type { NextRace } from "@/types/next-race";
import { assert } from "@/utils/assert";

/**
 * State of races store
 * @type Store State
 */
interface RacesStoreState {
  races?: readonly NextRace[];
}

/**
 * Keeps track of races displayed in the races list
 * @type Store
 */
export const useRacesStore = defineStore("races", () => {
  const state = ref<RacesStoreState>({
    races: undefined,
  });

  const races = computed(() => state.value.races);

  function setRaces(races: readonly NextRace[]) {
    state.value.races = races;
  }

  function removeRace(race_id: RacingJsonRaceSummaryId) {
    assert(state.value.races);
    state.value.races = state.value.races.filter((race) => race.race_id !== race_id);
  }

  return {
    races,

    setRaces,
    removeRace,
  };
});

import { defineStore } from "pinia";
import { computed, ref } from "vue";

import type { RacingJsonRaceSummaryId } from "@/queries/racing/racing-types";
import type { NextRace } from "@/types/next-race";
import type { NextRaceCountdownSeconds } from "@/types/next-race-countdown";

/**
 * State of countdowns store
 * Maps a race_id => countdown in seconds
 * @type Store State
 */
type CountdownStoreState = Record<RacingJsonRaceSummaryId, NextRaceCountdownSeconds>;

/**
 * Updates countdown and removes past races
 * @param race Race for which to keep track of countdown
 * @type Composable
 */
export const useCountdownStore = defineStore("countdown", () => {
  const countdownsByRaceId = ref<CountdownStoreState>({});

  const getRaceCountdown = (race: NextRace) =>
    computed(() => countdownsByRaceId.value[race.race_id] ?? race.countdown);

  function decrementRaceCountdown(race: NextRace) {
    countdownsByRaceId.value[race.race_id] = getRaceCountdown(race).value - 1;
  }

  function clearRaceCountdown(race: NextRace) {
    delete countdownsByRaceId.value[race.race_id];
  }

  return {
    countdownsByRaceId,
    getRaceCountdown,
    decrementRaceCountdown,
    clearRaceCountdown,
  };
});

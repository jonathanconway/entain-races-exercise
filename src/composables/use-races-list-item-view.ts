import { computed, onUnmounted } from "vue";

import { useInterval } from "@/composables/use-interval";
import { useCountdownStore } from "@/stores/use-countdown-store";
import { useRacesStore } from "@/stores/use-races-store";
import type { NextRace } from "@/types/next-race";
import { calculateCountdownGettingClose } from "@/utils/countdown-calculate-getting-close";
import { formatCountdown } from "@/utils/countdown-format";
import { isCountdownPast } from "@/utils/countdown-is-past";
import { formatStartDateTimeUtc } from "@/utils/start-datetime-format-utc";

const COUNTDOWN_UPDATE_INTERVAL = 1_000;

export function useRacesListItemView({ race }: { race: NextRace }) {
  const { removeRace } = useRacesStore();
  const { getRaceCountdown, decrementRaceCountdown, clearRaceCountdown } = useCountdownStore();

  const countdown = computed(() => getRaceCountdown(race).value);

  useInterval(() => {
    decrementRaceCountdown(race);

    if (isCountdownPast(countdown.value)) {
      removeRace(race.race_id);
    }
  }, COUNTDOWN_UPDATE_INTERVAL);

  onUnmounted(() => {
    clearRaceCountdown(race);
  });

  const raceTitle = computed(() => `${race.meeting_name} R${race.race_number}`);
  const startDateTimeUtc = computed(() => formatStartDateTimeUtc(race));
  const countdownFormatted = computed(() => formatCountdown(countdown.value));
  const countdownGettingClose = computed(() => calculateCountdownGettingClose(countdown.value));

  return {
    raceTitle,
    startDateTimeUtc,
    countdownFormatted,
    countdownGettingClose,
  };
}

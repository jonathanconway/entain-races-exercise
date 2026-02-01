import type { NextRaceCountdownSeconds } from "@/types/next-race-countdown";

const PAST_RACE_MINUTES = -1;

/**
 * Checks if the race is past the point of being shown in the list
 * @param race Race object to calculate countdown for
 * @returns True if race started more than 1 minute ago, otherwise false
 * @type Util
 */
export function isCountdownPast(countdown: NextRaceCountdownSeconds) {
  const minutes = countdown / 60;
  return minutes <= PAST_RACE_MINUTES;
}

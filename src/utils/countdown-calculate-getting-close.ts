import type { NextRaceCountdownSeconds } from "@/types/next-race-countdown";

/**
 * Calculates whether provided `countdown` is getting close to current time
 * @param countdown Countdown object to perform calculation on
 * @returns True if <= 2m 59s remaining, otherwise false
 * @type Util
 */
export function calculateCountdownGettingClose(countdown: NextRaceCountdownSeconds = 0) {
  return countdown / 60 < 3;
}

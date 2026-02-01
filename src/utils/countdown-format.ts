import { Duration } from "luxon";

import type { NextRaceCountdownSeconds } from "@/types/next-race-countdown";

/**
 * Converts provided `countdown` into human readable `mm:ss` format
 * @param countdown Countdown object to format
 * @returns String with human readable `mm:ss` format
 * @type Util
 */
export function formatCountdown(countdown: NextRaceCountdownSeconds = 0): string {
  const duration = Duration.fromDurationLike(countdown * 1_000);
  const formatted = duration.toFormat("m'm' s's'");
  return formatted;
}

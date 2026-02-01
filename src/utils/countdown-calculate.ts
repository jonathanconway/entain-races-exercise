import { DateTime } from "luxon";

import type { RacingJsonRaceSummary } from "@/queries/racing/racing-types";
import type { NextRaceCountdownSeconds } from "@/types/next-race-countdown";

/**
 * Calculates the countdown to start of race from current time
 * @param race Race object to calculate countdown for
 * @returns Countdown object containing minutes and seconds to race start
 * @type Util
 */
export function calculateCountdown({
  race,
  now,
}: {
  readonly race: RacingJsonRaceSummary;
  readonly now: DateTime;
}): NextRaceCountdownSeconds {
  const duration = DateTime.fromSeconds(race.advertised_start.seconds).diff(now);
  const seconds = duration.as("seconds");
  return seconds;
}

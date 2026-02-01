import { DateTime } from "luxon";

import type { NextRace } from "@/types/next-race";

/**
 * Returns the start date and time of the provided `race` in UTC format
 * @param race Race object to get start date and time for
 * @returns Start date and time represented as string in UTC format
 * @example { ..., advertised_start: { seconds: 1770090300 } } => "2026-02-03T03:45:00.000Z"
 * @type Util
 */
export function formatStartDateTimeUtc(race: NextRace): string {
  const dateTime = DateTime.fromSeconds(race.advertised_start.seconds);
  return dateTime.toUTC().toString();
}

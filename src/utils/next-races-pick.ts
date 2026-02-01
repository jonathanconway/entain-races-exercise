import type { RacingJson } from "@/queries/racing/racing-types";

import { isNotNil } from "./is-not-nil";

/**
 * Picks next races to go from the racing API result to the provided limit
 * @param racingJson Racing API result
 * @param limit Maximum number of races to pick
 * @returns Array of next race summaries
 * @type Util
 */
export function pickNextRaces({
  racingJson,
  limit,
}: {
  readonly racingJson?: RacingJson;
  readonly limit: number;
}) {
  return (
    racingJson?.next_to_go_ids
      .slice(0, limit)
      .map((nextToGoId) => racingJson.race_summaries[nextToGoId])
      .filter(isNotNil) ?? []
  );
}

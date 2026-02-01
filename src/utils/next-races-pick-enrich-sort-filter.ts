import type { DateTime } from "luxon";

import type { RacingJson, RacingJsonRaceCategoryId } from "@/queries/racing/racing-types";
import type { Category } from "@/types/category";
import type { Filters } from "@/types/filters";
import type { NextRace } from "@/types/next-race";

import { enrichNextRaces } from "./next-races-enrich";
import { filterNextRaces } from "./next-races-filter";
import { pickNextRaces } from "./next-races-pick";
import { sortNextRaces } from "./next-races-sort";

/**
 * Picks, enriches, sorts and filters next races from racing API result
 * @param racingJson Racing API result
 * @param categoriesById Categories to look up, indexed by id
 * @param limit Maximum number of races to pick
 * @param filters Filters by which to filter races
 * @param now Current date and time, to calculate countdown
 * @returns Array of next races
 * @type Util
 */
export function pickEnrichSortFilterNextRaces({
  racingJson,
  categoriesById,
  limit,
  filters,
  now,
}: {
  readonly racingJson?: RacingJson;
  readonly categoriesById: Record<RacingJsonRaceCategoryId, Category>;
  readonly limit: number;
  readonly filters: Filters;
  readonly now: DateTime;
}): readonly NextRace[] {
  const nextRacesPicked = pickNextRaces({ racingJson, limit });

  const nextRacesEnriched = enrichNextRaces({
    raceSummaries: nextRacesPicked,
    categoriesById,
    now,
  });

  const nextRacesSorted = sortNextRaces(nextRacesEnriched);

  const nextRacesFiltered = filterNextRaces({ nextRaces: nextRacesSorted, filters });

  return nextRacesFiltered;
}

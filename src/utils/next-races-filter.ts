import type { Filters } from "@/types/filters";
import type { NextRace } from "@/types/next-race";

import { isCountdownPast } from "./countdown-is-past";

/**
 * Filters races by provided `filters`
 * - `categoryIds` - includes only races that have one of the ids in the array
 * - `countdown` - include only races that are not past 1 minute ago
 * @param nextRaces Races to filter
 * @param filters Filters by which to filter races
 * @returns Array of filtered races
 * @type Util
 */
export function filterNextRaces({
  nextRaces,
  filters,
}: {
  readonly nextRaces: readonly NextRace[];
  readonly filters: Filters;
}): readonly NextRace[] {
  nextRaces = filterNextRacesByCategories({ nextRaces, filters });

  nextRaces = filterNextRacesByNotPast(nextRaces);

  return nextRaces;
}

function filterNextRacesByCategories({
  nextRaces,
  filters,
}: {
  readonly nextRaces: readonly NextRace[];
  readonly filters: Filters;
}) {
  return nextRaces.filter((race) => filters.categoryIds.includes(race.category_id));
}

function filterNextRacesByNotPast(nextRaces: readonly NextRace[]) {
  return nextRaces.filter((race) => !isCountdownPast(race.countdown));
}

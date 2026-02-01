import type { DateTime } from "luxon";

import type {
  RacingJsonRaceCategoryId,
  RacingJsonRaceSummary,
} from "@/queries/racing/racing-types";
import type { Category } from "@/types/category";

import { calculateCountdown } from "./countdown-calculate";

/**
 * Enriches next races, adding category and countdown for each
 * @param raceSummaries Race summaries from racing API result
 * @param categoriesById Categories to look up, indexed by id
 * @param now Current date and time, to calculate countdown
 * @returns Array of enriched next races
 * @type Util
 */
export function enrichNextRaces({
  raceSummaries,
  categoriesById,
  now,
}: {
  readonly raceSummaries: readonly RacingJsonRaceSummary[];
  readonly categoriesById: Record<RacingJsonRaceCategoryId, Category>;
  readonly now: DateTime;
}) {
  return raceSummaries.map((race_summary) => ({
    ...race_summary,
    category_name: categoriesById[race_summary.category_id]?.name ?? "",
    countdown: calculateCountdown({ race: race_summary, now }),
  }));
}

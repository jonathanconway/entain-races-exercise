import type { RacingJsonRaceCategoryId } from "@/queries/racing/racing-types";

/**
 * Fields and values by which races can be filtered
 */
export interface Filters {
  categoryIds: RacingJsonRaceCategoryId[];
}

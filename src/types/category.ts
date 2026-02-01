import type { RacingJsonRaceCategoryId } from "@/queries/racing/racing-types";

/**
 * Details of category of a race
 */
export interface Category {
  readonly id: RacingJsonRaceCategoryId;
  readonly name: string;
}

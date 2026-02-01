import type { RacingJsonRaceSummary } from "@/queries/racing/racing-types";

import type { NextRaceCountdownSeconds } from "./next-race-countdown";

/**
 * Race in top 5 next to go list with full details looked up
 */
export interface NextRace extends RacingJsonRaceSummary {
  readonly category_name: string;
  readonly countdown: NextRaceCountdownSeconds;
}

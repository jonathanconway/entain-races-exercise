import type z from "zod";

import type {
  RacingJsonRaceCategoryId,
  RacingJsonRaceSummary,
  RacingJsonRaceSummaryId,
  RacingJsonSchema,
  RacingSchema,
} from "./racing-schema";

export type Racing = z.infer<typeof RacingSchema>;

export type RacingJson = z.infer<typeof RacingJsonSchema>;

export type RacingJsonRaceSummaryId = z.infer<typeof RacingJsonRaceSummaryId>;

export type RacingJsonRaceCategoryId = z.infer<typeof RacingJsonRaceCategoryId>;

export type RacingJsonRaceSummary = z.infer<typeof RacingJsonRaceSummary>;

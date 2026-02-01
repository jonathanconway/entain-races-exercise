import z from "zod";

export const RacingJsonRaceSummaryId = z.uuid();

export const RacingJsonRaceSummaryMeetingId = z.uuid();

export const RacingJsonRaceCategoryId = z.uuid();

export const RacingJsonRaceSummary = z.looseObject({
  race_id: RacingJsonRaceSummaryId.readonly(),
  race_name: z.string().readonly(),
  race_number: z.number().readonly(),
  meeting_id: RacingJsonRaceSummaryMeetingId.readonly(),
  meeting_name: z.string().readonly(),
  category_id: RacingJsonRaceCategoryId.readonly(),
  advertised_start: z
    .object({
      seconds: z.number().readonly(),
    })
    .readonly(),
});

export const RacingJsonSchema = z.object({
  next_to_go_ids: z.array(RacingJsonRaceSummaryId).readonly(),
  race_summaries: z.record(RacingJsonRaceSummaryId, RacingJsonRaceSummary).readonly(),
});

export const RacingSchema = z.object({
  data: RacingJsonSchema.readonly(),
  status: z.number().max(999).readonly(),
  message: z.string().readonly(),
});

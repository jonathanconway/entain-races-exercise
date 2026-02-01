import { describe, expect, it } from "vitest";

import type { RacingJson, RacingJsonRaceSummary } from "@/queries/racing/racing-types";

import { pickNextRaces } from "../next-races-pick";

describe("enrichNextRaces", () => {
  it("takes racing api response and returns top 5 races", () => {
    const raceSummaryBase: RacingJsonRaceSummary = {
      race_id: "",
      race_name: "",
      race_number: 1,
      meeting_id: "",
      meeting_name: "",
      category_id: "",
      category_name: "",
      advertised_start: {
        seconds: 1770090500,
      },
      countdown: 2 * 60,
    };
    const race1: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race1",
    };
    const race2: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race2",
    };
    const race3: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race3",
    };
    const race4: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race4",
    };
    const race5: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race5",
    };
    const race6: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race6",
    };

    const next_to_go_ids = ["race1", "race2", "race3", "race4", "race5", "race6"];

    const race_summaries = { race1, race2, race3, race4, race5, race6 };

    const racingJson: RacingJson = {
      next_to_go_ids,
      race_summaries,
    };

    const results = pickNextRaces({
      racingJson,
      limit: 5,
    });

    expect(results).toEqual([race1, race2, race3, race4, race5]);
  });
});

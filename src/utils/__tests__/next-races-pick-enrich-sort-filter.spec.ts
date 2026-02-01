import { DateTime } from "luxon";
import { describe, expect, it } from "vitest";

import type { RacingJson, RacingJsonRaceSummary } from "@/queries/racing/racing-types";
import type { Category } from "@/types/category";
import type { Filters } from "@/types/filters";

import { pickEnrichSortFilterNextRaces } from "../next-races-pick-enrich-sort-filter";

describe("pickEnrichSortFilterNextRaces", () => {
  it("takes racing api response and picks, enriches, sorts and filters next races", () => {
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
    };
    const race1: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race1",
      category_id: "category1",
      countdown: 2 * -60,
    };
    const race2: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race2",
      category_id: "category2",
      countdown: -30,
    };
    const race3: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race3",
      category_id: "category3",
      countdown: 0,
    };
    const race4: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race4",
      category_id: "category4",
      countdown: 30,
    };
    const race5: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race5",
      category_id: "category5",
      countdown: 60,
    };
    const race6: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race6",
      category_id: "category6",
      countdown: 60,
    };

    const next_to_go_ids = ["race1", "race2", "race3", "race4", "race5", "race6"];

    const race_summaries = { race1, race2, race3, race4, race5, race6 };

    const racingJson: RacingJson = {
      next_to_go_ids,
      race_summaries,
    };

    const category1: Category = {
      id: "category1",
      name: "Category1",
    };
    const category2: Category = {
      id: "category2",
      name: "Category2",
    };
    const category3: Category = {
      id: "category3",
      name: "Category3",
    };
    const categoriesById = {
      category1,
      category2,
      category3,
    };

    const filters: Filters = {
      categoryIds: ["category1", "category3"],
    };

    const limit = 5;

    const now = DateTime.fromSeconds(1770090500);

    const results = pickEnrichSortFilterNextRaces({
      racingJson,
      categoriesById,
      filters,
      limit,
      now,
    });

    expect(results).toEqual([
      {
        race_id: "race1",
        race_name: "",
        race_number: 1,
        meeting_id: "",
        meeting_name: "",
        category_id: "category1",
        category_name: "Category1",
        advertised_start: { seconds: 1770090500 },
        countdown: 0,
      },
      {
        race_id: "race3",
        race_name: "",
        race_number: 1,
        meeting_id: "",
        meeting_name: "",
        category_id: "category3",
        category_name: "Category3",
        advertised_start: { seconds: 1770090500 },
        countdown: 0,
      },
    ]);
  });
});

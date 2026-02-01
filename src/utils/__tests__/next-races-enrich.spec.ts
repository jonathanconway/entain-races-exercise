import { DateTime } from "luxon";
import { describe, expect, it } from "vitest";

import type { RacingJsonRaceSummary } from "@/queries/racing/racing-types";
import type { Category } from "@/types/category";

import { enrichNextRaces } from "../next-races-enrich";

describe("enrichNextRaces", () => {
  it("takes race summaries and returns races enriched with categories and countdowns", () => {
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
    const raceSummary1: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race1",
      category_id: "category1",
    };
    const raceSummary2: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race2",
      category_id: "category2",
    };
    const raceSummary3: RacingJsonRaceSummary = {
      ...raceSummaryBase,
      race_id: "race3",
      category_id: "category3",
    };

    const raceSummaries: readonly RacingJsonRaceSummary[] = [
      raceSummary1,
      raceSummary2,
      raceSummary3,
    ];

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

    const now = DateTime.fromISO("2026-02-03T14:45:29.000Z");

    const results = enrichNextRaces({
      raceSummaries,
      categoriesById,
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
        countdown: -39429,
      },
      {
        race_id: "race2",
        race_name: "",
        race_number: 1,
        meeting_id: "",
        meeting_name: "",
        category_id: "category2",
        category_name: "Category2",
        advertised_start: { seconds: 1770090500 },
        countdown: -39429,
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
        countdown: -39429,
      },
    ]);
  });
});

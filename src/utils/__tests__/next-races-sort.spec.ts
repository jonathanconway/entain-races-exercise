import { describe, expect, it } from "vitest";

import type { NextRace } from "@/types/next-race";

import { sortNextRaces } from "../next-races-sort";

describe("sortNextRaces", () => {
  it("takes unsorted races and sorts by countdown ascending", () => {
    const raceSummaryBase: NextRace = {
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
      countdown: 0,
    };
    const race3: NextRace = {
      ...raceSummaryBase,
      race_id: "race1",
      countdown: 30,
    };
    const race2: NextRace = {
      ...raceSummaryBase,
      race_id: "race2",
      countdown: 0,
    };
    const race1: NextRace = {
      ...raceSummaryBase,
      race_id: "race3",
      countdown: -30,
    };

    const races = [race1, race2, race3];

    const results = sortNextRaces(races);

    expect(results).toEqual([race1, race2, race3]);
  });
});

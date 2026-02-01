import { describe, expect, it } from "vitest";

import type { Filters } from "@/types/filters";
import type { NextRace } from "@/types/next-race";

import { filterNextRaces } from "../next-races-filter";

describe("filterNextRaces", () => {
  it("filters next races by category ids and not past", () => {
    const nextRaceBase: NextRace = {
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
    const nextRace1: NextRace = {
      ...nextRaceBase,
      category_id: "category1",
    };
    const nextRace2: NextRace = {
      ...nextRaceBase,
      category_id: "category2",
    };
    const nextRace3: NextRace = {
      ...nextRaceBase,
      category_id: "category3",
      countdown: -(2 * 60),
    };

    const nextRaces = [nextRace1, nextRace2, nextRace3];

    const filters: Filters = {
      categoryIds: ["category1", "category3"],
    };

    const result = filterNextRaces({
      nextRaces,
      filters,
    });

    expect(result).toEqual([
      {
        race_id: "",
        race_name: "",
        race_number: 1,
        meeting_id: "",
        meeting_name: "",
        category_id: "category1",
        category_name: "",
        advertised_start: { seconds: 1770090500 },
        countdown: 120,
      },
    ]);
  });
});

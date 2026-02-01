import { DateTime } from "luxon";
import { describe, expect, it } from "vitest";

import type { NextRace } from "@/types/next-race";

import { calculateCountdown } from "../countdown-calculate";

describe("calculateRaceCountdown", () => {
  it("calculates the difference between advertised start and current time in minutes and seconds", () => {
    const race: NextRace = {
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

    const now = DateTime.fromSeconds(1770090500).plus({ minutes: 1 });

    const result = calculateCountdown({ race, now });

    expect(result).toEqual(-60);
  });
});

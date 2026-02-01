import { describe, expect, it } from "vitest";

import type { NextRace } from "@/types/next-race";

import { formatStartDateTimeUtc } from "../start-datetime-format-utc";

describe("formatStartDateTimeUtc", () => {
  it("formats countdown value as a full date and time in UTC", () => {
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
    expect(formatStartDateTimeUtc(race)).toEqual("2026-02-03T03:48:20.000Z");
  });
});

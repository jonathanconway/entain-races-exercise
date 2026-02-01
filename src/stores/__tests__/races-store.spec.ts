import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";

import type { NextRace } from "@/types/next-race";

import { useRacesStore } from "../use-races-store";

describe("useRacesStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("stores races", () => {
    const baseRace: NextRace = {
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
    const race1: NextRace = {
      ...baseRace,
      race_id: "race1",
    };
    const race2: NextRace = {
      ...baseRace,
      race_id: "race2",
    };

    const races = useRacesStore();

    expect(races.races).toBeUndefined();

    races.setRaces([race1, race2]);

    expect(races.races).toEqual([race1, race2]);

    races.removeRace("race1");

    expect(races.races).toEqual([race2]);
  });
});

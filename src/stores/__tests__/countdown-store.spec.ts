import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { NextRace } from "@/types/next-race";
import { withSetup } from "@/utils/with-setup";

import { useCountdownStore } from "../use-countdown-store";

describe("useCountdownStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.useFakeTimers();
  });

  it("gets, decrements and clears race countdown", async () => {
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

    vi.setSystemTime("2026-02-03 14:45:29");

    const { result, app } = withSetup(() => useCountdownStore());

    const countdown = result.getRaceCountdown(race);

    expect(countdown.value).toEqual(120);

    result.decrementRaceCountdown(race);

    expect(countdown.value).toEqual(119);

    result.clearRaceCountdown(race);

    expect(result.countdownsByRaceId[race.race_id]).toBeUndefined();

    app.unmount();
  });
});

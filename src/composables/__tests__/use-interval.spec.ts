import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { withSetup } from "@/utils/with-setup";

import { useInterval } from "../use-interval";

describe("useInterval", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.useFakeTimers();
  });

  it("sets up interval", async () => {
    const interval = vi.fn();

    const { app } = withSetup(() => useInterval(interval, 1_000));

    expect(interval).not.toHaveBeenCalled();

    vi.advanceTimersToNextTimer();

    // Interval is called after 1st timeout
    expect(interval).toHaveBeenCalledTimes(1);

    vi.advanceTimersToNextTimer();

    // Interval is called after 2nd timeout
    expect(interval).toHaveBeenCalledTimes(2);

    app.unmount();

    vi.advanceTimersToNextTimer();

    // Interval doesn't run after composable is unmounted
    expect(interval).toHaveBeenCalledTimes(2);
  });
});

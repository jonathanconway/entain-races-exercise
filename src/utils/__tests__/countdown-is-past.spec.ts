import { describe, expect, it } from "vitest";

import { isCountdownPast } from "../countdown-is-past";

describe("isCountdownPast", () => {
  it("returns true if the provided countdown is < -1 minutes after start time", () => {
    expect(isCountdownPast(2 * 60 + 30)).toBe(false);
    expect(isCountdownPast(2 * 60)).toBe(false);
    expect(isCountdownPast(1 * 60 + 30)).toBe(false);
    expect(isCountdownPast(0 * 60 + 30)).toBe(false);
    expect(isCountdownPast(-31)).toBe(false);
    expect(isCountdownPast(-1 * 60)).toBe(true);
    expect(isCountdownPast(-1 * 60 - 30)).toBe(true);
  });
});

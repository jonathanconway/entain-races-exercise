import { describe, expect, it } from "vitest";

import { calculateCountdownGettingClose } from "../countdown-calculate-getting-close";

describe("calculateCountdownGettingClose", () => {
  it.each`
    minutes | seconds | expected
    ${1}    | ${59}   | ${true}
    ${2}    | ${0}    | ${true}
    ${2}    | ${30}   | ${true}
    ${2}    | ${59}   | ${true}
    ${3}    | ${0}    | ${false}
  `("returns true if <= 2:59 remaining", ({ minutes, seconds, expected }) => {
    expect(calculateCountdownGettingClose(minutes * 60 + seconds)).toBe(expected);
  });
});

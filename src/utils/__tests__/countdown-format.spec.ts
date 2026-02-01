import { describe, expect, it } from "vitest";

import { formatCountdown } from "../countdown-format";

describe("formatCountdown", () => {
  it.each`
    countdown | expected
    ${0}      | ${"0m 0s"}
    ${30}     | ${"0m 30s"}
    ${60}     | ${"1m 0s"}
    ${90}     | ${"1m 30s"}
    ${120}    | ${"2m 0s"}
  `("formats countdown values as mm:ss", ({ countdown, expected }) => {
    expect(formatCountdown(countdown)).toEqual(expected);
  });
});

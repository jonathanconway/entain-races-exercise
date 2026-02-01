import { describe, expect, it } from "vitest";

import { throws } from "../throws";

describe("assert", () => {
  it("returns false if fn does not throw", () => {
    expect(throws(() => {})).toBe(false);
  });

  it("returns true if fn throws", () => {
    expect(
      throws(() => {
        throw new Error();
      }),
    ).toBe(true);
  });
});

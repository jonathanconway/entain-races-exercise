import { describe, expect, it } from "vitest";

import { assert } from "../assert";
import { throws } from "../throws";

describe("assert", () => {
  it("does nothing if condition is truthy", () => {
    assert(true);
    assert(1);
    assert(" ");
    assert({});
  });

  it("throws if condition is falsy", () => {
    expect(throws(() => assert(false))).toBe(true);
    expect(throws(() => assert(0))).toBe(true);
    expect(throws(() => assert(""))).toBe(true);
    expect(throws(() => assert(null))).toBe(true);
    expect(throws(() => assert(undefined))).toBe(true);
  });
});

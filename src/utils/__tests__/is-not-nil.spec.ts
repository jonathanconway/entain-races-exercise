import { describe, expect, it } from "vitest";

import { isNotNil } from "../is-not-nil";

describe("is-not-nil", () => {
  it.each`
    input        | expected
    ${undefined} | ${false}
    ${null}      | ${false}
    ${1}         | ${true}
    ${0}         | ${true}
    ${false}     | ${true}
    ${true}      | ${true}
    ${""}        | ${true}
    ${" "}       | ${true}
    ${{}}        | ${true}
    ${[]}        | ${true}
  `("returns $expected if value is $input", ({ input, expected }) => {
    expect(isNotNil(input)).toBe(expected);
  });
});

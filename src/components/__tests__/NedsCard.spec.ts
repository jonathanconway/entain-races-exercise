import { mount } from "@vue/test-utils";
import { assert, describe, expect, it } from "vitest";

import NedsCard from "../NedsCard.vue";

describe("NedsCard", () => {
  it("renders properly", () => {
    const wrapper = mount(NedsCard, {
      slots: {
        "left-hand-side": "<span data-testid='left-hand-side-content' />",
        "right-hand-side": "<span data-testid='right-hand-side-content' />",
      },
    });

    const containerEl = wrapper.element as HTMLDivElement;
    expect(containerEl.tagName).toEqual("DIV");

    const [leftSideEl, rightSideEl] = containerEl.children;

    assert(leftSideEl);
    expect(leftSideEl.tagName).toEqual("DIV");
    const [leftSideContentEl] = leftSideEl.children;
    assert(leftSideContentEl);
    expect(leftSideContentEl.getAttribute("data-testid")).toEqual(
      "left-hand-side-content",
    );

    assert(rightSideEl);
    expect(rightSideEl.getAttribute("data-testid")).toEqual(
      "right-hand-side-content",
    );
  });
});

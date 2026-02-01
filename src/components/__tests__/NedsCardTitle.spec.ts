import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NedsCardTitle from "../NedsCardTitle.vue";

describe("NedsCardTitle", () => {
  it("renders properly", () => {
    const wrapper = mount(NedsCardTitle, {
      slots: {
        default: ["Card Title"],
      },
    });

    const headingEl = wrapper.element as HTMLHeadingElement;
    expect(headingEl.tagName).toEqual("H3");
    expect(headingEl.textContent).toEqual("Card Title");
  });
});

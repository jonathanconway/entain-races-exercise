import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NedsSection from "../NedsSection.vue";

describe("NedsSection", () => {
  it("renders properly", () => {
    const wrapper = mount(NedsSection, {
      slots: {
        default: "<span data-testid='child' />",
      },
    });

    const containerEl = wrapper.element as HTMLElement;
    expect(containerEl.tagName).toEqual("SECTION");

    const childEl = containerEl.children[0] as HTMLDivElement;
    expect(childEl.getAttribute("data-testid")).toEqual("child");
  });
});

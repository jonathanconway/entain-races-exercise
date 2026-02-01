import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NedsListLoading from "../NedsListLoading.vue";

describe("NedsListLoading", () => {
  it("renders properly", () => {
    const wrapper = mount(NedsListLoading);

    const [loadingContainerEl, loadingTextEl] = wrapper.element.children as [
      HTMLDivElement,
      HTMLDivElement,
    ];
    expect(loadingContainerEl.getAttribute("data-testid")).toEqual(
      "races-list-loading",
    );
    expect(loadingContainerEl.getAttribute("aria-busy")).toEqual("true");
    expect(loadingTextEl.textContent).toEqual("Loading");
  });
});

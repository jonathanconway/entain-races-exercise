import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NedsListError from "../NedsListError.vue";

describe("NedsListError", () => {
  it("renders properly", () => {
    const wrapper = mount(NedsListError);

    const containerEl = wrapper.find("[data-testid='races-list-error']");
    expect(containerEl.text()).toStrictEqual(
      "❌ Sorry, something seems to have gone wrong. Please refresh or visit again later.",
    );
    expect(containerEl.attributes("role")).toEqual("alert");
    expect(containerEl.attributes("aria-label")).toEqual("Alert");
  });
});

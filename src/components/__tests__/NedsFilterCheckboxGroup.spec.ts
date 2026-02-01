import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NedsFilterCheckboxGroup from "../NedsFilterCheckboxGroup.vue";

describe("NedsFilterCheckboxGroup", () => {
  it("renders properly", () => {
    const wrapper = mount(NedsFilterCheckboxGroup, {
      props: {
        legend: "Categories",
      },
      slots: {
        default: ["<span data-testid='child'></span>"],
      },
    });

    expect((wrapper.element as HTMLDivElement).tagName).toEqual("FIELDSET");
    expect(wrapper.find("span[data-testid='child']").exists()).toEqual(true);
    expect(wrapper.find("legend").text()).toEqual("Categories");
  });
});

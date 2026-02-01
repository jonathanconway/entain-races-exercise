import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NedsCategoryIcon from "../NedsCategoryIcon.vue";

describe("NedsCategoryIcon", () => {
  it.each`
    categoryName          | testId
    ${"Greyhound racing"} | ${"greyhound-racing-icon"}
    ${"Harness racing"}   | ${"harness-racing-icon"}
    ${"Horse racing"}     | ${"horse-racing-icon"}
  `("renders properly", ({ categoryName, testId }) => {
    const wrapper = mount(NedsCategoryIcon, {
      props: {
        categoryName,
        title: categoryName,
      },
      slots: {
        default: `<title>${categoryName}</title>`,
      },
    });

    const iconSvgEl = wrapper.find("svg");
    expect(iconSvgEl.exists()).toBe(true);
    expect(iconSvgEl.attributes("data-testid")).toStrictEqual(testId);

    const iconSvgTitleEl = wrapper.find("svg title");
    expect(iconSvgTitleEl.exists()).toBe(true);
    expect(iconSvgTitleEl.text()).toEqual(categoryName);
  });
});

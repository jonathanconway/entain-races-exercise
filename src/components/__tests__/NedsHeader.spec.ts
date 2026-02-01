import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NedsHeader from "../NedsHeader.vue";

describe("NedsHeader", () => {
  it("renders properly", () => {
    const wrapper = mount(NedsHeader);

    expect(wrapper.get("header > h1 > a").text()).toContain("Neds");
    expect(wrapper.get("img").attributes("src")).toBeTruthy();
    expect(wrapper.get("img").attributes("alt")).toEqual("Neds logo");
  });
});

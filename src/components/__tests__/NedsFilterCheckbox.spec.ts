import { mount } from "@vue/test-utils";
import { assert, describe, expect, it } from "vitest";

import NedsFilterCheckbox from "../NedsFilterCheckbox.vue";

describe("NedsFilterCheckbox", () => {
  it("renders properly", () => {
    const wrapper = mount(NedsFilterCheckbox, {
      props: {
        id: "my-checkbox-id",
        title: "My Checkbox Title",
        modelValue: "foo",
        group: "my-checkbox-group",
      },
      slots: {
        default: "<span data-testid='child'></span>",
      },
    });

    // Label
    const labelEl = wrapper.element as HTMLLabelElement;
    expect(labelEl.tagName).toEqual("LABEL");

    // Checkbox input
    const inputEl = wrapper.find("input[type='checkbox']");
    expect(inputEl.attributes("title")).toEqual("My Checkbox Title");
    expect(inputEl.attributes("id")).toEqual("my-checkbox-id");

    // Checkbox icon
    const checkboxIconEl = wrapper.find("svg[data-testid='check-icon']");
    expect(checkboxIconEl.exists()).toBe(true);
    expect(checkboxIconEl.attributes("aria-hidden")).toBe("true");

    // Child injected into slot
    const labelLastChildEl = Array.from(labelEl.children).slice(-1)[0];
    assert(labelLastChildEl);
    expect(labelLastChildEl.getAttribute("data-testid")).toEqual("child");
  });
});

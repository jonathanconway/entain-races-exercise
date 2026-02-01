import { mount } from "@vue/test-utils";
import { assert, describe, expect, it } from "vitest";

import NedsList from "../NedsList.vue";

describe("NedsList", () => {
  it("renders properly", () => {
    const wrapper = mount(NedsList, {
      slots: {
        default: `
          <li data-testid='item-1' />
          <li data-testid='item-2' />
          <li data-testid='item-3' />
        `,
      },
    });

    const containerEl = wrapper.element;
    expect(containerEl.tagName).toEqual("UL");

    const childEls = containerEl.children;
    assert(childEls[0]);
    expect(childEls[0].getAttribute("data-testid")).toEqual("item-1");
    assert(childEls[1]);
    expect(childEls[1].getAttribute("data-testid")).toEqual("item-2");
    assert(childEls[2]);
    expect(childEls[2].getAttribute("data-testid")).toEqual("item-3");
  });
});

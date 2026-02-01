import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NedsSectionHeader from "../NedsSectionHeader.vue";

describe("NedsSectionHeader", () => {
  it("renders properly", () => {
    const wrapper = mount(NedsSectionHeader, {
      props: {
        title: "Section Title",
      },
      slots: {
        default: "<span data-testid='child' />",
      },
    });

    const headerEl = wrapper.element as HTMLHeadElement;
    expect(headerEl.tagName).toEqual("HEADER");

    const titleBarEl = headerEl.children[0] as HTMLDivElement;
    expect(titleBarEl.tagName).toEqual("DIV");

    const titleEl = titleBarEl.children[0] as HTMLHeadingElement;
    expect(titleEl.tagName).toEqual("H2");
    expect(titleEl.textContent).toEqual("Section Title");

    const childEl = headerEl.children[1] as HTMLSpanElement;
    expect(childEl.tagName).toEqual("SPAN");
    expect(childEl.getAttribute("data-testid")).toEqual("child");
  });
});

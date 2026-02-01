import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NedsCountdown from "../NedsCountdown.vue";

describe("NedsCountdown", () => {
  it("renders properly", () => {
    const wrapper = mount(NedsCountdown, {
      props: {
        startDateTime: "2026-02-03T14:45:29.000Z",
        countdown: "2m 30s",
        countdownGettingClose: false,
      },
    });

    const countdownEl = wrapper.find("time[aria-label='Countdown to start']");
    expect(countdownEl.attributes("datetime")).toEqual("2026-02-03T14:45:29.000Z");
    expect(countdownEl.text()).toEqual("2m 30s");
  });

  it("renders in brand color with ping animation if getting close", () => {
    const wrapper = mount(NedsCountdown, {
      props: {
        startDateTime: "",
        countdown: "",
        countdownGettingClose: true,
      },
    });

    const countdownEl = wrapper.find("time[aria-label='Countdown to start']");
    expect(countdownEl.classes()).toContain("text-brand-dark");

    const countdownGettingCloseEl = wrapper.find("[class~='bg-brand']");
    expect(countdownGettingCloseEl.classes()).toContain("animate-ping");
  });
});

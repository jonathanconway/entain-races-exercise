import { flushPromises, mount } from "@vue/test-utils";
import { HttpResponse, type JsonBodyType, http } from "msw";
import { setupServer } from "msw/node";
import { createPinia, setActivePinia } from "pinia";
import { assert, beforeEach, describe, expect, it, vi } from "vitest";

import {
  mockResponseError,
  mockResponseOk,
  mockResponseOkTimes,
  racingUrl,
} from "@/queries/racing/racing-mocks";

import NedsRaces from "../NedsRaces.vue";

function mountNedsRaces() {
  const pinia = createPinia();
  setActivePinia(pinia);

  return mount(NedsRaces, {
    global: {
      plugins: [pinia],
    },
  });
}

describe("NedsRaces", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime("2026-02-03 14:45:00");
  });

  it("renders races", async () => {
    const getRacingHandler = http.get(racingUrl, () => mockResponseOk());
    const server = setupServer(getRacingHandler);
    server.listen();

    const wrapper = mountNedsRaces();

    expect(wrapper.get("h2").text()).toBe("Next To Go Racing");

    await flushPromises();

    const racesListItemsEl = wrapper.find("[data-testid='races-list-items']");

    expect(racesListItemsEl.element.childElementCount).toBe(5);

    // Meeting titles
    expect(racesListItemsEl.findAll("h3").map((h3) => h3.text())).toStrictEqual([
      "Townsville R1",
      "Albion Park R2",
      "Q1 Lakeside R1",
      "Healesville R12",
      "Angle Park R10",
    ]);

    // Category icons
    expect(racesListItemsEl.findAll("svg").map((svg) => svg.text())).toStrictEqual([
      "Horse racing",
      "Harness racing",
      "Greyhound racing",
      "Greyhound racing",
      "Greyhound racing",
    ]);

    server.close();
  });

  it("renders filters", async () => {
    const wrapper = mountNedsRaces();

    const racesEl = wrapper.find("[data-testid='filters']");

    expect(
      racesEl.findAll("input[type='checkbox']").map((checkboxEl) => checkboxEl.attributes("title")),
    ).toStrictEqual(["Horse racing", "Greyhound racing", "Harness racing"]);
  });

  it("shows loading while request loads", async () => {
    let resolve!: (value: HttpResponse<JsonBodyType>) => void;
    const promise = new Promise<HttpResponse<JsonBodyType>>((resolve_) => {
      resolve = resolve_;
    });

    const getRacingHandler = http.get(racingUrl, () => promise);

    const server = setupServer(getRacingHandler);
    server.listen();

    const wrapper = mountNedsRaces();
    await wrapper.vm.$nextTick();

    expect(wrapper.find("[data-testid='races-list-loading']").exists()).toBe(true);

    resolve(mockResponseOk());

    await flushPromises();

    expect(wrapper.find("[data-testid='races-list-loading']").exists()).toBe(false);
    expect(wrapper.find("[data-testid='races-list-items']").exists()).toBe(true);

    server.close();
  });

  it("shows error if request fails", async () => {
    const getRacingHandler = http.get(racingUrl, () => mockResponseError());
    const server = setupServer(getRacingHandler);
    server.listen();

    const wrapper = mountNedsRaces();
    await flushPromises();

    const errorEl = wrapper.find("[data-testid='races-list-error']");
    expect(errorEl).toBeTruthy();

    server.close();
  });

  it("defaults categories filter to all categories selected", async () => {
    const wrapper = mountNedsRaces();

    const filtersEl = wrapper.find("[data-testid='filters']");
    const filterCheckboxEls = filtersEl.findAll("input[type='checkbox']");
    const filterCheckboxTitlesCheckedMap = Object.fromEntries(
      filterCheckboxEls.map((checkbox) => [
        checkbox.attributes("title"),
        (checkbox.element as HTMLInputElement).checked,
      ]),
    );

    expect(filterCheckboxTitlesCheckedMap).toEqual({
      "Horse racing": true,
      "Greyhound racing": true,
      "Harness racing": true,
    });
  });

  it("filters list of races by selected categories", async () => {
    const getRacingHandler = http.get(racingUrl, () => mockResponseOk());
    const server = setupServer(getRacingHandler);
    server.listen();

    const wrapper = mountNedsRaces();
    await flushPromises();

    const filtersEl = wrapper.find("[data-testid='filters']");
    const filterCheckboxEls = filtersEl.findAll("input[type='checkbox']");

    const racesListItemsEl = wrapper.find("[data-testid='races-list-items']");

    expect(racesListItemsEl.findAll("h3").map((h3) => h3.text())).toStrictEqual([
      "Townsville R1",
      "Albion Park R2",
      "Q1 Lakeside R1",
      "Healesville R12",
      "Angle Park R10",
    ]);

    assert(filterCheckboxEls[1]);
    await filterCheckboxEls[1].trigger("click");
    await filterCheckboxEls[1].trigger("change");
    expect(racesListItemsEl.findAll("h3").map((h3) => h3.text())).toStrictEqual([
      "Townsville R1",
      "Albion Park R2",
    ]);

    assert(filterCheckboxEls[2]);
    await filterCheckboxEls[2].trigger("click");
    await filterCheckboxEls[2].trigger("change");
    expect(racesListItemsEl.findAll("h3").map((h3) => h3.text())).toStrictEqual(["Townsville R1"]);

    assert(filterCheckboxEls[0]);
    await filterCheckboxEls[0].trigger("click");
    await filterCheckboxEls[0].trigger("change");
    expect(racesListItemsEl.findAll("h3").map((h3) => h3.text())).toStrictEqual([]);

    assert(filterCheckboxEls[1]);
    await filterCheckboxEls[1].trigger("click");
    await filterCheckboxEls[1].trigger("change");
    expect(racesListItemsEl.findAll("h3").map((h3) => h3.text())).toStrictEqual([
      "Q1 Lakeside R1",
      "Healesville R12",
      "Angle Park R10",
    ]);

    assert(filterCheckboxEls[2]);
    await filterCheckboxEls[2].trigger("click");
    await filterCheckboxEls[2].trigger("change");
    expect(racesListItemsEl.findAll("h3").map((h3) => h3.text())).toStrictEqual([
      "Albion Park R2",
      "Q1 Lakeside R1",
      "Healesville R12",
      "Angle Park R10",
    ]);

    server.close();
  });

  it("updates countdowns every second", async () => {
    const getRacingHandler = http.get(racingUrl, () => mockResponseOk());
    const server = setupServer(getRacingHandler);
    server.listen();

    const wrapper = mountNedsRaces();

    expect(wrapper.get("h2").text()).toBe("Next To Go Racing");

    await flushPromises();

    vi.advanceTimersToNextTimer();
    await wrapper.vm.$nextTick();

    // Countdowns display time in mm:ss
    const countdownEls = wrapper.findAll("[aria-label='Countdown to start']");
    const countdownTexts = countdownEls.map((countdownEl) => countdownEl.text());
    expect(countdownTexts).toStrictEqual(["0m -1s", "0m 59s", "3m 59s", "6m 59s", "7m 59s"]);

    // Getting close effect on countdowns
    const listItemEls = wrapper.findAll("li");
    expect(listItemEls[0]?.find("[aria-label='Getting close']").exists()).toBe(true);
    expect(listItemEls[1]?.find("[aria-label='Getting close']").exists()).toBe(true);
    expect(listItemEls[2]?.find("[aria-label='Getting close']").exists()).toBe(false);
    expect(listItemEls[3]?.find("[aria-label='Getting close']").exists()).toBe(false);
    expect(listItemEls[4]?.find("[aria-label='Getting close']").exists()).toBe(false);

    // Move forward by 1 second
    vi.advanceTimersToNextTimer();
    await wrapper.vm.$nextTick();

    // Countdowns update after tick
    const countdownEls2 = wrapper.findAll("[aria-label='Countdown to start']");
    const countdownTexts2 = countdownEls2.map((countdownEl) => countdownEl.text());
    expect(countdownTexts2).toStrictEqual(["0m -2s", "0m 58s", "3m 58s", "6m 58s", "7m 58s"]);

    // Move forward by 3 minutes
    vi.advanceTimersByTime(3 * 60 * 1_000);
    await wrapper.vm.$nextTick();

    // Past 1 minute countdowns removed
    const countdownEls3 = wrapper.findAll("[aria-label='Countdown to start']");
    const countdownTexts3 = countdownEls3.map((countdownEl) => countdownEl.text());
    expect(countdownEls3.length).toBe(3);
    expect(countdownTexts3).toStrictEqual(["0m 58s", "3m 58s", "4m 58s"]);

    server.close();
  });

  it("reloads races every 5 minutes", async () => {
    let times = 0;
    const getRacingHandler = http.get(racingUrl, () => mockResponseOkTimes(times++));
    const server = setupServer(getRacingHandler);
    server.listen();

    const wrapper = mountNedsRaces();

    await flushPromises();

    vi.advanceTimersToNextTimer();
    await wrapper.vm.$nextTick();

    // Meeting titles
    const racesListItemsEl = wrapper.find("[data-testid='races-list-items']");
    expect(racesListItemsEl.findAll("h3").map((h3) => h3.text())).toStrictEqual([
      "Townsville R1",
      "Albion Park R2",
      "Q1 Lakeside R1",
      "Healesville R12",
      "Angle Park R10",
    ]);

    // Move forward by 1 minute in total
    vi.advanceTimersByTime(1 * 60 * 1_000);
    await flushPromises();
    const racesListItems1El = wrapper.find("[data-testid='races-list-items']");

    // Meeting titles unchanged before refresh
    expect(racesListItems1El.findAll("h3").map((h3) => h3.text())).toStrictEqual([
      "Townsville R1",
      "Albion Park R2",
      "Q1 Lakeside R1",
      "Healesville R12",
      "Angle Park R10",
    ]);

    // Move forward by 5 minutes in total (4 additional minutes)
    vi.advanceTimersByTime(4 * 60 * 1_000);
    await flushPromises();

    // Refreshed - new meeting titles
    const racesListItems2El = wrapper.find("[data-testid='races-list-items']");
    expect(racesListItems2El.findAll("h3").map((h3) => h3.text())).toStrictEqual([
      "Townsville 1 R1",
      "Albion Park 1 R2",
      "Q1 Lakeside 1 R1",
      "Healesville 1 R12",
      "Angle Park 1 R10",
    ]);

    server.close();
  });
});

import { http } from "msw";
import { setupServer } from "msw/node";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { mockResponseOk, racingUrl } from "@/queries/racing/racing-mocks";

import { fetchRacing } from "../racing-fetch";

describe("fetch-racing", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.useFakeTimers();
  });

  it("fetches races from racing api", async () => {
    const mockRacingResponse = mockResponseOk();
    const getRacingHandler = http.get(racingUrl, () => mockResponseOk());
    const server = setupServer(getRacingHandler);
    server.listen();

    const result = await fetchRacing();

    expect(result).toEqual(await mockRacingResponse.json());

    server.close();
  });
});

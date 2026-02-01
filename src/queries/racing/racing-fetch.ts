import z from "zod";

import { mockResponseOkTimesJson } from "./racing-mocks";
import { RacingSchema } from "./racing-schema";

/**
 * Constructs racing API request URL
 * @type Uri Builder
 */
const createFetchRacingUri = (
  method = "nextraces",
  count = "5",
  order_by = "0",
  date_from = "today",
) => {
  const params = new URLSearchParams({
    method,
    count,
    order_by,
    date_from,
  });

  return `https://api.neds.com.au/rest/v1/racing/?${params.toString()}`;
};

/**
 * Fetches racing API
 * @type Fetcher
 */
export async function fetchRacing() {
  // Hard-code data in prod for now, due to CORS issues
  if (import.meta.env.MODE === "production") {
    const mockRacesResponseJson = mockResponseOkTimesJson();
    const mockRacesResponse = z.parse(RacingSchema, mockRacesResponseJson);
    return mockRacesResponse;
  }

  const response = await fetch(createFetchRacingUri());

  if (response.status !== 200) {
    throw new Error(`Error status received: ${response.status}: "${response.statusText}".`);
  }
  const responseJson = await response.json();
  const racesResponse = z.parse(RacingSchema, responseJson);

  return racesResponse;
}

import { DateTime } from "luxon";
import { HttpResponse, type JsonBodyType } from "msw";

import racingMockJson from "@/data/racing-mock.json";
import type { Racing, RacingJson } from "@/queries/racing/racing-types";
import { assert } from "@/utils/assert";

export const racingUrl = "https://api.neds.com.au/rest/v1/racing";

const racingJsonResponse = racingMockJson as Racing;

/**
 * Creates an Ok mock response for Racing API.
 * Used to simulate one request/response for integration testing purposes.
 * @returns `HttpResponse<JsonBodyType>` following `Racing` schema
 */
export const mockResponseOk = () => new HttpResponse<JsonBodyType>(JSON.stringify(racingMock()));

/**
 * Creates an Ok mock response for Racing API, suffixing `meeting_name` values with `times` provided.
 * Used to simulate multiple requests/responses for integration testing purposes.
 * @param times Number to suffix `meeting_name` values with.
 * @returns `HttpResponse<JsonBodyType>` following `Racing` schema
 */
export const mockResponseOkTimes = (times = 0): HttpResponse<JsonBodyType> =>
  new HttpResponse(JSON.stringify(mockResponseOkTimesJson({ times })));

export const mockResponseError = () => new HttpResponse("{}", { status: 503 });

function racingMock() {
  return racingJsonResponse;
}

/**
 * Returns mock response with dynamically updated meeting names and countdown times
 * - Appends ` {times}` to the meeting names of the races provided and returns the result
 * - Sets countdown seconds to current time + {times} number of minutes
 * Used for production mocks and integration tests which need to simulate change in the response data.
 * @returns Racing JSON with meeting names modified
 */
export function mockResponseOkTimesJson({
  times = 0,
  now = DateTime.now(),
}: {
  readonly times?: number;
  readonly now?: DateTime;
} = {}): Racing {
  const race_summaries = Object.fromEntries(
    Object.entries(racingJsonResponse.data.race_summaries).map(
      ([summary_id, race_summary], index) => {
        assert(race_summary?.meeting_name);

        return [
          summary_id,
          {
            ...race_summary,
            meeting_name: race_summary.meeting_name + (times ? ` ${times}` : ""),
            advertised_start: {
              seconds: now.plus({ minutes: index + 1 }).toSeconds(),
            },
          },
        ];
      },
    ),
  ) as RacingJson["race_summaries"];

  return {
    ...racingJsonResponse,
    data: {
      ...racingJsonResponse.data,
      race_summaries,
    },
  };
}

import { useQuery } from "@pinia/colada";
import { computed } from "vue";

import { fetchRacing } from "./racing-fetch";
import type { RacingJson } from "./racing-types";

/**
 * Fetches details about next races from racing API
 * @returns Races and the loading and error status of the racing API request
 * @type Query
 */
export function useRacingQuery() {
  const {
    data,
    isLoading: queryLoading,
    error: queryError,
    refetch,
  } = useQuery<RacingJson>({
    key: ["racing"],
    query: async () => {
      const racesResponse = await fetchRacing();
      const racesResponseJson = racesResponse.data;

      return racesResponseJson;
    },
  });

  const loading = queryLoading;
  const error = computed(() => !!queryError.value);

  return {
    data,
    loading,
    error,

    refetch,
  };
}

import { DateTime } from "luxon";
import { storeToRefs } from "pinia";
import { watch } from "vue";

import { useInterval } from "@/composables/use-interval";
import { useRacingQuery } from "@/queries/racing/racing-query";
import { useCategoriesStore } from "@/stores/use-categories-store";
import { useFiltersStore } from "@/stores/use-filters-store";
import { useRacesStore } from "@/stores/use-races-store";
import { pickEnrichSortFilterNextRaces } from "@/utils/next-races-pick-enrich-sort-filter";

export function useRacesView() {
  const RACES_LIMIT = 5;

  const { categoriesById } = storeToRefs(useCategoriesStore());
  const racesStore = useRacesStore();
  const { races } = storeToRefs(useRacesStore());
  const { filters } = useFiltersStore();

  const { loading, error, data: racingJson, refetch } = useRacingQuery();

  watch([racingJson, filters], () => {
    const nextRaces = pickEnrichSortFilterNextRaces({
      racingJson: racingJson.value,
      categoriesById: categoriesById.value,
      limit: RACES_LIMIT,
      filters: filters,
      now: DateTime.now(),
    });

    racesStore.setRaces(nextRaces);
  });

  useInterval(refetch, 5 * 60 * 1_000);

  return {
    races,
    loading,
    error,
  };
}

import { storeToRefs } from "pinia";

import { useCategoriesStore } from "@/stores/use-categories-store";
import { useFiltersStore } from "@/stores/use-filters-store";

export function useRacesFiltersView() {
  const { categories } = useCategoriesStore();
  const { filters } = storeToRefs(useFiltersStore());

  return {
    categories,
    filters,
  };
}

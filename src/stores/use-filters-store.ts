import { defineStore } from "pinia";
import { ref } from "vue";

import type { RacingJsonRaceCategoryId } from "@/queries/racing/racing-types";

import { useCategoriesStore } from "./use-categories-store";

/**
 * State of filters store
 * Each field is a filter field and its values are the values being filtered
 * @type Store State
 */
interface FiltersStoreState {
  categoryIds: RacingJsonRaceCategoryId[];
}

/**
 * Keeps track of which filters are applied to the races list
 * @type Store
 */
export const useFiltersStore = defineStore("filters", () => {
  const categoriesStore = useCategoriesStore();

  const defaultCategoryIds_ = categoriesStore.categories.map((category) => category.id);

  const filters = ref<FiltersStoreState>({
    categoryIds: defaultCategoryIds_,
  });

  return { filters };
});

import { defineStore } from "pinia";
import { computed, ref } from "vue";

import categoriesJson from "@/data/categories.json";
import type { Category } from "@/types/category";

/**
 * State of categories store
 * @type Store State
 */
interface CategoriesStoreState {
  categories: Set<Category>;
}

/**
 * Keeps track of which categories exist
 * @type Store
 */
export const useCategoriesStore = defineStore("categories", () => {
  const state = ref<CategoriesStoreState>({
    categories: new Set<Category>(categoriesJson),
  });

  const categories = computed(() => Array.from(state.value.categories));

  const categoriesById = computed(() =>
    Object.fromEntries(
      categories.value.map((category) => [category.id, category]),
    ),
  );

  return {
    categories,
    categoriesById,
  };
});

<script setup lang="ts">
import NedsCategoryIcon from "@/components/NedsCategoryIcon.vue";
import NedsFilterCheckbox from "@/components/NedsFilterCheckbox.vue";
import NedsFilterCheckboxGroup from "@/components/NedsFilterCheckboxGroup.vue";
import { useRacesFiltersView } from "@/composables/use-races-filters-view";

const { categories, filters } = useRacesFiltersView();
</script>

<template>
  <NedsFilterCheckboxGroup legend="Category filters" data-testid="filters">
    <NedsFilterCheckbox
      v-for="category of categories"
      v-model="filters.categoryIds"
      :key="category.id"
      :id="category.id"
      :title="category.name"
    >
      <NedsCategoryIcon
        :category-name="category.name"
        class="category-icon *:fill-disabled size-12 sm:size-6"
        aria-hidden="true"
      />
    </NedsFilterCheckbox>
  </NedsFilterCheckboxGroup>
</template>

<style lang="css" scoped>
.category-icon {
  width: 3rem;
  height: 3rem;
  fill: #51657b;
}

@media (width >= 40rem) {
  .category-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>

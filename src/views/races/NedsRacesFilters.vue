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
        class="*:fill-disabled size-12 sm:size-6"
        aria-hidden="true"
      />
    </NedsFilterCheckbox>
  </NedsFilterCheckboxGroup>
</template>

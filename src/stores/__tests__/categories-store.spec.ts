import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";

import { useCategoriesStore } from "../use-categories-store";

describe("useCategoriesStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("stores categories and exposes categories by id", () => {
    const categories = useCategoriesStore();

    expect(categories.categories).toEqual([
      { id: "4a2788f8-e825-4d36-9894-efd4baf1cfae", name: "Horse racing" },
      {
        id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
        name: "Greyhound racing",
      },
      {
        id: "161d9be2-e909-4326-8c2c-35ed71fb460b",
        name: "Harness racing",
      },
    ]);
    expect(categories.categoriesById).toEqual({
      "4a2788f8-e825-4d36-9894-efd4baf1cfae": {
        id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
        name: "Horse racing",
      },
      "9daef0d7-bf3c-4f50-921d-8e818c60fe61": {
        id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
        name: "Greyhound racing",
      },
      "161d9be2-e909-4326-8c2c-35ed71fb460b": {
        id: "161d9be2-e909-4326-8c2c-35ed71fb460b",
        name: "Harness racing",
      },
    });
  });
});

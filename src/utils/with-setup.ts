import { createApp } from "vue";

/**
 * Sets up a composable so it can be unit tested with lifecycle hooks using Vitest
 * @param composable Composable to set up
 * @returns Result returned by composable after being set up and app (for cleanup)
 * @author Dylan Britz https://dylanbritz.dev/writing/testing-vue-composables-lifecycle/
 * @type Util
 */
export function withSetup<T>(composable: () => T) {
  let result!: T;

  // Create a mini Vue app that uses our composable
  const app = createApp({
    setup() {
      result = composable();
      return () => {};
    },
  });

  // Mount it to trigger lifecycle hooks
  app.mount(document.createElement("div"));

  // Return both results and app (for cleanup)
  return { result, app };
}

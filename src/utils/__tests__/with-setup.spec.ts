import { describe, expect, it } from "vitest";
import { onMounted, onUnmounted, ref } from "vue";

import { withSetup } from "../with-setup";

describe("withSetup", () => {
  it("mounts the provided composer inside an app and returns the app and composer result", () => {
    const mockComposable = () => {
      const mockState = ref<{
        lifecycle: ("mounted" | "unmounted")[];
      }>({ lifecycle: [] });

      onMounted(() => {
        mockState.value.lifecycle.push("mounted");
      });

      onUnmounted(() => {
        mockState.value.lifecycle.push("unmounted");
      });

      return mockState.value.lifecycle;
    };

    const { app, result } = withSetup(mockComposable);

    expect(result).toEqual(["mounted"]);

    expect(app).toBeTypeOf("object");

    expect(Object.keys(app)).toEqual([
      "_uid",
      "_component",
      "_props",
      "_container",
      "_context",
      "_instance",
      "version",
      "config",
      "use",
      "mixin",
      "component",
      "directive",
      "mount",
      "onUnmount",
      "unmount",
      "provide",
      "runWithContext",
    ]);

    app.unmount();

    expect(result).toEqual(["mounted", "unmounted"]);
  });
});

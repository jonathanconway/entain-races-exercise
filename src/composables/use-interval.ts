import { onMounted, onUnmounted } from "vue";

/**
 * Timeout value in milliseconds
 */
type Timeout = number;

/**
 * Repeatedly calls `callback` each time provided `timeout` is reached
 * @param callback Function to call on each timeout
 * @param timeout Timeout interval in milliseconds
 * @type Composable
 */
export function useInterval(callback: VoidFunction, timeout: Timeout) {
  let interval: Timeout;

  onMounted(() => {
    interval = Number(setInterval(callback, timeout));
  });

  onUnmounted(() => {
    clearInterval(interval);
  });
}

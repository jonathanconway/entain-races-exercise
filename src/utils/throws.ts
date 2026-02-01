/**
 * Wraps provided `fn` in a try/catch block and checks whether it throws when called
 * Useful in unit tests, to verify error throwing behaviour
 * @param fn Function to check for throwing
 * @returns True if `fn` throws, otherwise false
 * @type Util
 */
export function throws(fn: () => void) {
  try {
    fn();
  } catch {
    return true;
  }
  return false;
}

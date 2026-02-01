export class AssertionViolationError extends Error {
  override name = "AssertionViolation";

  constructor() {
    super("An asserted condition unexpectedly evaluated to false.");
  }
}

/**
 * Asserts that a condition evaluates to truthy
 * - If the condition is truthy, does nothing
 * - If the condition is falsy, throws
 * @param condition Any value that can run inside a conditional
 * @throws AssertionViolationError
 * @type Util
 */
export function assert<T>(condition: T): asserts condition {
  if (!condition) {
    throw new AssertionViolationError();
  }
}

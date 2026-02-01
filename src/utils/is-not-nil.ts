/**
 * Strongly typed nil checker for convenient non-nil filtering
 * Nil refers to a `null` or `undefined` value
 * @param value Value to nil-check
 * @returns True if `value` is nil, otherwise `false`
 * @type Util
 */
export function isNotNil<T>(value?: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

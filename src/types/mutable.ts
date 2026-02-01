/**
 * Generic utility type which makes all fields in `T` writeable
 */
export type Mutable<T> = {
  -readonly [P in keyof T]?: T[P];
};

/**
 * Generic utility type which applies `Mutable<T>` to all fields and nested objects in `T`
 */
export type DeepMutable<T> = { [P in keyof T]: Mutable<T[P]> };

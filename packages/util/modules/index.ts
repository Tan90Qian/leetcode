export interface EqualsFn<T = any> {
  (a: T, b: T): boolean;
}

export const defaultEquals: EqualsFn = (a, b) => {
  return a === b;
};

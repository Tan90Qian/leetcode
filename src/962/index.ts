export const maxWidthRamp = function(A: number[]) {
  return Math.max(
    ...A.map((value, idx, source) => compareOnce(value, idx, source))
  );
};

export function compareOnce(target: number, idx: number, arr: number[]) {
  for (let i = arr.length - 1; i > idx; i--) {
    if (target <= arr[i]) return i - idx;
  }
  return 0;
}

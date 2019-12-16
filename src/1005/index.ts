export const largestSumAfterKNegations = function(A: number[], K: number) {
  let arr = A;
  let times = 0;
  outer: while (times < K) {
    arr = A.sort((a, b) => a - b);
    for (let i = 0; i < A.length; i++) {
      const cur = arr[i];
      if (cur <= 0) {
        arr[i] = -arr[i];
        times += 1;
        continue outer;
      }
    }
    arr[0] = -arr[0];
    times += 1;
  }
  return arr.reduce((prev: number, cur: number) => {
    return cur + prev;
  });
};

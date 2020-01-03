export const maxProfit = function(prices: number[]): number {
  let restArray = prices;
  let result = 0;
  let computedResult;
  while (restArray.length) {
    ({ value: computedResult, restArray } = computeOnce(restArray));
    result += computedResult;
  }
  return result;
};

interface ComputedResult {
  value: number;
  restArray: number[];
}

export const computeOnce = function(array: number[]): ComputedResult {
  let leftIdx = -1;
  let rightIdx = -1;
  let i = 0;
  for (; i < array.length - 1; i++) {
    if (array[i + 1] < array[i]) {
      if (leftIdx > -1) {
        break;
      } else {
        continue;
      }
    } else {
      if (leftIdx === -1) {
        leftIdx = i;
      }
      rightIdx = i + 1;
    }
  }
  if (leftIdx !== -1) {
    return {
      value: array[rightIdx] - array[leftIdx],
      restArray: array.slice(i + 1)
    };
  }
  return {
    value: 0,
    restArray: []
  };
};

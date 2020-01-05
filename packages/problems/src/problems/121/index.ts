export const maxProfit = function(prices: number[]) {
  let curMax = 0;
  for (let left = 0; left < prices.length; left++) {
    for (let right = left + 1; right < prices.length; right++) {
      const diffValue = prices[right] - prices[left];
      if (diffValue > curMax) curMax = diffValue;
    }
  }
  return curMax;
};

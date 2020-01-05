export var maxProfit = function (prices) {
    var curMax = 0;
    for (var left = 0; left < prices.length; left++) {
        for (var right = left + 1; right < prices.length; right++) {
            var diffValue = prices[right] - prices[left];
            if (diffValue > curMax)
                curMax = diffValue;
        }
    }
    return curMax;
};

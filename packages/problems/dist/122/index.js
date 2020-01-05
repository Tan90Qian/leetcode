export var maxProfit = function (prices) {
    var _a;
    var restArray = prices;
    var result = 0;
    var computedResult;
    while (restArray.length) {
        (_a = computeOnce(restArray), computedResult = _a.value, restArray = _a.restArray);
        result += computedResult;
    }
    return result;
};
export var computeOnce = function (array) {
    var leftIdx = -1;
    var rightIdx = -1;
    var i = 0;
    for (; i < array.length - 1; i++) {
        if (array[i + 1] < array[i]) {
            if (leftIdx > -1) {
                break;
            }
            else {
                continue;
            }
        }
        else {
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

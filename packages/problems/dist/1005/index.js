export var largestSumAfterKNegations = function (A, K) {
    var arr = A;
    var times = 0;
    outer: while (times < K) {
        arr = A.sort(function (a, b) { return a - b; });
        for (var i = 0; i < A.length; i++) {
            var cur = arr[i];
            if (cur <= 0) {
                arr[i] = -arr[i];
                times += 1;
                continue outer;
            }
        }
        arr[0] = -arr[0];
        times += 1;
    }
    return arr.reduce(function (prev, cur) {
        return cur + prev;
    });
};

export var maxWidthRamp = function (A) {
    return Math.max.apply(Math, A.map(compareOnce));
};
export function compareOnce(target, idx, arr) {
    for (var i = arr.length - 1; i > idx; i--) {
        if (target <= arr[i])
            return i - idx;
    }
    return 0;
}

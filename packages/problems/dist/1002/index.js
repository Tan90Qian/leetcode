var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
export var commonChars = function (A) {
    var compareResult = compareRepeat.apply(void 0, A.map(countStrRepeat));
    return Object.entries(compareResult).reduce(function (prevValue, _a) {
        var value = _a[0], times = _a[1];
        return __spreadArrays(prevValue, value.repeat(times).split(""));
    }, []);
};
export var countStrRepeat = function (str) {
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var value = str[i];
        if (!result[value])
            result[value] = 1;
        else
            result[value] += 1;
    }
    return result;
};
export var compareRepeat = function () {
    var strRepeat = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strRepeat[_i] = arguments[_i];
    }
    var compareObj = {};
    var result = {};
    strRepeat.forEach(function (item) {
        Object.entries(item).forEach(function (_a) {
            var value = _a[0], times = _a[1];
            if (!compareObj[value])
                compareObj[value] = [times];
            else
                compareObj[value].push(times);
        });
    });
    Object.entries(compareObj).forEach(function (_a) {
        var value = _a[0], times = _a[1];
        result[value] = times.length === strRepeat.length ? Math.min.apply(Math, times) : undefined;
    });
    return result;
};

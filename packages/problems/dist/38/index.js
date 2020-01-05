export var countAndSay = (function () {
    var cache = {};
    return function (n) {
        if (n === 0)
            return "";
        if (cache[n])
            return cache[n];
        var curStr = "1";
        for (var i = 1; i <= n - 1; i++) {
            curStr = generatorNextStr(splitStr(curStr));
            if (!cache[i + 1])
                cache[i + 1] = curStr;
        }
        return curStr;
    };
})();
export function splitStr(str) {
    var result = [];
    var curVal;
    var repeatTimes = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === curVal) {
            repeatTimes += 1;
            continue;
        }
        if (curVal) {
            result.push([curVal, repeatTimes]);
        }
        curVal = str[i];
        repeatTimes = 1;
    }
    if (curVal)
        result.push([curVal, repeatTimes]);
    return result;
}
export function generatorNextStr(splitResult) {
    var str = "";
    for (var i = 0; i < splitResult.length; i++) {
        var unit = splitResult[i];
        str += "" + unit[1] + unit[0];
    }
    return str;
}

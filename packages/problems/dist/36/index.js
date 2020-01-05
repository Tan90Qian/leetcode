export var isValidSudoku = function (board) {
    for (var row = 0; row < board.length; row++) {
        if (!validOnce(board[row], transformCharToNumber))
            return false;
    }
    var flattedBoard = board.reduce(function (acc, val) { return acc.concat(val); }, []);
    var _loop_1 = function (i) {
        var col = flattedBoard.filter(function (_, idx) { return idx % 9 === i; });
        if (!validOnce(col, transformCharToNumber))
            return { value: false };
    };
    for (var i = 0; i < 9; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    var _loop_2 = function (i) {
        var _loop_3 = function (j) {
            var unit = flattedBoard.filter(function (_, idx) {
                var mo = Math.floor(idx / 9);
                var yu = idx % 9;
                return mo >= i && mo < i + 3 && yu >= j && yu < j + 3;
            });
            if (!validOnce(unit, transformCharToNumber))
                return { value: false };
        };
        for (var j = 0; j < 9; j += 3) {
            var state_3 = _loop_3(j);
            if (typeof state_3 === "object")
                return state_3;
        }
    };
    for (var i = 0; i < 9; i += 3) {
        var state_2 = _loop_2(i);
        if (typeof state_2 === "object")
            return state_2.value;
    }
    return true;
};
export function validOnce(line, transformFnc) {
    var valuesOfLine = line.map(transformFnc);
    var hash = {};
    for (var i = 0; i < valuesOfLine.length; i++) {
        var value = valuesOfLine[i];
        if (value !== -1 && hash[value])
            return false;
        hash[value] = true;
    }
    return true;
}
export var transformCharToNumber = function (char) {
    var value = parseInt(char);
    if (Number.isNaN(value))
        return -1;
    return value;
};

export var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var cur = nums[i];
        var need = target - cur;
        var lIdx = nums.lastIndexOf(need);
        if (lIdx !== -1 && lIdx !== i)
            return [i, lIdx];
    }
};

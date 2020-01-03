export const twoSum = function(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const need = target - cur;
    const lIdx = nums.lastIndexOf(need);
    if (lIdx !== -1 && lIdx !== i) return [i, lIdx];
  }
};

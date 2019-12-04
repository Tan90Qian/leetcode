import { twoSum } from "./index";

describe("test 01", () => {
  it("test case 1", () => {
    const nums = [2, 7, 11, 15],
      target = 9;

    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it("test case 2", () => {
    const nums = [2, 7, 11, 15],
      target = 22;

    expect(twoSum(nums, target)).toEqual([1, 3]);
  });
});

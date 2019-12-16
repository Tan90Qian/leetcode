import { largestSumAfterKNegations } from "./index";

describe("test no.1005", () => {
  it("test case 1", () => {
    expect(largestSumAfterKNegations([4, 2, 3], 1)).toBe(5);
  });

  it("test case 2", () => {
    expect(largestSumAfterKNegations([3,-1,0,2], 3)).toBe(6);
  });

  it("test case 3", () => {
    expect(largestSumAfterKNegations([2,-3,-1,5,-4], 2)).toBe(13);
  });
});

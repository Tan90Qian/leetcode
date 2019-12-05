import { maxProfit, computeOnce } from "./index";

describe("test no.121", () => {
  it("test case 1", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(7);
  });

  it("test case 2", () => {
    const prices = [1, 2, 3, 4, 5];
    expect(maxProfit(prices)).toBe(4);
  });

  it("test case 3", () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });
});

describe("test computeOnce fnc", () => {
  it("test case 1", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(computeOnce(prices)).toEqual({
      value: 4,
      restArray: [3, 6, 4]
    });
  });

  it("test case 1", () => {
    const prices = [1, 2, 3, 4, 5];
    expect(computeOnce(prices)).toEqual({
      value: 4,
      restArray: []
    });
  });

  it("test case 3", () => {
    const prices = [7, 6, 4, 3, 1];
    expect(computeOnce(prices)).toEqual({
      value: 0,
      restArray: []
    });
  });
});

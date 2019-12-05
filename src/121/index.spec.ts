import { maxProfit } from "./index";

describe("test no.121", () => {
  it("test case 1", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(5);
  });
});
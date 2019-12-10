import { maxWidthRamp, compareOnce } from "./index";

describe("test no.962", () => {
  it("test case 1", () => {
    expect(maxWidthRamp([6, 0, 8, 2, 1, 5])).toBe(4);
  });

  it("test case 2", () => {
    expect(maxWidthRamp([9,8,1,0,1,9,4,0,4,1])).toBe(7);
  });
});

describe("test compareOnce fnc", () => {
  it("test case 1", () => {
    expect(compareOnce(6, 0, [6, 0, 8, 2, 1, 5])).toBe(2);
  });
});

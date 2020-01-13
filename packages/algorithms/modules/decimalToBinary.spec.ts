import { decimalToBinary } from "./decimalToBinary";

describe("test decimalToBinary", () => {
  it("test case 1", () => {
    expect(decimalToBinary(10)).toBe("1010");
  });
});

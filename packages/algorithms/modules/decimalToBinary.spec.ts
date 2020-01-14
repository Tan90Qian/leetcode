import { decimalToBinary } from "./decimalToBinary";

describe("test decimalToBinary", () => {
  it("test base 2", () => {
    expect(decimalToBinary(0)).toBe("");
    expect(decimalToBinary(10)).toBe("1010");
    expect(decimalToBinary(233)).toBe("11101001");
  });

  it("test base 1", () => {
    expect(decimalToBinary(10, 1)).toBe("");
  });

  it("test base 10", () => {
    expect(decimalToBinary(10, 10)).toBe("10");
    expect(decimalToBinary(233, 10)).toBe("233");
  });

  it("test base bigger than 36", () => {
    expect(decimalToBinary(10, 37)).toBe("");
  });
});

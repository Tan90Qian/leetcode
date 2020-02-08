import { palindromeChecker } from "./palindromeChecker";

describe("test palindromeChecker func", () => {
  it("test case 0", () => {
    expect(palindromeChecker("")).toBe(false);
  });

  it("test case 1", () => {
    expect(palindromeChecker("aba")).toBe(true);
  });

  it("test case 2", () => {
    expect(palindromeChecker("abab")).toBe(false);
  });

  it("test case 2", () => {
    expect(palindromeChecker("aab baa")).toBe(true);
  });

  it("test case 2", () => {
    expect(palindromeChecker("ab ba AB BA")).toBe(true);
  });
});

import { isPalindrome, isValidComb } from "./index";

describe("test isPalindrome fnc", () => {
  it("test case 1", () => {
    expect(isPalindrome("aa")).toBe(true);
  });

  it("test case 2", () => {
    expect(isPalindrome("b")).toBe(true);
  });

  it("test case 3", () => {
    expect(isPalindrome("ab")).toBe(false);
  });
});

describe("test isValidComb func", () => {
  it("test case 1", () => {
    expect(isValidComb(["aa", "b"], isPalindrome)).toBe(true);
  });

  it("test case 2", () => {
    expect(isValidComb(["a", "a", "b"], isPalindrome)).toBe(true);
  });

  it("test case 3", () => {
    expect(isValidComb(["a", "ab"], isPalindrome)).toBe(false);
  });
});

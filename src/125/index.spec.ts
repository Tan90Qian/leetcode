import { isPalindrome } from "./index";

describe("test no.125", () => {
  it("test case 1", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("test case 2", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
});

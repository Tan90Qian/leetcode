import { commonChars, countStrRepeat, compareRepeat } from "./index";

describe("test countStrRepeat fnc", () => {
  it("test case 1", () => {
    expect(countStrRepeat("label")).toEqual({
      l: 2,
      a: 1,
      b: 1,
      e: 1
    });
  });

  it("test case 2", () => {
    expect(countStrRepeat("cool")).toEqual({
      c: 1,
      o: 2,
      l: 1
    });
  });
});

describe("test compareRepeat fnc", () => {
  it("test case 1", () => {
    const strRepeat1 = { a: 1, b: 2, d: 1 };
    const strRepeat2 = { a: 2, b: 1, c: 1 };
    expect(compareRepeat(strRepeat1, strRepeat2)).toEqual({
      a: 1,
      b: 1
    });
  });
});

describe("test no.1002", () => {
  it("test case 1", () => {
    const A = ["bella", "label", "roller"];
    expect(commonChars(A)).toEqual(["e", "l", "l"]);
  });

  it("test case 2", () => {
    const A = ["cool", "lock", "cook"];
    expect(commonChars(A)).toEqual(["c", "o"]);
  });
});

import { countAndSay, splitStr, generatorNextStr } from "./index";

describe("test no.38", () => {
  it("test case 1", () => {
    expect(countAndSay(1)).toBe("1");
  });

  it("test case 2", () => {
    expect(countAndSay(2)).toBe("11");
  });

  it("test case 3", () => {
    expect(countAndSay(4)).toBe("1211");
  });
});

describe("test splitStr fnc", () => {
  it("test case 1", () => {
    expect(splitStr("1")).toEqual([["1", 1]]);
  });

  it("test case 2", () => {
    expect(splitStr("1211")).toEqual([
      ["1", 1],
      ["2", 1],
      ["1", 2]
    ]);
  });
});

describe("test generatorNextStr fnc", () => {
  it("test case 1", () => {
    expect(generatorNextStr([["1", 1]])).toEqual("11");
  });

  it("test case 2", () => {
    expect(
      generatorNextStr([
        ["1", 1],
        ["2", 1],
        ["1", 2]
      ])
    ).toEqual('111221');
  });
});

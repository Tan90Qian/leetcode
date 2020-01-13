import { Stack } from "./stack";

describe("test Stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("init test", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it("push test", () => {
    stack.push(5);
    stack.push(8);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(8);
  });
});

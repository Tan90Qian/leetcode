import { Stack } from "./stack";

describe("test Stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("init test", () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
    expect(stack.peek()).toBe(undefined);
    expect(stack.pop()).toBe(undefined);
    expect(stack.toString()).toBe('');
  });

  it("test push api", () => {
    stack.push(5);
    stack.push(8);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(8);
    expect(stack.toString()).toBe('5,8');
  });

  it("test pop api", () => {
    stack.push(5);
    expect(stack.peek()).toBe(5);
    const result = stack.pop();
    expect(result).toBe(5);
    expect(stack.isEmpty()).toBe(true);
  });

  it("test clear api", () => {
    stack.push(5);
    stack.push(8);
    expect(stack.size()).toBe(2);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });
});

import { Node } from "./linked-list.model";

describe("test Node class", () => {
  it("init test", () => {
    const element = { test: "test" };
    const node = new Node(element);
    expect(node.element).toEqual(element);
    expect(node.next).toBe(undefined);
  });
});

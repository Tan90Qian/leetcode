import { LinkedList } from "./linked-list";

describe("test LinkedList", () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("init test", () => {
    expect(linkedList.size()).toBe(0);
    expect(linkedList.isEmpty()).toBe(true);
    expect(linkedList.removeAt(-1)).toBe(undefined);
  });

  it("test push api", () => {
    linkedList.push({ test: "test" });
    expect(linkedList.size()).toBe(1);
    linkedList.push({ test: "test2" });
    expect(linkedList.size()).toBe(2);
    linkedList.push({ test: "test3" });
    expect(linkedList.size()).toBe(3);
  });

  it("test removeAt api", () => {
    linkedList.push({ test: "test" });
    linkedList.push({ test: "test2" });
    let element = linkedList.removeAt(1);
    expect(linkedList.size()).toBe(1);
    expect(element).toEqual({ test: "test2" });
    element = linkedList.removeAt(0);
    expect(linkedList.size()).toBe(0);
    expect(element).toEqual({ test: "test" });
  });
});

import { LinkedList } from "./linked-list";
import { Node } from "./linked-list.model";

describe("test LinkedList", () => {
  let linkedList: LinkedList;
  const elementList = [{ test: "test" }, { test: "test2" }, { test: "test3" }];

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("init test", () => {
    expect(linkedList.size()).toBe(0);
    expect(linkedList.isEmpty()).toBe(true);
    expect(linkedList.getElementAt(-1)).toBe(undefined);
    expect(linkedList.removeAt(-1)).toBe(undefined);
  });

  it("test push api", () => {
    linkedList.push(elementList[0]);
    expect(linkedList.size()).toBe(1);
    linkedList.push(elementList[1]);
    expect(linkedList.size()).toBe(2);
    linkedList.push(elementList[2]);
    expect(linkedList.size()).toBe(3);
  });

  it("test removeAt api", () => {
    linkedList.push(elementList[0]);
    linkedList.push(elementList[1]);
    let element = linkedList.removeAt(1);
    expect(linkedList.size()).toBe(1);
    expect(element).toBe(elementList[1]);
    element = linkedList.removeAt(0);
    expect(linkedList.size()).toBe(0);
    expect(element).toBe(elementList[0]);
  });

  it("test getElementAt api", () => {
    linkedList.push(elementList[0]);
    linkedList.push(elementList[1]);
    expect(linkedList.getElementAt(0).element).toEqual(elementList[0]);
    expect(linkedList.getElementAt(1).element).toEqual(elementList[1]);
  });

  it("test insert api", () => {
    let result;
    result = linkedList.insert(elementList[0], -1);
    expect(result).toBe(false);
    result = linkedList.insert(elementList[0], 0);
    expect(result).toBe(true);
    expect(linkedList.getElementAt(0).element).toBe(elementList[0]);
    result = linkedList.insert(elementList[1], 1);
    expect(result).toBe(true);
    expect(linkedList.getElementAt(1).element).toBe(elementList[1]);
  });
});

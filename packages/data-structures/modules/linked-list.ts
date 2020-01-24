import { defaultEquals, EqualsFn } from "../../util";
import { Node } from "./linked-list.model";

export class LinkedList<T = any> {
  private count: number;
  private head: Node<T>;
  private equalsFn: EqualsFn<T>;

  constructor(equalsFn: EqualsFn<T> = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: T) {}

  insert(element: T, position: number) {}

  getElementAt(index: number) {}

  remove(element: T) {}

  indexOf(element: T) {}

  removeAt(position: number) {}

  isEmpty() {}

  size() {}

  toString() {}
}

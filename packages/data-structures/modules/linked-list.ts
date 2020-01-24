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

  push(element: T) {
    const node = new Node(element);
    let current: Node;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(element: T, position: number) {}

  getElementAt(index: number) {}

  remove(element: T) {}

  indexOf(element: T) {}

  removeAt(position: number): T {
    if (position >= 0 && position < this.count) {
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
        let prev: Node<T>;
        for (let i = 0; i < position; i++) {
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  toString() {}
}

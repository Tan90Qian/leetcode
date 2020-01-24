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

  insert(element: T, position: number) {
    if (position < 0 || position > this.count) return false;
    const node = new Node(element);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const prev = this.getElementAt(position - 1);
      node.next = prev.next;
      prev.next = node;
    }
    this.count++;
    return true;
  }

  getElementAt(position: number): Node<T> {
    if (position < 0 || position > this.count) return undefined;
    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    return current;
  }

  remove(element: T) {}

  indexOf(element: T) {}

  removeAt(position: number): T {
    if (position < 0 || position >= this.count) return undefined;
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      const prev = this.getElementAt(position - 1);
      current = prev.next;
      prev.next = current.next;
    }
    this.count--;
    return current.element;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  toString() {}
}

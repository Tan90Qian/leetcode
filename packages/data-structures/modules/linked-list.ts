import { defaultEquals, EqualsFn } from "@leetcode/utils";
import { Node, DoublyNode } from "./linked-list.model";

export class LinkedList<T = any> {
  protected count: number;
  protected head: Node<T>;
  protected equalsFn: EqualsFn<T>;

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

  getElementAt(position: number) {
    if (position < 0 || position > this.count) return undefined;
    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    return current;
  }

  remove(element: T) {
    const idx = this.indexOf(element);
    return !!this.removeAt(idx);
  }

  indexOf(element: T) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(current.element, element)) return i;
      current = current.next;
    }
    return -1;
  }

  removeAt(position: number): T {
    if (position < 0 || position >= this.count) return undefined;
    let current = this.head;
    if (position === 0) this.head = current.next;
    else {
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

  getHead() {
    return this.head;
  }

  clear() {
    this.count = 0;
    this.head = undefined;
  }

  toString() {
    if (this.head == null) return "";
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 0; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

export class DoublyLinkedList<T = any> extends LinkedList<T> {
  protected head: DoublyNode<T>;
  protected tail: DoublyNode<T>;

  constructor(equalsFn: EqualsFn<T> = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  push(element: T) {
    const node = new DoublyNode(element);

    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  insert(element: T, position: number) {
    if (position < 0 || position > this.count) return false;
    const node = new DoublyNode(element);
    let current = this.head;
    if (position === 0) {
      if (this.head == null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
    } else if (position === this.count) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      const prevNode = this.getElementAt(position - 1) as DoublyNode;
      node.next = prevNode.next;
      prevNode.next.prev = node;
      prevNode.next = node;
      node.prev = prevNode;
    }
    this.count++;
    return true;
  }

  removeAt(position: number): T {
    if (position < 0 || position >= this.count) return undefined;
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
      if (this.count === 1) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
    } else if (position === this.count - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = undefined;
    } else {
      current = this.getElementAt(position) as DoublyNode;
      const prevNode = current.prev;
      prevNode.next = current.next;
      current.next.prev = prevNode;
    }
    this.count--;
    return current.element;
  }

  getTail() {
    return this.tail;
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }

  inverseToString() {
    if (this.tail == null) {
      return "";
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    while (previous != null) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }
}

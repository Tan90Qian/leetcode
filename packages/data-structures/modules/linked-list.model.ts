export class Node<T = any> {
  element: T;
  next: Node<T>;

  constructor(element: T) {
    this.element = element;
    this.next = undefined;
  }
}

export class DoublyNode<T = any> extends Node<T> {
  next: DoublyNode<T>;
  prev: DoublyNode<T>;

  constructor(element: T, next?: DoublyNode, prev?: DoublyNode) {
    super(element);
    this.prev = prev;
  }
}

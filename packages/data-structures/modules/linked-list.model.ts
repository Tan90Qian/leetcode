export class Node<T = any> {
  element: T;
  next: Node<T>;

  constructor(element: T) {
    this.element = element;
    this.next = undefined;
  }
}

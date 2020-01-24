export class Node<T = any> {
  private element: T;
  private next: Node<T>;

  constructor(element: T) {
    this.element = element;
    this.next = undefined;
  }
}

interface Items<T = any> {
  [count: number]: T;
}

export class BaseQueue<T = any> {
  protected count: number;
  protected lowestCount: number;
  protected items: Items<T>;

  constructor() {
    this.clear();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) return "";
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

export class Queue<T = any> extends BaseQueue<T> {
  enqueue(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }
}

export class Deque<T =any> extends BaseQueue<T> {
  
}

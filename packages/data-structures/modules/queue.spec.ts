import { BaseQueue, Queue, Deque } from "./queue";

describe("test Base Queue", () => {
  let baseQueue: BaseQueue;

  beforeEach(() => {
    baseQueue = new BaseQueue();
  });

  it("init test", () => {
    expect(baseQueue.isEmpty()).toBe(true);
    expect(baseQueue.size()).toBe(0);
    expect(baseQueue.toString()).toBe("");
  });
});

describe("test Queue", () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("init test", () => {
    expect(queue.peek()).toBe(undefined);
    expect(queue.dequeue()).toBe(undefined);
  });

  it("test enqueue api", () => {
    queue.enqueue(5);
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe(5);
    queue.enqueue(8);
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe(5);
  });

  it("test dequeue api", () => {
    queue.enqueue(5);
    queue.enqueue(8);
    const result = queue.dequeue();
    expect(result).toBe(5);
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe(8);
  });

  it("test clear api", () => {
    queue.enqueue(5);
    queue.enqueue(8);
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBe(undefined);
  });

  it("test toString api", () => {
    queue.enqueue(5);
    expect(queue.toString()).toBe("5");
    queue.enqueue(8);
    expect(queue.toString()).toBe("5,8");
  });
});

describe("test Deque", () => {
  let deque: Deque;

  beforeEach(() => {
    deque = new Deque();
  });

  it("init test", () => {
    expect(deque.isEmpty()).toBe(true);
  });

  it("test addBack api", () => {
    deque.addFront(5);
    expect(deque.size()).toBe(1);
    deque.addFront(8);
    expect(deque.size()).toBe(2);
  })

  it("test addFront api", () => {
    deque.addFront(5);
    expect(deque.size()).toBe(1);
    deque.addFront(8);
    expect(deque.size()).toBe(2);
  });

  it("test peekFront and peekBack api", () => {
    deque.addFront(5);
    deque.addFront(8);
    expect(deque.peekBack()).toBe(5);
    expect(deque.peekFront()).toBe(8);
  })

  it("test removeBack api", () => {
    deque.addBack(5);
    deque.addBack(8);
    let result = deque.removeBack();
    expect(result).toBe(8);
    expect(deque.size()).toBe(1);
    deque.addFront(58);
    result = deque.removeBack();
    expect(result).toBe(5);
    expect(deque.size()).toBe(1);
  })

  it("test removeFront api", () => {
    deque.addBack(5);
    deque.addBack(8);
    let result = deque.removeFront();
    expect(result).toBe(5);
    expect(deque.size()).toBe(1);
    deque.addFront(58);
    result = deque.removeFront();
    expect(result).toBe(58);
    expect(deque.size()).toBe(1);
  })
});

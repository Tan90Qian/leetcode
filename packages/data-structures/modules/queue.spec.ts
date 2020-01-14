import { Queue } from "./queue";

describe("test Queue", () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("init test", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBe(undefined);
    expect(queue.size()).toBe(0);
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
    expect(queue.toString()).toBe('');
    queue.enqueue(5);
    expect(queue.toString()).toBe('5');
    queue.enqueue(8);
    expect(queue.toString()).toBe('5,8');
  });
});

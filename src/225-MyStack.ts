/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Stack, Design
*/

class MyStack {
  queue: number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    if (this.queue.length === 0) return -1;
    return this.queue.pop() as number;
  }

  top(): number {
    return this.queue[this.queue.length - 1];
  }

  empty(): boolean {
    return this.queue.length > 0 ? false : true;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

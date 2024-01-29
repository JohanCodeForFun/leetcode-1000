/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Stack, Design
*/

class MyQueue {
  queue: number[];
  constructor() {
      this.queue = [];
  }

  push(x: number): void {
      this.queue.push(x)
  }

  pop(): number {
    if (this.queue.length === 0) return -1;
      return this.queue.shift() as number;
  }

  peek(): number {
      return this.queue[0]
  }

  empty(): boolean {
      return this.queue.length > 0 ? false : true;
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/
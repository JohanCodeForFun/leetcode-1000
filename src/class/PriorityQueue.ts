export class PriorityQueue {
  items: { value: any, priority: number }[];

  constructor() {
    this.items = [];
  }

  enqueue(value: any, priority: number): void {
    this.items.push({ value, priority });
    this.items.sort((a, b) => b.priority - a.priority);
  }

  dequeue(): any {
    if (this.isEmpty()) {
      throw new Error("Underflow");
    } else {
      const item = this.items.shift();
      if (item !== undefined) {
        return item.value;
      }
    }
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

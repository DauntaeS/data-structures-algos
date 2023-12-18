class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[idx];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.lenght > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChildVal;
      let rightChildVal;
      let swap = null;

      if (leftChildIndex < length) {
        leftChildVal = this.values[leftChildIndex];
        if (leftChildVal.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChildVal = this.values[rightChildIndex];
        if (
          (swap === null && rightChildVal.priority < element.priority) ||
          (swap !== null && rightChildVal.priority < leftChildVal.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
let ER = new PriorityQueue();

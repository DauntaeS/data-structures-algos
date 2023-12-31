class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[idx];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.lenght > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
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
        if (leftChildVal > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChildVal = this.values[rightChildIndex];
        if (
          (swap === null && rightChildVal > element) ||
          (swap !== null && rightChildVal > leftChildVal)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);

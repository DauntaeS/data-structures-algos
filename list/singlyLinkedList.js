class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  // traverse (){
  //   let current = this.head;
  //   while(current){
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head;
      let newTail = temp;
      while (temp.next) {
        newTail = temp;
        temp = temp.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return temp;
    }
  }

  shift() {
    if (!this.head) return undefined;
    let currHead = this.head;
    this.head = currHead.next;
    this.length--;
    return currHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      newNode = this.head;
      newNode = this.tail;
    } else {
      OGHead = this.head;
      newNode.next = OGHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let curr = this.head;
    while (curr && counter !== index) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }
  set(index, val) {
    let targeNode = this.get(index);
    if (targeNode) {
      targeNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);

    let previousNode = this.get(index - 1);
    let oldNode = this.get(index);
    let newNode = new Node(val);

    previousNode.next = newNode;
    newNode.next = oldNode;
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(); // removes the first thing
    if (index === this.length - 1) return this.pop(); // removes the last thing
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  //             T      n              H
  //            A  -- >  B  -->  C-->  D-->  null

  // null <--   A  <--   B <--   C  <--D

  //            D -->  C -->   B  -->  A --> null

  reverse() {
    if (!this.head) return undefined;
    let curr = this.head; // A
    this.head = this.tail; // D
    this.tail = curr; // A

    let prev = null;
    let temp = null;

    for (let i = 0; i < this.length; i++) {
      temp = curr.next; // B
      curr.next = prev; // null

      prev = curr; // A
      curr = temp; // B
    }
    return this;
  }
}

let list = new SinglyLinkedList();

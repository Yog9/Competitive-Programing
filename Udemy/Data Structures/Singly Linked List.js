// Singly linked List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(val) {
    var current;
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;
      // Get the last node
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
    //return this;
  }
  print() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  // POPS a node from LL (Like Stack)
  pop() {
    if (!this.head) {
      console.log("LL is empty");
      return;
    }
    var current = this.head;
    var prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    if (this.head && this.head.next === null) {
      this.head = null;
    } else {
      prev.next = null;
    }
    this.length--;
    console.log("popped element of linked list", current.val);
  }
  // Remove first node from LL
  shift() {
    var currentHead = this.head;
    if (!this.head) {
      console.log("LL is empty");
      return;
    }
    this.head = currentHead.next;
    this.length--;
    console.log(" The first node removed is ", currentHead);
  }
  // Add a node at the start of LinkedList
  unshift(val) {
    var currentHead = this.head;
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = currentHead;
    this.head = newNode;
    this.length++;
  }
}
let list = new LinkedList();

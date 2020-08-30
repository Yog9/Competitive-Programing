// Singly linked List
// Algorithm to push node to end of LL
// We check if length is zero
// Then set head of linked list to the newNode
// if length>0 loop through the end of LL where next == null
// add the new node to LL

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
  // Pushes at the end of LL
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
}
let list = new LinkedList();

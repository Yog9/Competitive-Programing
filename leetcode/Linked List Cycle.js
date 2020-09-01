// https://leetcode.com/problems/linked-list-cycle/
//  Linked List Cycle
//  Loop Detectection in Singly linked List
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
    var newNode = new Node(val);
    var current;
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return;
    } else {
      current = this.head;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.length++;
  }

  detectLoop() {
    if (this.head == null || this.head.next == null) {
      return null;
    }
    var slowP = this.head;
    var fastP = this.head;
    while (fastP && fastP.next) {
      slowP = slowP.next;
      fastP = fastP.next.next;
      if (fastP === slowP) {
        console.log("Loop detected is true");
        return true;
      }
    }
    if (slowP != fastP) {
      console.log("Loop detected false");
      return false;
    }
  }
}

function createCyclicLinkedList() {
  let list = new LinkedList();
  list.push(0);
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  // This stmt creates LL where 4 is connected to 1
  list.head.next.next.next.next.next = list.head.next;
  console.log(list.detectLoop());
  return list;
  // 0->1->2->3->4-----|
  //    |--------<-----
}
createCyclicLinkedList();


// 142. Linked List Cycle II
// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
// Note: Do not modify the linked list.
// https://leetcode.com/problems/linked-list-cycle-ii/

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

  startNodeOfLoop() {
    var flag = 0;
    if (this.head == null || this.head.next == null) {
      return null;
    }
    var slowP = this.head;
    var fastP = this.head;
    while (fastP && fastP.next) {
      slowP = slowP.next;
      fastP = fastP.next.next;
      if (fastP === slowP) {
        flag = 1;
        console.log("Loop detected is true");
        break;
        // return true;
      }
    }
    if (slowP != fastP) {
      flag = 0;
      console.log("Loop detected false");
      //   return false;
    }
    if (flag) {
      slowP = this.head;
      while (slowP !== fastP) {
        slowP = slowP.next;
        fastP = fastP.next;
      }
      console.log(`Loop is starting at node ${slowP.val}`);
      return slowP.val;
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
  console.log(list.startNodeOfLoop());
  return list;
  // 0->1->2->3->4-----|
  //    |--------<-----
}
createCyclicLinkedList();

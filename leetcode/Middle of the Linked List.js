//  Middle of the Linked List

// https://leetcode.com/problems/middle-of-the-linked-list/

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slowPointer = head;
    let fastPointer = head;
    while(fastPointer && fastPointer.next){
          slowPointer = slowPointer.next;
          fastPointer = fastPointer.next.next; 
         }
    return slowPointer
};

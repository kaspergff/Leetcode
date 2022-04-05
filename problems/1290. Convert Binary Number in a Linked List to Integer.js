/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let nr = head.val;
  while (head.next) {
    nr = nr * 2 + head.next.val;
    head = head.next;
  }
  return nr;
};

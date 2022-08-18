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
 var middleNode = function (head) {
  let nr = [head];
  while (head.next) {
    nr.push(head.next);
    head = head.next;
  }
  let len = nr.length;
  if (len % 2 === 0) {
    return nr[len / 2];
  } else return nr[Math.floor(len / 2)];
};

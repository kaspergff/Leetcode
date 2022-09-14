#
# @lc app=leetcode id=61 lang=python3
#
# [61] Rotate List
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if k == 0:
            return
        curr = head
        count = 1
        while count <= k:
            while curr.next.val is not None:
                curr = curr.next
            newHead = curr.next
            curr.next = None
            newHead.next = head
            count += 1
            
            
        
# @lc code=end


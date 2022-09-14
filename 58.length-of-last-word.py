#
# @lc app=leetcode id=58 lang=python
#
# [58] Length of Last Word
#

# @lc code=start
class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        stripped = s.strip()
        list = stripped.split()
        return len(list[-1])

        
# @lc code=end


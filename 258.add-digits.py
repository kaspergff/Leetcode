#
# @lc app=leetcode id=258 lang=python
#
# [258] Add Digits
#

# @lc code=start
class Solution(object):
    def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
        def rec(num):
            string = str(num)
            li = list(string)
            s = 0
            for l in li:
                s += int(l)
            return s
        
        res = rec(num)
        if res <= 9 :
            return res
        return self.addDigits(res)
    

        


        
# @lc code=end


package leetcode

/*
 * @lc app=leetcode id=169 lang=golang
 *
 * [169] Majority Element
 */

// @lc code=start
func majorityElement(nums []int) int {
		res := 0
    majority := len(nums) / 2
		m := make(map[int]int)
		for _, v := range nums {
			m[v]++
			if m[v] > majority{
				res = v
			}
		}
		return res

}
// @lc code=end


/*
 * @lc app=leetcode id=219 lang=golang
 *
 * [219] Contains Duplicate II
 */

// @lc code=start

func containsNearbyDuplicate(nums []int, k int) bool {
	m := make(map[int]int)
	for i, v := range nums {
		j, ok := m[v]
		if ok {
			if abs(i,j) <= k{
				return true
			}
		}
		m[v] = i
		
	}

	return false
}

func abs(x, y int) int {
	if x < y {
		 return y - x
	}
	return x - y
}
// @lc code=end


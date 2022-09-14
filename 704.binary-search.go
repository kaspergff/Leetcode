package leetcode

/*
 * @lc app=leetcode id=704 lang=golang
 *
 * [704] Binary Search
 */

// @lc code=start

func search(nums []int, target int) int {
	res := -1
	left := 0
	right := len(nums) - 1
	for left <= right {
		middle := (left + right ) / 2

		if nums[middle] > target{
			right = middle -1
		} else if nums[middle] < target{
			left = middle + 1
		} else {
			return middle
		}
	}

	return res
    
}
// @lc code=end


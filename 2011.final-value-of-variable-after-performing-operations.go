package leetcode

/*
 * @lc app=leetcode id=2011 lang=golang
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
func finalValueAfterOperations(operations []string) int {
	res := 0
	for _, v := range operations {
		if v[1] == '+' {
			res++
		} else {
			res--
		}
	}

	return res
}

// @lc code=end


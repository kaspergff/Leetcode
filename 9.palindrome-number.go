package leetcode

import "strconv"

/*
 * @lc app=leetcode id=9 lang=golang
 *
 * [9] Palindrome Number
 */

// @lc code=start


func isPalindrome(x int) bool {
	y := strconv.Itoa(x)
	a := 0
	b := len(y) -1
	for ok := true; ok; ok = a < b {
    if y[a] != y[b] {
			return false
		}
		a ++
		b --
		
	}
	return true
}
// @lc code=end


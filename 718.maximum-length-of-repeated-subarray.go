package leetcode

import "math"

/*
 * @lc app=leetcode id=718 lang=golang
 *
 * [718] Maximum Length of Repeated Subarray
 */

// @lc code=start
func findLength(nums1 []int, nums2 []int) int {
	n := len(nums1)
	m := len(nums2)
	res:= 0

	matrix := make([][]int,n+1)

	for i := 0; i <= n; i++ {
		matrix[i] = make([]int, m + 1)
		for j := 0; j <= m; j++ {
			matrix[i][j] = 0
		}
	}

	for i := n - 1; i >= 0;i--{
		for j := m - 1; j >= 0;j--{
				if nums1[i] == nums2[j]{
					matrix[i][j] = matrix[j + 1][i + 1] + 1
				}
			}	
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			res = int(math.Max(float64(res), float64(matrix[i][j])))
		}
		
	}

	return res
}
// @lc code=end


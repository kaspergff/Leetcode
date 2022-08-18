package leetcode /*
 * @lc app=leetcode id=268 lang=golang
 *
 * [268] Missing Number
 */

// @lc code=start


func missingNumber(nums []int) int {
	var sum,total int

	for i := 0; i < len(nums) + 1; i++ {
	
		total += i

		if i < len(nums){
			sum += nums[i]
		}
		
	}
	return total - sum
    
}
// @lc code=end


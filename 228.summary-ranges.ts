/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  let res: string[] = [];

  let i = 0;
  for (let j = 1; j <= nums.length; j++) {
    if (nums[j] !== nums[j - 1] + 1) {
      if (i === j - 1) {
        res.push(`${nums[i]}`);
      } else {
        res.push(`${nums[i]}->${nums[j - 1]}`);
      }
      i = j;
    }
  }

  return res;
}
// @lc code=end

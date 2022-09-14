/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[]],
    arr = [];

  for (let num of nums) {
    arr = [];
    for (let entry of res) {
      arr.push([...entry, num]);
    }

    res.push(...arr);
  }

  return res;
};
// @lc code=end

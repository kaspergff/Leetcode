/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums === null || nums.length === 0) {
    return;
  }
  k = k % nums.length;
  if (k === 0) {
    return;
  }
  nums.reverse();
  rev(nums, 0, k - 1);
  rev(nums, k, nums.length - 1);
};

const rev = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};
// @lc code=end

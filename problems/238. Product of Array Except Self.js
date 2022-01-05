// 238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// nums = [1, 2, 3, 4];
var productExceptSelf = function (nums) {
  let res = [];
  let left = 1,
    right = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] = right;
    right *= nums[j];
  }
  for (let i = 0; i < nums.length; i++) {
    res[i] *= left;
    left *= nums[i];
  }

  return res;
};
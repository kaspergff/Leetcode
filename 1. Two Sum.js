// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// let nums = [2, 5, 5, 11],
//   target = 10
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && j != i) {
        return [i, j]
      }
    }
  }
  return null
};
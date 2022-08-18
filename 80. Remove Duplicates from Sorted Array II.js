/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let dp = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] && nums[i] === dp) {
      nums.splice(i, 1);
      i--;
    } else if (nums[i] === nums[i - 1]) {
      dp = nums[i];
    }
  }
  return nums.length
};

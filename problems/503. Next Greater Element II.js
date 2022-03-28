/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  return nums.map((val, index) => {
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[i] > val) return nums[i];
    }
    for (let i = 0; i < index; i++) {
      if (nums[i] > val) return nums[i];
    }

    return -1;
  });
};

// 628. Maximum Product of Three Numbers
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumProduct = function (nums) {
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity,
    min1 = Infinity,
    min2 = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2) {
      max3 = max2;
      max2 = nums[i];
    } else if (nums[i] > max3) {
      max3 = nums[i];
    }
    if (nums[i] < min1) {
      min2 = min1;
      min1 = nums[i];
    } else if (nums[i] < min2) {
      min2 = nums[i];
    }
  }

  let a = max1 * max2 * max3;
  let b = max1 * min1 * min2;
  return Math.max(a, b);
};
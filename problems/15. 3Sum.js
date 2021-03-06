/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums.sort((x, y) => x - y);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        j++;
        continue;
      }
      if (sum > 0) {
        k--;
        continue;
      }
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
      }
      while (nums[j] === nums[j + 1]) j++;
      while (nums[k] === nums[k - 1]) k--;
      j++;
      k--;
    }
  }
  return res;
};

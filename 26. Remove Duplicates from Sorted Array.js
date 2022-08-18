/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let set = [...new Set(nums)];
  nums.unshift(...set);
  nums.splice(set.length)
  return set.length;
};

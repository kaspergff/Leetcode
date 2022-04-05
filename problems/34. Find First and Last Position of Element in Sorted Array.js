/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let res = [-1, -1];
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    if (nums[start] === target && res[0] === -1) res[0] = start;
    if (nums[end] === target && res[1] === -1) res[1] = end;
    if (res[0] !== -1 && res[1] !== -1) return res;
    if (res[0] === -1) start++;
    if (res[1] === -1) end--;
  }
  return res;
};

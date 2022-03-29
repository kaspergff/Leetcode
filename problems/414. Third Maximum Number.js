/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let uniq = [...new Set(nums)]
  uniq.sort((a, b) => b - a);
  return uniq.length < 3 ? uniq[0] : uniq[2];
};

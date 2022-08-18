/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let product = nums.reduce((acc, curr) => acc * curr);
  return product > 0 ? 1 : product < 0 ? -1 : 0;
};

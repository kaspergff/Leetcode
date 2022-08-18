// 1608. Special Array With X Elements Greater Than or Equal X
/**
 * @param {number[]} nums
 * @return {number}
 */

// let nums = [3, 6, 7, 7, 0];
var specialArray = function (nums) {
  let res = -1;
  let sort = nums.sort((a, b) => b - a);
  for (let i = 0; i < sort.length; i++) {
    if (sort[i] >= i + 1) {
      res = i + 1;
    }
    if (sort[i + 1] >= i + 1) {
      res = -1;
    }
  }
  return r;
};

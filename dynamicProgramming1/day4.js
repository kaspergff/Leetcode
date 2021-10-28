// 55. Jump Game
/**
 * @param {number[]} nums
 * @return {boolean}
 */


var canJump = function (nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (max < i) return false
    max = Math.max(i + nums[i], max);
  }
  return true;
};

var jump = function(N) {
  let len = N.length - 1, curr = -1, next = 0, ans = 0
  for (let i = 0; next < len; i++) {
      if (i > curr) ans++, curr = next
      next = Math.max(next, N[i] + i)
  }
  return ans
};
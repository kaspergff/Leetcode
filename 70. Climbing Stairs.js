/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let first = 1;
  let second = 2;
  let next;

  for (let i = 3; i <= n; i++) {
    next = first + second;
    first = second;
    second = next;
  }
  return n === 1 ? first : second;
};

// 70. Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let first = 1
  let second = 2
  let next

  for (let i = 3; i <= n; i++) {
    next = first + second
    first = second
    second = next

  }
  return n === 1 ? first : second
};

// console.log(climbStairs(3));

// 746. Min Cost Climbing Stairs
/**
 * @param {number[]} cost
 * @return {number}
 */

let cost1 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
var minCostClimbingStairs = function (cost) {
  for (let i = cost.length - 3; ~i; i--)
    cost[i] += Math.min(cost[i + 1], cost[i + 2])
  return Math.min(cost[0], cost[1])
};
// console.log(minCostClimbingStairs(cost1));
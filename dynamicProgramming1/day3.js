// 198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0
  else if (nums.length == 1) return nums[0]
  let res = new Array(nums.length)
  res[0] = nums[0]
  res[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    res[i] = Math.max(res[i - 2] + nums[i], res[i - 1])

  }
  return res.pop()

};



var rob2 = function (nums) {
  if (!nums.length) return 0
  else if (nums.length == 1) return nums[0]
  let one = new Array(...nums)
  one.pop()
  let two = new Array(...nums)
  two.shift()
  return Math.max(rob(one), rob(two))

};

// 740. Delete and Earn
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let count = new Array(nums.length)
  nums.forEach(x => count[x]++)
  let avoid = 0,
    using = 0,
    prev = -1
  for (let i = 0; i < nums.length; i++) if (count[i] > 0){
    let m = Math.max(avoid, using)
    if (i - 1 != prev) {
      using = i * count[i] + m
      avoid = m
    } else{
      using = i * count[i] + avoid
      avoid = m
    }
    prev = i

  }
  return Math.max(avoid,using)

};

input = [10, 9, 9, 9, 9, 9, 9, 1]
console.log(deleteAndEarn(input));
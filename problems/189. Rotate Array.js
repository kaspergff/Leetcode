// 189. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let index = nums.length - 1 - i
    let item = nums[index]
    nums.unshift(item)

  }
  nums.splice(nums.length - k, k)
  
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let tracker = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      let temp = nums[i];
      nums[i] = nums[tracker];
      nums[tracker] = temp;
      tracker++;
    }
  }
  return nums
};

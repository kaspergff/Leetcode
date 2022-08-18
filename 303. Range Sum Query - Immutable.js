/**
 * @param {number[]} nums
 */
 class NumArray {
  constructor(nums) {
    this.nums = nums;
  }
  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    let arr = this.nums.slice(left, right + 1);
    return arr.reduce((acc, cur) => acc + cur);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

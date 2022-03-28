/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let oneFail = false;

  return nums.every((val, i) => {
    let prev = nums[i - 1] || -Infinity;
    let next = nums[i + 1] || Infinity;

    if (val >= prev && val <= next) return true;
    if (oneFail) return false;

    if (next >= prev) {
      nums[i] = next;
    } else {
      nums[i + 1] = val;
    }

    oneFail = true;
    return true
  });
};

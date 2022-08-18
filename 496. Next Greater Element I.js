/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  return nums1.map((val, _i) => {
    let index = nums2.indexOf(val);
    for (let i = index + 1; i < nums2.length; i++) {
      if (nums2[i] > val) return nums2[i];
    }

    return -1;
  });
};

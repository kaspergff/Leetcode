/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let arr = [...heights].sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== heights[i]) count++;
  }
  return count;
};

// 11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
  let [res, left, right] = [0, 0, height.length - 1];
  while (left < right) {
    let [leftPoint, rightPoint] = [height[left], height[right]];
    // find min height of both pillars
    let minHeight = Math.min(leftPoint, rightPoint);
    res = Math.max(res, minHeight * (right - left));

    if (leftPoint < rightPoint) left++;
    else right--;
  }
  return res;
};
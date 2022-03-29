/**
 * @param {number[][]} arr
 * @return {boolean}
 */

// slope formula is (y2-y2)/(x2-x1)
var checkStraightLine = function (arr) {
  if (arr.length == 2) return true;
  // check vertical line
  let vertical = new Set();
  for (let i = 0; i < arr.length; i++) {
    vertical.add(arr[i][0]);
  }
  if (vertical.size === 1) return true;

  let slope = (arr[1][1] - arr[0][1]) / (arr[1][0] - arr[0][0]);
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i][1] - arr[i - 1][1]) / (arr[i][0] - arr[i - 1][0]) !== slope)
      return false;
  }
  return true;
};

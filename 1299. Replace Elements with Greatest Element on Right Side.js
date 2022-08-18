/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let highest = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let val = arr[i];
    arr[i] = highest;
    if (val > highest) highest = val;
  }
  return arr;
};

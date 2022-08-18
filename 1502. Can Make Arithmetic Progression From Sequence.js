/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);

  let dif = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    let loopDif = arr[i] - arr[i - 1];
    if (loopDif != dif) return false;
  }
  return true
};

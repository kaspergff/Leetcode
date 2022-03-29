/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  if (arr[0] >= arr[1]) return false;

  let top = false;
  for (let i = 2; i < arr.length; i++) {
    if (!top) {
      if (arr[i] < arr[i - 1]) {
        top = true;
      }
      if(arr[i] == arr[i-1]) return false
    } else {
      if (arr[i] >= arr[i - 1]) return false;
    }
  }
  if (top) return true;
  return false;
};

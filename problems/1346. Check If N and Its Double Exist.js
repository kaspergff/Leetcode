/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = (arr) =>
  arr.some((x, xIn) => {
    return arr.some((y, yIn) => {
      xIn !== yIn && x * 2 === y;
    });
  });

var checkIfExist = (arr) => {
  let hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    let double = arr[i] * 2;
    if (hashMap[double] >= 0) {
      return true;
    }
    let half = arr[i] / 2;
    if (hashMap[half] >= 0) {
      return true;
    }
    if (hashMap[arr[i]] === undefined) {
      hashMap[arr[i]] = i;
    }
  }
  return false;
};

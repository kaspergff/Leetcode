/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  let sort1 = arr.sort((a, b) => a - b);
  let map = sort1.map((val, _) => [
    val,
    (val >>> 0)
      .toString(2)
      .split("")
      .reduce((acc, cur) => (cur === "1" ? acc + 1 : acc + 0), 0),
  ]);
  let sort = map.sort((a, b) => a[1] - b[1]).map((a) => a[0]);
  return sort;
};

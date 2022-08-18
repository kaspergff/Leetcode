/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  grid.map((val, _index) => {
    val.map((value, _) => {
      if (value < 0) count++;
    });
  });

  return count;
};

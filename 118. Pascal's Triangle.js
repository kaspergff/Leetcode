/**
 * @param {number} numRows
 * @return {number[][]}
 */

 var generate = function (numRows) {
  if (numRows === 0) return [];
  let res = [[1]];
  for (let i = 1; i < numRows; i++) {
    let row = [];
    for (let j = 0; j < i + 1; j++) {
      let left = res[i - 1][j - 1] || 0
      let right = res[i - 1][j] || 0
      row.push(left + right);
    }
    res.push(row);
  }

  return res;
};
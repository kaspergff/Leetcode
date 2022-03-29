/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];

  let res = [1];
  let next = getRow(rowIndex - 1);
  for (let i = 1; i < rowIndex; i++) {
    res[i] = next[i - 1] + next[i];
  }
  res.push(1);
  return res;
};

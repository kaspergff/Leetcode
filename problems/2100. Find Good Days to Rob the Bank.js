/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */

var goodDaysToRobBank = function (security, time) {
  let len = security.length;
  if (time === 0) return new Array(len).fill(0).map((_val, index) => index);

  let before = Array(len).fill(0);
  let after = Array(len).fill(0);
  let res = [];

  for (let i = 0; i < len; i++) {
    if (i - 1 >= 0 && security[i] <= security[i - 1]) {
      before[i] = before[i - 1] + 1;
    }
  }

  for (let i = len - 1; ~i; i--) {
    if (i + 1 < len && security[i] <= security[i + 1]) {
      after[i] = after[i + 1] + 1;
    }
  }
  for (let i = 0; i < len; i++) {
    if (time <= before[i] && time <= after[i]) res.push(i);
  }
  return res;
};

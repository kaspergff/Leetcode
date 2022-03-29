/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  if (n === 1) return 0;

  let mid = Math.pow(2, n - 1) / 2;

  return k <= mid
    ? kthGrammar(n - 1, k)
    : kthGrammar(n - 1, k - mid) === 0
    ? 1
    : 0;
};

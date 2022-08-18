// 1137. N-th Tribonacci Number
/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function (n) {
//     let res = 0;
//     if (n == 0) res += 0;
//     else if (n == 1) res += 1;
//     else if (n == 2) res += 1;
//     else if (n > 2) {
//         return tribonacci(n-1) + tribonacci(n - 2) + tribonacci(n - 3);
//     }
//     return res
// };

var tribonacci = function (n) {
  let res = [0, 1, 1];
  if (n < 3) return res[n];
  for (let i = 3; i <= n; i++) {
      res.push(res[i - 1] + res[i - 2] + res[i - 3]);
  }

  return res[n];
};
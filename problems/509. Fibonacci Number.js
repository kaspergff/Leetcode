// 509. Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function (n) {
  let res = 0;
  if (n == 1) res += 1;
  else if (n > 1) {
      return fib(n - 1) + fib(n - 2);
  }
  return res;
};
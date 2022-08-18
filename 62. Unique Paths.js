/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let uniquePaths = (m, n, set = {}) => {
  let key = m + "-" + n;
  if (key in set) return set[key];
  if (m === 1 || n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  set[key] = uniquePaths(m - 1, n, set) + uniquePaths(m, n - 1, set);
  return set[key];
};

console.log(uniquePaths(3, 7));

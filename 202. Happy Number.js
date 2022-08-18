/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set();

  return req(n, set);

  function req(a) {
    if (a === 1) return true;
    if (set.has(a)) return false;
    set.add(a);
    let arr = Array.from(String(a), Number);
    let newN = arr.reduce((acc, cur) => acc + cur ** 2, 0);
    return req(newN);
  }
};

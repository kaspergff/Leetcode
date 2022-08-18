/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  let dif = [];
  let i = 0;
  for (s of s1) {
    if (s !== s2[i]) {
      dif.push(i);
    }
    i++;
  }
  if (dif.length !== 2) {
    return false;
  } else if (s2[dif[0]] === s1[dif[1]] && s2[dif[1]] === s1[dif[0]]) {
    return true;
  }
    return false
};

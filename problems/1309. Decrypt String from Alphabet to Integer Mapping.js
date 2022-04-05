/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let alphabet = "1abcdefghijklmnopqrstuvwxyz";
  let res = "";
  let i = 0;
  while (i < s.length) {
    if (s[i + 2] === "#") {
      let index = s[i] + s[i + 1];
      res += alphabet[index];

      i += 3;
    } else {
      res += alphabet[s[i]];
      i++;
    }
  }
  return res;
};

/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = (s) => {
  if (s.length === 1) return s;
  let res = s.substring(0, 1);
  for (let i = 0; i < s.length; i++) {
    [check(s, i, i), check(s, i, i + 1)].forEach((subString) => {
      if (subString.length > res.length) res = subString;
    });
  }

  return res;
};

let check = (string, start, end) => {
  while (
    start >= 0 &&
    end <= string.length - 1 &&
    string[start] === string[end]
  ) {
    start--;
    end++;
  }
  return string.substring(start + 1, end);
};

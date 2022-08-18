/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function (s, t) {
  let freq1 = new Array(26).fill(0);
  let freq2 = new Array(26).fill(0);
  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    if (s[i]) freq1[s.charCodeAt(i) - 97]++;
    if (t[i]) freq2[t.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] !== freq2[i]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("car", "rat"));

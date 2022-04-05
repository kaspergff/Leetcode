/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = (n) => {
  let res = [];

  const req = (string, open, closed) => {
    if (open < 0 || closed < 0) return;
    if (open === 0 && closed === 0) {
      res.push(string);
    }
    if (open < closed) {
      req(string + ")", open, closed - 1);
    }
    req(string + "(", open - 1, closed);
  };
  req("", n, n);
  return res;
};
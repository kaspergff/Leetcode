/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = (accounts) =>
  accounts
    .map((arr) => arr.reduce((acc, cur) => acc + cur))
    .reduce((acc, cur) => (cur > acc ? cur : acc), []);

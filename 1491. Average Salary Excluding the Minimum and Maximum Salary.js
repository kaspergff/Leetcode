/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b);
  salary.shift();
  salary.pop();
  return salary.reduce(function (avg, value, _, { length }) {
    return avg + value / length;
  }, 0);
};

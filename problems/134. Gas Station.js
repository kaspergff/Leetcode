/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function (gas, cost) {
    if (gas.reduce((a, c) => a + c) + cost.reduce((a, c) => a + c) < 0) return -1;
    let output = 0;
    let totalgas = 0;
    let current = 0
    for (let i = 0; i < gas.length; i++) {
      totalgas += gas[i] - cost[i];
      current += gas[i] - cost[i];
      if (current < 0) {
        output = i + 1;
        current = 0;
      }
    }
  
    return totalgas >= 0 ? output : -1
  };
let gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));

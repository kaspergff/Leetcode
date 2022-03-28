/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let str = String(n)
  let product = 1;
  let sum = 0;
  for(let v of str){
    product *= +v;
    sum += +v;
}
  return product - sum
};

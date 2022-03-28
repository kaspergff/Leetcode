/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  let arrayOfDigits = Array.from(String(n), Number);


  for (let i = arrayOfDigits.length; i > 0; i--) {
    let val = arrayOfDigits[i - 1];
    arrayOfDigits.splice(i - 1, 1);
    arrayOfDigits.push(val);
    let nr = parseInt(arrayOfDigits.join(""));
    if (nr > n) return nr;

  }
  return -1;
};

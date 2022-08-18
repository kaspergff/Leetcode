/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let check2Words = (w1, w2) => {
    for (let i = 0; i < Math.min(w1.length, w2.length) + 1; i++) {
      let indexW1 = order.indexOf(w1[i]);
      let indexW2 = order.indexOf(w2[i]);
      if (indexW1 < indexW2) return true;
      else if (indexW1 > indexW2) return false;
      else if (!indexW1 && indexW2) return true;
      else if (!indexW2 && indexW1) return false;
    }
    return true;
  };

  let res = [];
  for (let j = 1; j < words.length; j++) {
    let i = j - 1;
    let ans = check2Words(words[i], words[j]);
    if (!ans) return false;
  }

  return true;
};

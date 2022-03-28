/**
 * @param {number[]} deck
 * @return {boolean}
 */
 var hasGroupsSizeX = function (deck) {
  let arr = new Array(1000).fill(0);
  for (let i = 0; i < deck.length; i++) {
    arr[deck[i]] += 1;
  }
  let ans = arr.filter((x) => x != 0).sort((a, b) => a - b);
  let max = Math.max.apply(null,ans);
  for (let i = 2; i < max+1; i++) {
    if (ans.every((x) => x % i == 0)) {
        
      return true;
    }
  }
  return false;
};

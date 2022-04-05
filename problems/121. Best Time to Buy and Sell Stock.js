/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let start = prices[0]

  let diff = 0

  for(let i = 1; i < prices.length; i ++){
      start = Math.min(start, prices[i])
      diff = Math.min(diff,start - prices[i])

  }
  return -diff
};
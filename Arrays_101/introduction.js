/**
 * @param {number[]} nums
 * @return {number}
 */

// let nums = [1, 0, 1, 1, 0, 1];
var findMaxConsecutiveOnes = (nums) => {
    result = nums
        .join("")
        .split(0)
        .map((sub) => sub.length);
    return Math.max(...result);
};

// let nums = [12,345,2,6,7896]
var findNumbers = function (nums) {
    let a = nums.filter((num) => num.toString().length % 2 == 0);
    return a.length;
};

let nums = [-7, -3, 2, 3, 11];
var sortedSquares = function (nums) {
    return nums.map((a) => a * a).sort((a, b) => a - b);
};

// console.log(sortedSquares(nums));
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    
};
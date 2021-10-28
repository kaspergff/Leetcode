// 1920. Build Array from Permutation
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// let nums = [0, 2, 1, 5, 3, 4];

var buildArray = (nums) => nums.map((a) => nums[a]);

// 11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
  let [res, left, right] = [0, 0, height.length - 1];
  while (left < right) {
    let [leftPoint, rightPoint] = [height[left], height[right]];
    // find min height of both pillars
    let minHeight = Math.min(leftPoint, rightPoint);
    res = Math.max(res, minHeight * (right - left));

    if (leftPoint < rightPoint) left++;
    else right--;
  }
  return res;
};

// 42. Trapping Rain Water
/**
 * @param {number[]} height
 * @return {number}
 */

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// let height = [4, 2, 0, 3, 2, 5];
// var trap = function (height) {
//     let res = 0;
//     for (let i = 1; i < height.length; i++) {
//         let left = height.slice(0, i);
//         let right = height.slice(i + 1, height.length);

//         let leftMax = Math.max(...left);
//         let rightMax = Math.max(...right);

//         if (leftMax > height[i] && rightMax > height[i]) {
//             res = res + (Math.min(leftMax, rightMax) - height[i]);
//         }
//     }
//     return res;
// };

var trap = function (height) {
  let leftPointer = 0,
    rightPointer = height.length - 1;
  let left_max = 0,
    right_max = 0;
  let res = 0;
  while (leftPointer < rightPointer) {
    if (height[leftPointer] < height[rightPointer]) {
      if (height[leftPointer] >= left_max) left_max = height[leftPointer];
      else res = res + (left_max - height[leftPointer]);
      leftPointer++;
    } else {
      if (height[rightPointer] >= right_max)
        right_max = height[rightPointer];
      else res = res + (right_max - height[rightPointer]);
      rightPointer--;
    }
  }
  return res;
};
// console.log(trap(height));

// 238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// nums = [1, 2, 3, 4];
var productExceptSelf = function (nums) {
  let res = [];
  let left = 1,
    right = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] = right;
    right *= nums[j];
  }
  for (let i = 0; i < nums.length; i++) {
    res[i] *= left;
    left *= nums[i];
  }

  return res;
};

// 52. Maximum Product Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
// nums = [-2, 0, -1];
var maxProduct = function (nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);

    curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

    prevMax = curMax;
    prevMin = curMin;

    result = Math.max(curMax, result);
  }
  return result;
};

// 628. Maximum Product of Three Numbers
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity,
    min1 = Infinity,
    min2 = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2) {
      max3 = max2;
      max2 = nums[i];
    } else if (nums[i] > max3) {
      max3 = nums[i];
    }
    if (nums[i] < min1) {
      min2 = min1;
      min1 = nums[i];
    } else if (nums[i] < min2) {
      min2 = nums[i];
    }
  }

  let a = max1 * max2 * max3;
  let b = max1 * min1 * min2;
  return Math.max(a, b);
};

// 1608. Special Array With X Elements Greater Than or Equal X
/**
 * @param {number[]} nums
 * @return {number}
 */

// let nums = [3, 6, 7, 7, 0];
var specialArray = function (nums) {
  let res = -1
  let sort = nums.sort((a, b) => b - a)
  for (let i = 0; i < sort.length; i++) {
    if (sort[i] >= i + 1) {
      res = i + 1

    }
    if (sort[i + 1] >= i + 1) {
      res = -1
    }

  }
  return res
}


// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// let nums = [2, 5, 5, 11],
//   target = 10
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && j != i) {
        return [i, j]
      }
    }
  }
  return null
};
// console.log(twoSum(nums, target));

// 1929. Concatenation of Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = new Array(nums.length * 2).fill(0)
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i]
    ans[i + nums.length] = nums[i]

  }
  return ans

};

// let nums = [1, 2, 1]
// console.log(getConcatenation(nums));

// 682. Baseball Game
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let res = []
  ops.forEach((op, index) => {
    if (Number(op)) {
      res.push(Number(op))
    } else if (op == "+") {
      res.push(res[res.length - 1] + res[res.length - 2])

    } else if (op == "D") {
      res.push(res[res.length - 1] * 2)
    } else if (op == "C") {
      res.pop()
    }

  })

  let sum = res.reduce((total, num) => total + num)
  return sum
};

// 1089. Duplicate Zeros
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0)
      arr.pop()
      i++
    }
  }
};


// 66. Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++
      break
    } else {
      digits[i] = 0
    }
  }
  if (digits[0] == 0) {
    digits.unshift(1)
  }
  return digits
};

// 189. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let index = nums.length - 1 - i
    let item = nums[index]
    nums.unshift(item)

  }
  nums.splice(nums.length - k, k)
  
};

let nums1 = [1, 2, 3, 4, 5, 6, 7],
  k1 = 3

console.log(rotate(nums1, k1));
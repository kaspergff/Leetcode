// 42. Trapping Rain Water
/**
 * @param {number[]} height
 * @return {number}
 */

 let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

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
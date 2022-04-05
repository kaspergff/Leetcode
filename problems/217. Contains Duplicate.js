/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let map = new Map()
   for(let val of nums){
     if(map.has(val)) return true
     map.set(val)
   }
  return false
};

let input = [1,2,3,1]

containsDuplicate(input)
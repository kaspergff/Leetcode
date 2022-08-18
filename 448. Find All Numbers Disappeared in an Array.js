/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function (nums) {
  let expected = new Set()
  for(let i = 0; i < nums.length; i ++){
      expected.add(i+1)
  }
  for(let i = 0; i < nums.length; i ++){
      let val = nums[i];
      if(expected.has(val)) expected.delete(val)
  }
  return [...expected]

}
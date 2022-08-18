/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
  let res = []
  let newMap = mat.flatMap((item) => item)
  if(r*c !== newMap.length) return mat
  for(let i =0 ; i < r; i++){
      let row = []
      for(let j = 0; j< c; j++){
          row.push(newMap.shift())
      }
      res.push(row)
  }
  return res
};
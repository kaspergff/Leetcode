/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
  let arS = s.split("")
  let arT = t.split("")
  for(let i =0; i< arT.length;i++){
    if(!arS.includes(arT[i])) return arT[i]
    let index = arS.indexOf(arT[i])
    arS.splice(index,1)
  }
};
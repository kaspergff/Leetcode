/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let res = -1;
  let smallDis = Infinity;

  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      // point is valid
      let manDis = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);
      if(manDis < smallDis){
        smallDis = manDis
        res = i
      }
    }
  }
  return res
};

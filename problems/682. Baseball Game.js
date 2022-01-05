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
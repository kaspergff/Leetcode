/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let res = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") res += "G";
    else if (command[i] === "(" && command[i + 1] === ")") {
      res += "o";
      i++;
    } else if (command[i] === "(" && command[i + 1] === "a") {
      res += "al";
      i = i + 3;
    }
  }
  return res;
};

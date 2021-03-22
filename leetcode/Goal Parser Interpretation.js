// https://leetcode.com/problems/goal-parser-interpretation/

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let str = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] == "G") str = str + "G";
    else if (command[i] == "(" && command[i + 1] == "a") {
      str = str + "al";
    } else if (command[i] == "(" && command[i + 1] == ")") {
      str = str + "o";
    }
  }
  return str;
};

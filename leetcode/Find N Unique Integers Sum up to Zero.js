// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

/**
 * @param {number} n
 * @return {number[]}
 */

var sumZero = function (n) {
  let sum = 0;
  let output = [];
  for (let i = 1; i < n; i++) {
    sum = sum + i;
    output.push(i);
  }
  output.push(-sum);
  return output;
};


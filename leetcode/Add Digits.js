// https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let count = 0;
  while (num > 9) {
    num = sumOfDigit(num);
  }
  console.log(count, "count");
  return num;
};

function sumOfDigit(num) {
  let digit,
    sum = 0;
  while (num) {
    digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

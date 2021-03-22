//https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
function sumDigit(n) {
  let sum = 0,
    digit;
  while (n != 0) {
    digit = n % 10;
    sum = sum + digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isHappy(n) {
  let obj = {};
  let sum = n;
  while (sum !== 1) {
    sum = sumDigit(sum);
    if (!obj.hasOwnProperty(sum)) obj[sum] = 1;
    else {
      obj[sum]++;
      return false;
    }
  }
  return true;
}

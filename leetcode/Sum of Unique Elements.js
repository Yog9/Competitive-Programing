/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/sum-of-unique-elements/
var sumOfUnique = function (nums) {
  let obj = {};
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let i in obj) {
    if (obj[i] == 1) {
      sum = sum + parseInt( i );
    }
  }
  return sum;
};

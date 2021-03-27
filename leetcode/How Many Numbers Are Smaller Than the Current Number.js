// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let copyNums = [...nums];
  let output = [];
  let obj = {};
  copyNums.sort((a, b) => a - b);
  for (let i = 0; i < copyNums.length; i++) {
    if (!obj.hasOwnProperty(copyNums[i])) {
      obj[copyNums[i]] = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let str = nums[i].toString();
    if (obj.hasOwnProperty(str)) {
      output.push(obj[str]);
    }
  }
  return output;
};

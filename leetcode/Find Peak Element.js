//https://leetcode.com/problems/find-peak-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length == 1) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && i < nums.length - 1) {
      if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) {
        return i;
      }
    }
  }

  if (nums[1] < nums[0]) {
    return 0;
  } else if (nums[nums.length - 2] < nums[nums.length - 1]) {
    return nums.length - 1;
  }
};

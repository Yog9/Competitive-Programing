// https://leetcode.com/problems/find-lucky-integer-in-an-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let hash = {};
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    if (hash.hasOwnProperty(arr[i])) {
      hash[arr[i]]++;
    } else hash[arr[i]] = 1;
  }
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === hash[arr[i]]) {
      if (max < arr[i]) max = arr[i];
    }
  }
  return max;
};


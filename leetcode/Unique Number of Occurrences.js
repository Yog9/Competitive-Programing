// https://leetcode.com/problems/unique-number-of-occurrences

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {};
  let occur = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  for (let key in obj) {
    occur.push(obj[key]);
  }
  let occurSet = new Set(occur);
  if (occur.length == occurSet.size) return true;
  else return false;
};

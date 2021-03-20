//https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var areAlmostEqual = function (s1, s2) {
  let idx1 = 0
  let idx2 = 0
  let count = 0;
  if (s1 === s2) return true;
  for (i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      if(idx1 == 0){
         idx1 = i
      }
      else idx2 = i
      count++
    }
    if (count > 2) 
    return false;
  }
  if (count == 1) {
    return false;
  }
  if (count === 2) {
    if (s1[idx1] === s2[idx2] && s1[idx2] === s2[idx1]) return true;
    else return false;
  }
};


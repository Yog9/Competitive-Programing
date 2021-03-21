//https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let j = {};
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    if (!j.hasOwnProperty(jewels[i])) {
      j[jewels[i]] = 1;
    } else {
      j[jewels[i]]++;
    }
  }
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] in j) count++;
  }
  return count;
};

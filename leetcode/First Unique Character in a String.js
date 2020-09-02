// https://leetcode.com/problems/first-unique-character-in-a-string/
// 387. First Unique Character in a String
// s = "leetcode"
// return 0.
// s = "loveleetcode"
// return 2.
/*
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hashMap = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  for (let element of s) {
    hashMap[element] = hashMap[element] + 1;
  }
  for (let element of s) {
    if (hashMap[element] == 1) {
      return s.indexOf(element);
    }
  }
  return -1;
};

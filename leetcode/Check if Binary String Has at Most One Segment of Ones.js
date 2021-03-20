// https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    return !s.includes("01");
};

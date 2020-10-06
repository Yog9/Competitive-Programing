// 287. Find the Duplicate Number Medium
// https://leetcode.com/problems/find-the-duplicate-number/

// Implementation by Floyd's Cycle detection TC O(n) TS O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slowP = nums[0];
    let fastP = nums[0];
   do{
        slowP = nums[slowP]
        fastP = nums[nums[fastP]]
     }
    while(fastP != slowP)
    slowP = nums[0]
    while(fastP !== slowP){
        fastP = nums[fastP]
        slowP = nums[slowP]
    }
    return fastP
};

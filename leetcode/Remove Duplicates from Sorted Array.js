// Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Given nums = [0,0,1,1,1,2,2,3,3,4],
// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
// It doesn't matter what values are set beyond the returned length.


var removeDuplicates = function(nums) {
 if(nums.length === 0 || nums.length === 1){
     return nums.length
 }
 
 let slowP = 0, fastP = 0;
   for(fastP = 1; fastP < nums.length;fastP++){
      if(nums[fastP]!= nums[slowP]){
          slowP++;
          nums[slowP] = nums[fastP]
      }
   }
    return slowP+1;
};

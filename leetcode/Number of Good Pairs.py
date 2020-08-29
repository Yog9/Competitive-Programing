# Given an array of integers nums.
# A pair (i,j) is called good if nums[i] == nums[j] and i < j.
# Return the number of good pairs.
# Example 1:
# Input: nums = [1,2,3,1,1,3]
# Output: 4
# Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
# https://leetcode.com/problems/number-of-good-pairs/

import math

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        N={}
        result = 0 
        for num in nums:
            if num in N:
                N[num]+=1
            else:
                N[num]=1
        key_count = N.values()
        for key in key_count:
            if(key>1):
                result = result + (math.factorial(key))//((math.factorial(key-2))*2)
        return result

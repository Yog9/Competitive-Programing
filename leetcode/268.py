# https://leetcode.com/problems/missing-number/
# Missing Number
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        x = sum(nums)
        ar = len(nums)*((len(nums)+ 1))//2
        return abs(x-ar)

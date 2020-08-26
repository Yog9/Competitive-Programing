# https://leetcode.com/problems/single-number/
# logic Bit Manipulation (Single Number)
# a⊕0=a
# a⊕a=0
# a⊕b⊕a=(a⊕a)⊕b=0⊕b=ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        a=0
        for i in range(0,len(nums)):
            a = a^nums[i]
        return a

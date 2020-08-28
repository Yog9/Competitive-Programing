# Given two arrays, write a function to compute their intersection.
# https://leetcode.com/problems/intersection-of-two-arrays-ii/
# Example 1:
# Input: nums1 = [1,2,2,1], nums2 = [2,2]
# Output: [2,2]
# Solving this by frequency counter pattern
# Need to also practice this by two pointer method

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        A={}
        res=[]
        if(len(nums1)<len(nums2)):
            nums1,nums2 = nums2, nums1
        for ele in nums1:
            if ele in A:
                A[ele] += 1
            else:
                A[ele] = 1
        for ele in nums2:
            if ele in A:
                A[ele] = A[ele] -1
                res.append(ele)
                if(A[ele] == 0 or A[ele] < 0):
                    A.pop(ele)
        return res

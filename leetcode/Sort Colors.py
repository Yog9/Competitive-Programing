# Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
# Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
# Note: You are not suppose to use the library's sort function for this problem.
# Example:
# Input: [2,0,2,1,1,0]
# Output: [0,0,1,1,2,2]
# https://leetcode.com/problems/sort-colors

class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        
        We would use Bubble Sort because it takes O(1) Space complexity due to temp 
        
        variable in swap
        
        Worst Case scenario when array is  sorted in reverse order o(n2)
        
        Best Case Scenario when array is already sorted O(n) because 
        
        We could create a flag to check if numbers were swaped and if they were not then the execution takes place only on the outer loop so the complexity is O(n)
        """
        for i in range(0,len(nums)):
            for j in range(0,len(nums)-1-i):
                if nums[j] > nums[j+1]:
                    nums[j], nums[j+1] = nums[j+1], nums[j] # Swapped
        return nums

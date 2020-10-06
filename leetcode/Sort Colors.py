# Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
# Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
# Note: You are not suppose to use the library's sort function for this problem.
# Example: Medium 
# Input: [2,0,2,1,1,0]
# Output: [0,0,1,1,2,2]
# https://leetcode.com/problems/sort-colors

class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
            DUTCH NATIONAL FLAG ALGO THIS FOLLOWS IN-PLACE SORT APPROACH
        """
        class Solution:
           def sortColors(self, nums):
                low, mid, high = 0, 0, len(nums)-1
                while mid <= high:
                    if nums[mid] == 0:
                        nums[low], nums[mid] = nums[mid], nums[low]
                        mid += 1
                        low += 1
                    elif nums[mid] == 1:
                        mid += 1
                    else:
                        nums[mid], nums[high] = nums[high], nums[mid]
                        high -= 1

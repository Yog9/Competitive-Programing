# Find the smallest after deleting given elements
# https://www.geeksforgeeks.org/find-the-smallest-after-deleting-given-elements/
# Given an array of integers, find the smallest number after deleting given elements. In case of repeating elements, we delete one instance (from the original array) for every instance present in the array containing elements to be deleted.
def findSmallestAfterDel(arr,del_arr):
    A = {}
    for ele in arr:
        if(ele not in A):
            A[ele] = 1
        else:
            A[ele]+= 1
    for ele in del_arr:
        if(ele in A):
            A[ele]-=1
            if(A[ele]== 0):
                A.pop(ele)
    smallest = min(A.keys())
    print(smallest)
arr = [5, 12, 33, 4, 56, 12, 20] 
dell_arr = [12, 4, 56, 5] 
findSmallestAfterDel(arr,dell_arr)

# Ans 12

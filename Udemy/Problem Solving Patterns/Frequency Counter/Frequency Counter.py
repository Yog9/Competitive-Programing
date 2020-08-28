#  Frequency Counter Pattern
# Given two arrays A and B find that each element in B is square of each element in A
# Complexity 3*n =O(n)
def same(A, B):
    dict_A = {}
    flag = 0
    if(len(A)==len(B)):
        # Created a dictionary with elements of A and there frequency
        for key in A:
            if key in dict_A:
                dict_A[key] += 1
            else:
                dict_A[key] = 1
        # Created a dictionary with elements of B and there frequency
        dict_B = {}
        for key in B:
            if key in dict_B:
                dict_B[key] += 1
            else:
                dict_B[key] = 1
        # Check if for each key of dict_A is dict_B and also if the values of both dicts are same
        for key in dict_A:
            keyB = key * key
            # print(keyB)
            if (keyB in dict_B):
                flag = 1
                if(dict_B[keyB] == dict_A[key]):
                    flag = 1
                else:
                    flag = 0
            else:
                flag = 0
        if(flag == 0):
            print('false')
        else:
            print('true')
    else:
        print(false)


same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])

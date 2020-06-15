n = int(input())
numList = list(map(int, input().strip().split()))[:n]
numList.sort()
i = 1
length = len(numList)
while(i<=length):
    if((numList[0]>1) and (1 not in numList)):
        print (1)
        break
    if(numList[0]+i not in numList):
        print(numList[0]+i)
        break
    else:
        i+=1
    
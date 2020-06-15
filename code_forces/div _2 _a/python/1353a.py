t = int(input())
i = 0
while(i<t):
    numList = list(map(int, input().strip().split()))[:2]
    if(numList[0]==1):
        print(0)
    elif(numList[0]==2):
        print(numList[1])
    else:
        print(2*numList[1])
    i+=1
    
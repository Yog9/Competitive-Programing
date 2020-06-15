t = int(input())
while(t>0):
    n = int(input())
    numList = list(map(int, input().strip().split()))[:n]
    count=0
    if 1 not in numList:
        # print("here")
        print (count)
    else:
        for i in range (n-1):
            # print(i,"i")
            if numList[i]==0:
                temp=numList[i]
                numList[i]=0
                numList[i+1]=numList[i+1]+temp
            elif numList[i]>0:
                temp=numList[i]
                numList[i]=0
                numList[i+1]=numList[i+1]+temp
                count+=1
                if 1 not in numList:
                    print (count)
                    break
        if (i==n-2) and 1 in numList:
            # print("here")
            print(-1)
    t=t-1


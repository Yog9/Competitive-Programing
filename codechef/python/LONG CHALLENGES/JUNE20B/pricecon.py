t = int(input())
while(t>0):
    n,k = map(int,input().split())
    numList = list(map(int, input().strip().split()))[:n]
    sumInitial = sum(numList) 
    for i in range(n):
        if(numList[i]>k):
            numList[i]=k
    sumFinal = sum(numList)
    print(abs(sumFinal-sumInitial))
    t=t-1
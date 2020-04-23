n = int(input())
i=0
count=0
while(i<n):
    sum=0
    numList = list(map(int, input().strip().split()))[:3]
    for num in numList:
        sum+= num
    if(sum>=2):
        count+=1
    i+=1
print(count)


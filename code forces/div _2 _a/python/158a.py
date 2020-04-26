n,k = map(int,input().split())
count = 0
# Taking a list of size n as input separated by space
numList = list(map(int, input().strip().split()))[:n]
for num in numList:
    if(num>=numList[k-1] and num>0):
        count+=1
print(count)
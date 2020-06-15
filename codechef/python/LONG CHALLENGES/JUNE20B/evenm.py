t = int(input())
arr=[]
sum=0
while t > 0:
    N = int(input())
    if(N<=43):
        for i in range(1,pow(N,2)+1):
            print (i, end = ' ')
    t=t-1

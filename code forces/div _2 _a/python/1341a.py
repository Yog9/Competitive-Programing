j=0
bool=False
t=int(input())
while(j<t):
    n,a,b,c,d = map(int,input().split())
    for i in range(a-b,a+b+1):
        if((i*n>=c-d) and (i*n<=c+d)):
            bool=True
            print('Yes')
            break
    print('No')
    j+=1
    
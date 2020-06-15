t = int(input())
while(t>0):
    N= int(input())
    a = list(map(int, input().strip().split()))[:N]
    if a[0]==5:
        i=0
        count5=0
        count10=0
        count15=0
        countNo=0
        while(i<N):
            if(a[i]==5):
                count5=count5+1
                i=i+1
            elif (a[i]==10):
                if(count5>0):
                    count10=count10+1
                    count5=count5-1
                elif(count5==0):
                    countNo=countNo+1
                i=i+1
            elif(a[i]==15):
                if(count10>0):
                    count10=count10-1
                    count15=count15+1
                elif(count5>=2 and count10==0):
                    count5=count5-2
                    count15=count15+1
                else:
                    countNo=countNo+1
                i=i+1
        if(countNo>0):
            print("NO")
        elif(countNo==0):
            print("YES")
    else:
        print("NO")
    t=t-1
    




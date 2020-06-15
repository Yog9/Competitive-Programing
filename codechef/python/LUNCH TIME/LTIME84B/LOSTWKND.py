t = int(input())
while(t>0):
    numList = list(map(int, input().strip().split()))[:6]
    ExTimearr=[]
    ExWorkarr=[]
    P=numList[5]
    WFH = [element * P for element in numList]
    for i in range(5):
        if(WFH[i]>24):
            ExWork=WFH[i]-24
            ExWorkarr.append(ExWork)
        elif(WFH[i]<24):
            ExTime=24-WFH[i]
            ExTimearr.append(ExTime)
    SumExTime= sum(ExTimearr)
    SumExWork= sum(ExWorkarr)
    if((SumExWork<SumExTime) or (SumExTime==SumExWork)) :
        print("No")
    elif(SumExWork>SumExTime):
        print("Yes")
    t=t-1


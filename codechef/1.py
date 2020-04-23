t= int(input())
i=0
while(i<t):
    numList = list(map(int, input().strip().split()))[:5]
    dis_chef= abs(numList[0]-numList[2])
    dis_keffa= abs(numList[1]-numList[2])
    time_chef =dis_chef/numList[3]
    time_keffa =dis_keffa/numList[4]
    if(time_chef<time_keffa):
        print("Chef")
    elif(time_keffa<time_chef):
        print("Kefa")
    else:
        print("Draw")
    i+=1
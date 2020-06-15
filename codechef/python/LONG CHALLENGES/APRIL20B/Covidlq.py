t = int(input())
while t > 0:
    n = int(input())
    a = list(map(int, input().strip().split()))[:n]
    i = 0
    count0 = 0
    countY = 0
    countN = 0
    count1 = 0
    while i < n:
        if a[i] == 0:
            count0 += 1
            i += 1
            print(i,"0")
        elif a[i] == 1 and count1 == 0:
            count1 += 1
            count0 = 0
            print(i,"first1")
        elif a[i] == 1 and count1 > 0 and count0 >= 5:
            count1 += 1
            i += 1
            countY += 1
            print(i,"yes")
        elif a[i] == 1 and count1 > 0 and count0 < 5:
            count1 += 1
            i += 1
            countN += 1
            print(i,"No")
            break
    print(count0,count1)
    if countN > 0:
        print("NO")
    else:
        print("YES")
    print(t)
    t = t-1

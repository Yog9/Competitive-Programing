# partially solved
t = int(input())
while t > 0:
    TS = int(input())
    count2 = 0
    mularr = []
    i = 1
    if TS % 2 == 0:
        tempTS = TS
        while tempTS % 2 == 0:
            tempTS = tempTS/2
            count2 = count2+1
        LCM = pow(2, count2+1)
        mul = LCM
        if LCM < TS:
            while mul < TS:
                mul = LCM*i
                if(mul < TS):
                    mularr.append(mul)
                i += 1
    elif TS % 2 != 0:
        for num in range(1, int(TS)):
            if num % 2 == 0:
                mularr.append(num)
    if len(mularr) > 0:
        print(len(mularr))
    else:
        print(0)
    t = t-1

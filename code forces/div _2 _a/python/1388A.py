# https://codeforces.com/contest/1388/problem/A
t = int(input())
while(t>0):
    n = int(input())
    if n<=30:
        print('NO')
    elif n== 40 or n==44 or n==36:
        print('YES')
        print('6 10 15 ' +str(n-31))
    else:
        print('YES')
        print('6 10 14 ' + str(n-30))
    t=t-1
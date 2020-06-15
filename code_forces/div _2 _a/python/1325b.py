t = int(input())
while t > 0:
    n = int(input())
    a = list(map(int, input().strip().split()))[:n]
    a= sorted(a)
    print(len(list(set(a))))
    t=t-1
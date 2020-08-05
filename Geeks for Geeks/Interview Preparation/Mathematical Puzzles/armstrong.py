t = int(input())
while (t>0):
    n = int (input())
    x = n
    sum = 0
    while x > 0:
        digit = x % 10
        sum = sum + pow(digit,3)
        x= x//10
    if n == sum:
        print('Yes')
    else:
        print('No')
    t = t-1

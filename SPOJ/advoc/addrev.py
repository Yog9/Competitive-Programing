t = int(input())
def reverseNum(n):
    rev = 0
    while n > 0:
        a = n % 10
        rev = rev * 10 + a 
        n = n // 10
    return rev

while(t > 0):
    sum = 0
    a, b = map(int, input().split())
    a = reverseNum(a)
    b = reverseNum(b)
    sum = reverseNum(a+b)
    while(sum%10==0):
        if(sum%10==0):
            sum=sum//10
    print(sum)
    t = t-1




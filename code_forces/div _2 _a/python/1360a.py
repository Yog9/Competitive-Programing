t = int(input())
while t > 0:
    a, b = map(int, input().split())
    if a < b:
        squareSide = a+a
        if squareSide >= b:
            square = squareSide
        else:
            square = b
    elif b < a:
        squareSide = b+b
        if squareSide >= a:
            square = squareSide
        else:
            square = a
    else:
        square = a+b
    print(pow(square, 2))
    t = t-1

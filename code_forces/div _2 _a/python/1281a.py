t = int(input())
while(t>0):
    s = input()
    if s[-2:] == "po":
        print('FILIPINO')
    elif s[-4:] == "desu" or s[-4:] == "masu":
        print('JAPANESE')
    elif s[-5:] == "mnida":
        print('KOREAN')
    t = t-1

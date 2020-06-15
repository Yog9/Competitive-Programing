t = int(input())
while(t>0):
    s= input()
    i=0
    count=0
    while(i<len(s)-1):
        if(s[i]=='x' and s[i+1]=='y' or( s[i]=="y" and s[i+1]=="x")):
            count=count+1
            i=i+2
        else:
            i=i+1
    print(count)
    t=t-1
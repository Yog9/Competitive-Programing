s=input()
x=[]
sort=[]
result=''
if(len(s)==1):
    print(s)
else:    
    for i in s:
        if(i.isdigit()):
            x.append(i)
            sort=sorted(x)
    for j in sort:
        result = result + '+' + j
    print(result[1:])
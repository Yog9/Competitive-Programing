a= input()
b= input()
a_lower=a.lower()
b_lower=b.lower()
if(a_lower<b_lower):
    print(-1)
elif(a_lower>b_lower):
    print(1)
else: 
    print(0)    
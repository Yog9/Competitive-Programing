
def makingAnagrams(s1, s2):
    s3=list(s2)
    for i in s1:
        if i in s3:
            s3.remove(i)
    no_common=len(s2)-len(s3)
    print(no_common)
    return len(s1)+len(s2)-2*no_common
t=int(input())
for i in range(t):
    s1=input()
    s2=input()
    print(makingAnagrams(s1,s2))
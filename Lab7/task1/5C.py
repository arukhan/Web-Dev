a=int(input())
s=0
arr=list(map(int, input().split()))
for i in arr:
    if i>0:
        s+=1
print(s)
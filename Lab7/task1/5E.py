a=int(input())
arr=list(map(int, input().split()))
for i in range (1, len(arr)):
    if (arr[i]>0 and arr[i-1]<0 or arr[i]<0 and arr[i-1]>0):
        s="NO"
    else:
        s="YES"
        break
print(s)
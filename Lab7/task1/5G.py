a=int(input())
s=0
arr=list(map(int, input().split()))
for i in range(a // 2):
    arr[i], arr[a - i - 1] = arr[a - i - 1], arr[i]
print(*arr)
a=input()
a=a[::-1]
s=0
for i in range(0, len(a)):
    s+=int(a[i])*(2**i)
print(s)
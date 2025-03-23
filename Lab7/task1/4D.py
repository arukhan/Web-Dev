a=int(input())
i=0
p=""
while (i<=a):

    if a!=2**i:
        p="NO"
    else:
        p="YES"
        break
    i+=1
print(p)
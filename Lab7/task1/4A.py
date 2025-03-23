from math import sqrt
a=int(input())
i=1
while(i<=a):
    if (sqrt(i)==int(sqrt(i*1.0))):
        print(i)
    i+=1
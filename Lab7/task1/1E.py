v=int(input())
t=int(input())
S=109
p=(v*t)%S

if p>=0:
    p=p
else:
    S+p
print(p)
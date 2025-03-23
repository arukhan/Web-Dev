def power(a:float, b:int)->float:
    return a**b

a, b=map(float, input().split())
b=int(b)

print(power(a, b))
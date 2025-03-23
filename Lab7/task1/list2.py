def close_far(a, b, c):
  return (abs(abs(b)-abs(c))>=2) and \
  ((abs(abs(b)-abs(a))<=1 and abs(abs(c)-abs(a))>=2) \
  or (abs(abs(c)-abs(a))<=1 and abs(abs(b)-abs(a))>=2))
  
def lone_sum(a, b, c):
  sum = 0
  sum += a if a not in [b,c] else 0
  sum += b if b not in [a,c] else 0
  sum += c if c not in [a,b] else 0
  return sum

def lucky_sum(a, b, c):
  sum = 0
  list = [a,b,c,13]
  for i in list[:list.index(13)]:
    sum += i
  return sum

def make_bricks(small, big, goal):
  o = goal
  o -= 5*min(big,goal/5)
  return o-small <= 0

def no_teen_sum(a, b, c):
  def fix_teen(n):
    return n if n not in [13,14,17,18,19] else 0
  return fix_teen(a)+fix_teen(b)+fix_teen(c)
def hello_name(name):
  return "Hello "+name+"!"

def make_abba(a, b):
  return a+b+b+a

def make_tags(tag, word):
  return "<"+tag+">"+word+"</"+tag+">"

def make_out_word(out, word):
  return out[:2]+word+out[-2:]

def extra_end(str):
  return 3*str[-2:]

def first_two(str):
  if len(str)==1:
    return str
  elif len(str)==0:
    return ""
  else:
    return str[:2]
    
def first_half(str):
  return str[:len(str)/2]

def without_end(str):
  return str[1:-1]

def combo_string(a, b):
  if len(a)>len(b):
    return b+a+b
  else:
    return a+b+a

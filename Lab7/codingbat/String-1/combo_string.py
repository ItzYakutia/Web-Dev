def combo_string(a, b):
  st = min(len(a), len(b))
  if (len(a)) == st:
    return a + b + a
  return b + a + b

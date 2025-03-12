def common_end(a, b):
  l1 = len(a) - 1
  l2= len(b) - 1
  if (a[0] == b[0]) or (a[l1] == b[l2]):
    return True
  return False

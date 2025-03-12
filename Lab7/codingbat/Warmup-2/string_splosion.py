def string_splosion(str):
  res = ''
  for i in range(0, len(str) + 1):
    res += str[:i]
  return res

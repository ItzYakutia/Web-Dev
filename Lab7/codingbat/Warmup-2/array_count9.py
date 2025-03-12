def array_count9(nums):
  k = 0
  for i in range(0, len(nums)):
    if nums[i] == 9:
      k += 1
  return k

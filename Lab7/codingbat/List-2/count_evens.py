def count_evens(nums):
  k = 0
  for x in range(0, len(nums)):
    if nums[x] % 2 == 0:
      k += 1
  return k

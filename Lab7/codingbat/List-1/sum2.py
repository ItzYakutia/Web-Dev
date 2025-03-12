def sum2(nums):
  k = 0
  if len(nums) == 0:
    return 0
  if len(nums) == 1:
    return nums[0]
  for i in range(0, 2):
    k += nums[i]
  return k

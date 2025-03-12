def same_first_last(nums):
  l = len(nums) 
  if l < 1:
    return False
  if nums[0] == nums[l-1]:
    return True
  return False

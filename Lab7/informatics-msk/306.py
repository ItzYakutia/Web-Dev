def find_min(a, b, c, d):
    min_val = a
    if b < min_val:
        min_val = b
    if c < min_val:
        min_val = c
    if d < min_val:
        min_val = d
    return min_val

a = int(input())
b = int(input())
c = int(input())
d = int(input())

print(find_min(a, b, c, d))
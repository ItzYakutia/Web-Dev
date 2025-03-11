N = int(input())  
array = []

for k in range(N):
    a = int(input())
    array.append(a)

for i in range(0, N, 2):
    print(array[i], end=" ")

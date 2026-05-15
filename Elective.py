a = [1, 2, 3]
b = [4, 5, 6]
sum_result = []
product_result = []

for i in range(len(a)):
    sum_result.append(a[i] + b[i])
product_result.append(a[i] * b[i])

print(product_result) # Output: [4, 10, 18]
print(sum_result) # [5, 7, 9]
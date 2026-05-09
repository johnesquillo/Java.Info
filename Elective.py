student = dict(name="John", age=21)

student.update({"name": "Josh", "Gender": "Male", "age": 25, "address": "Muntinlupa City"} )

for key, values in student.items():
    print(key, values)
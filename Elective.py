student = {
    "student1": {
        "name": "John", "age": 25
        },

    "student2": {
        "name": "Jake", "age": 26
    }
}

for values in student["student1"].values():
    if "name" in student["student1"]:
        print("Eyy!")
    else:
        print("AWTS!")
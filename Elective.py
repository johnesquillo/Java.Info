grades = {
    "Math": 90, 
    "Science": 75,
    "English": 85
}

for subject, score in grades.items():
    if score >= 90:
        print(subject, "HIGHEST!")
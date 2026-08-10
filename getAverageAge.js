function getAverageAge(users) {
    return users

        let getAge = users.map(user => user.age)
        .reduce((sum, current) => sum + current, 0) / 3
}

let usersInfo = [
    {name: "John", age: 25},
    {name: "Pete", age: 30},
    {name: "Mary", age: 29}
];

alert(getAverageAge(usersInfo));
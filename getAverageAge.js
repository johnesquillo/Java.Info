function getAverageAge(users) {
    
    let getAge = users.map(user => user.age).reduce((sum, current) => sum + current, 0);
    return getAge / users.length;

}

let user = [
    {name: "John", age: 25},
    {name: "Jake", age: 30},
    {name: "Josh", age: 29}
];

alert(getAverageAge(user));
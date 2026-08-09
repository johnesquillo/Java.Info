function sortByAge(users) {
    return users   
       .sort((a, b) => a.age - b.age);
}

let userList = [
    {name: "John", age: 25},
    {name: "Jake", age: 30},
    {name: "Jane", age: 28}
];


alert(userList.map(user => `${name} : ${age}`).join(", "));

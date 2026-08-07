let users = [
    {name: "John", surname: "Gerente", id: 1},
    {name: "Jake", surname: "Baker", id: 2},
    {name: "Jane", surname: "Doe", id: 3}
];

let fullNames = users.map(user => `${user.name} ${user.surname}`);
alert(fullNames);
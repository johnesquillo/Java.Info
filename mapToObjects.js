let users = [
    {name: "John", surname: "Gerente", id: 1},
    {name: "Jake", surname: "Baker", id: 2},
    {name: "Jane", surname: "Doe", id: 3}
];

let usersMapped = users.map(user => ({
    fullname: `${user.name} ${user.surname}`,
    id: user.id
}));

alert(usersMapped[0].id);
alert(usersMapped[0].fullname);




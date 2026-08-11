function groupById(arr) {
    return arr

    .reduce((result, user) => {
        result[user.id] = user;
        return result;
    }, {});
}

const users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

alert(usersById);
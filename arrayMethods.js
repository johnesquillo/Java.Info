const arr = ["John", "Esquillo", "Malones", "John"];


alert( arr.includes("John")); 
alert( arr.indexOf("John"));
alert( arr.lastIndexOf("John"));

let arrays = arr.forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});


let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Jake"},
    {id: 3, name: "Josh"},
    {id: 4, name: "John"}
];

let user = users.find(item => item.id == 1);


alert( user.name );
alert( users.findIndex(user => user.name == "John"));
alert( users.findLastIndex(user => user.name == "John"));

let someUsers = [
    {id: 1, name: "Mago"},
    {id: 2, name: "Jescel"},
    {id: 3, name: "Louise"}
];
// returns array of the first two users
let usersSome = someUsers.filter(item => item.id < 3);

alert(usersSome.length);

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths);


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
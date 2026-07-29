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

let countries = ['Österreich', 'Andorra', 'Vietnam'];

countries.reverse();

alert( countries.sort( (a, b) => a.localeCompare(b) ) );

let str = ['Bilbo', 'Gandalf', 'Nazgul'];

let res = str.join(';');

alert(res);

let num = [1, 2, 3, 4, 5, 10];

let result = num.reduceRight((sum, current) => sum + current, 0);
alert(result);

let array = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const output = array.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
);

alert(output);

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let userAge = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30},
];

let soldiers = userAge.filter(army.canJoin, army);

alert(soldiers.length);
alert(soldiers[0].age);
alert(soldiers[1].age);






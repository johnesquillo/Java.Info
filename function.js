let name = 'John';

function myName() {
    name = 'Jake'
    let result = 'Hello!' + name;
    alert(result);
}

alert(name);

myName();

alert(name);
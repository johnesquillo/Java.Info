let name = 'john';

function showName() {
    name = 'Jake'
    let message = 'Hello, ' + name;
    alert(message);
}

alert(name);

showName();

alert(name);
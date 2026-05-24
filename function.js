let name = 'John';

function userName() {
    name = 'Jake';
    let message = 'Hello, ' + name;
    alert(message);
}

alert(name);

userName();

alert(name);
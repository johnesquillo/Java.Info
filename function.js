let userName = 'John';

function showName(from, text) {
    userName = 'Jake';
    alert(from + ':' + text);
}

let from = 'Ann'
showName(from, 'Hello')

alert(userName);
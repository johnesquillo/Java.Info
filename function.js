let userName = 'John';

function showName() {
    userName = 'Jake';
    let message = 'Hello,' + userName;
    alert(message);
}

showName();

alert(userName);
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did your parents allow you?')
    }
}

let age = prompt('How old are you?');

if(checkAge(age)) {
    alert('Access granted')
}else {
    alert('Access denied')
}
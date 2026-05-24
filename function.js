function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have a permission from your parents?');
    }
}

let age = prompt('How old are you?');

if(checkAge(age)) {
    alert('Access granted!');
} else {
    alert('Access denied!');
}
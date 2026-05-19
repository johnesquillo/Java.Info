function checkAge(age) {
   age = age > 18 || confirm('Did your parents allow you?')
}

let age = prompt('How old are you?');

if(checkAge(age)) {
    alert('Access granted')
}else {
    alert('Access denied')
}
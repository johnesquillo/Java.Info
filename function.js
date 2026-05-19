function checkAge(age) {
   return (age > 18) ? true : confirm('Did your parents allow you?')
}

let age = prompt('How old are you?');

if(checkAge(age)) {
    alert('Access granted')
}else {
    alert('Access denied')
}
let age = prompt('How old are you?', 18);

let welcome = (age < 18) ? 
function() {alert('Hello!'); } :
function() {alert('Greetings!'); };

welcome();
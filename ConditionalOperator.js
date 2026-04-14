let age = prompt('How old are you?', '');

let message = (age < 3) ? 'Hi, Baby!' :
 (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings' :
   'What an anusual age!';

alert(message);
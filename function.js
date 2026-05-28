let age = prompt('How old are you?', 18);

let welcome;

if (age < 18) {

    welcome = function() {
        alert('Hello!');
    };

}else {
    welcome = function() {
        alert('Greeting!');
    };
}

welcome();
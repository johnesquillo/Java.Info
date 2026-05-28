let age = 16;

if (age < 18) {
    welcome();

    function welcome() {
        alert('Hello');
    }

}else {
    function welcome() {
        alert('Greetings!');
    }
}

welcome();
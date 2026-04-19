let username = prompt('Enter your username', '');

if (username === 'Admin') {

    let password = prompt('Enter your password', '');

    if (password === 'John') {
        alert('Welcome!');

    }else if (password !== 'John' || password === null) {
        alert('Cancelled');

    }else {
        alert('Wrong password');
    }

}else if (username !== 'Admin' || username === null) {
    alert('Cancelled');

}else {
    alert('Who are you?'); 
}
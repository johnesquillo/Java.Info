let userName = prompt('Enter your username');

if (userName === 'Admin') {

    let password = prompt('Enter your password');

    if (password === 'John') {
        alert('Welcome');

    }else if (password !== 'John' ?? password === null) {
        alert('Cancelled');

    }else {
        alert('Wrong password');

    }

}else if (userName !== 'Admin' ?? userName === null) {
    alert('Cancelled');

}else {
    alert('Who you?')
}
let btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
    alert('The button was clicked!');
    event.stopPropagation();
});

document.body.addEventListener('click', (event) => {
    alert('The body was click!');
});

let link = querySelector('a');
link.addEventListener('click', (event) => {
    alert('Clicked!');
    event.preventDefault();
});

let msg = document.getElementById('#message');
msg.addEventListener("keydown", (event) => {

});

msg.addEventListener("keypress", (event) => {

});

msg.addEventListener("keyup", (event) => {

});

let textBox = document.getElementById('message');
textBox.addEventListener('keydown', (event) => {
    alert(`key=${event.key},code=${event.code}`);
});

let menu = document.querySelector('#menu');
menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home':
            alert('Home menu was clicked!');
        break;

        case 'dashboard':
            alert('Dashboard menu was clicked!');
        break;

        case 'report':
            alert('Report menu was clicked!');
            break;
    }
});
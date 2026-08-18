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
function showMessage(from, text) {
    from = '*' + from + '*';
    alert(from + ':' + text);
}

let from = 'Ann';
showMessage(from, 'Hello');
alert(from);
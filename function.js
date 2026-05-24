function showMessage(from, text = 'Hello') {
    from = '*' + from + '*';
    alert(from + ':' + text);
}

let from = 'Ann';
showMessage(from);
alert(from);
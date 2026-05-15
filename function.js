function showMessage(from, text) {
    if ( text === undefined) {
        text = 'no text given'
    }
        alert(from + ':' + text);
}

showMessage();
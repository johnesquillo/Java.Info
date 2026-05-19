function showMessage(text) {
    if (text === undefined) {
        text = 'no text given';
    }
    alert(text);
}

showMessage();
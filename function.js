function showName(name, text) {
    if (text === undefined) {
        text = text || "0";
    }
        alert(name + ':' + text);
}

showName();
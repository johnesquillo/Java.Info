function showMessage(count) {
    alert(count ?? "Unknown");
}

showMessage(0);
showMessage(null);
showMessage();
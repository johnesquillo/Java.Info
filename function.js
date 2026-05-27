function ask(question, yes, no) {
    if(confirm(question)) yes()
        else no();
}

function showOk() {
    alert("You agree");
}

function showCancel() {
    alert('You cancelled the execution.');
}

ask("Do you agree?", showOk, showCancel);
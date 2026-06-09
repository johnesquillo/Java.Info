function ask(question, yes, no) {
    if(confirm(question)) yes();
        else no();
}

ask(
    "Do you agree?",
    () => {alert("You agree!"); },
    () => {alert("You denied!"); }
);
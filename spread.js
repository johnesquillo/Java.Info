function sum(...theArgs) {
    let total = 0;

    for (const arg of theArgs) {
        total += arg;
    }
     return total;
}

alert(sum(1, 2, 3));
alert(sum(1, 2, 3, 4));

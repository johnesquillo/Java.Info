function sumInput() {
    let num = [];

    while(true) {
        const values = prompt('', 0);

        if (values === '' || values === null || !isFinite(values)) break;

        num.push(+values)
    }

    let sum = 0;
    for (let number of num) {
        sum += number;
    }
        return sum;

}
alert(sumInput());
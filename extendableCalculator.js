function calculate(str) {
    return str.split('').reduce((acc, char) => {
        if (char === '+') {
            return acc + 1;
        }
        if ( char === '-') {
            return acc - 1;
        }
    }, 0);
}

addMethod('multiply', (a, b) => a * b);
addMethod('divide', (a, b) => a / b);
addMethod('power', (a, b) => Math.pow(a, b));
addMethod('modulus', (a, b) => a % b);
addMethod('max', (a, b) => Math.max(a, b));
alert(calculate('++-+'));
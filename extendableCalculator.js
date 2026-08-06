function Calculator() {
    this.methods = {
        "-" : (a, b) => a - b,
        "+" : (a, b) => a + b
    };

    this.calculate = (str) => {
        const split = str.split(" ");
        const a = +split[0];
        const op = split[1];
        const b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };
    this.addMethod = (name, func) => {
        this.methods[name] = func;
    };
}

let calc = new Calculator();

alert(calc.calculate("3 + 7"));
alert(calc.calculate("3 - 7"));

let powerCalc = new Calculator();

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

alert(calc.calculate("2 * 3"));
alert(calc.calculate("2 / 3"));
alert(calc.calculate("2 ** 3"));


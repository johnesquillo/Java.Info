function Calculator() {
    
    this.methods = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b,
    };
    this.calculate = (str) => {
        const split = str.split(" ");
        const a = split[0];
        const op = split[1];
        const b = split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    }
    this.addMethod = (name, func) => {
        this.methods[name] = func
    };
}

let calc = new Calculator();

alert(calc.calculate("3 + 7"));
alert(calc.calculate("3 - 7"));

calc.addMethod("*", (a, b) => a * b);
alert(calc.calculate("3 * 7"));

calc.addMethod("/", (a, b) => a / b);
alert(calc.calculate("10 / 2"));

calc.addMethod("**", (a, b) => a ** b);
alert(calc.calculate("2 ** 3"));

let total = calc.calculate("3 + 7") + calc.calculate("10 / 2") + calc.calculate("2 ** 3") + 
            calc.calculate("3 * 7") + calc.calculate("3 - 7");

            alert(total);

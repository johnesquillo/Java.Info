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

let n1 = +prompt("Enter an expression (e.g., 3 + 7):", "3 + 7");
let n2 = +prompt("Enter another expression (e.g., 10 - 5):", "10 - 5");
let calc = new Calculator();

alert(`${calc.calculate(n1) + calc.calculate(n2)}`);

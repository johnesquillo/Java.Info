function calculate(expression) {
    let parts = expression.split(" ");

    let result = Number(parts[0]);

    for (let i = 1; i < parts.length; i += 2) {
        let operator = parts[i];
        let number = Number(parts[i + 1]);

        if (operator === "+") {
            result += number;
        } else if (operator === "-") {
            result -= number;
        } else if (operator === "*") {
            result *= number;
        } else if (operator === "/") {
            result /= number;
        }
    }

    return result;
}

let expression = prompt("Enter an expression:");

alert(calculate(expression));
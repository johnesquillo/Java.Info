function calculate(expression) {
    return expression

        .split('')
        .reduce((acc, char) => {
            if (char === '+') {
                return acc + 1;

            } else if (char === '-') {
                return acc - 1;

            } else if (char === '*') {
                return acc * 2;

            } else if (char === '/') {
                return acc / 2;

            } else {
                return acc;
            }
        });
            alert(`Result: ${acc}`);
}

function addMethod(operator, func) {
    addMethod[operator] = func;
    addMethod[operator] = function (a, b) {
        return func(a, b);
    };    
}

const numExpression = "2 + 3 * 4 - 5 / 2";

let expression = prompt('Enter an expression number with operators (+, -, *, /):');
let result = calculate(expression);
alert(`Result: ${result}`);
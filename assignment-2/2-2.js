const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
            return 'Error: Invalid operator';
    }
}

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        rl.question('Enter operator (+, -, *, /): ', (operator) => {
            console.log(`Result: ${calculate(parseFloat(num1), parseFloat(num2), operator)}`);
            rl.close();
        });
    });
});

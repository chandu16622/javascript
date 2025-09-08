var app='casio';
console.log("app) is",app);

console.log("Addition:", calculator('add', 6, 5));
console.log("Subtraction:", calculator('subtract', 19, 5));
console.log("Multiplication:", calculator('multiply', 16, 5));
console.log("Division:", calculator('divide', 10, 5));
console.log("Invalid Operation:", calculator('modulus', 10, 5));

function calculator(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return "Invalid operation";
    }
}


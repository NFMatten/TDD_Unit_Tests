
function sum(a,b){
    return (a + b);
}

function subtract(a,b) {
    return (a - b);
}

function multiply(a,b){
    return (a * b);
}

function divide(a,b){
    if (b === 0){
        throw new Error('Cannot divide by Zero!');
    }
    return (a / b);
}

export {sum, subtract, multiply, divide}
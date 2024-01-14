function validateDivision(divisor) {
    if (divisor === 0) {
        throw new Error("Forbidden division by 0");
    }
}

function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function sub(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function mult(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function div(dividend, divisor) {
    validateDivision(divisor);
    return dividend / divisor;
}

function mod(dividend, divisor) {
    validateDivision(divisor);
    return dividend % divisor;
}

module.exports = {sum, sub, mult, div, mod}
// Recursive function to calculate power
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

// Example usage:
let baseNumber = 2;
let exponentNumber = 5;
console.log(baseNumber + " raised to the power of " + exponentNumber + " is " + power(baseNumber, exponentNumber));

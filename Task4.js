// Recursive function to find nth Fibonacci number
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
let fibonacciNumber = 7;
console.log("Fibonacci number at position " + fibonacciNumber + " is " + fibonacci(fibonacciNumber));

function fibonacci(num) {
  if (num <= 0) return 0; // Base case: Fibonacci of 0 or negative numbers is 0
  if (num === 1) return 1; // Base case: Fibonacci of 1 is 1

  // Recursive step: Fibonacci of num is the sum of the previous two Fibonacci numbers
  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;

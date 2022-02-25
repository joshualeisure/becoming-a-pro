//  Power
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// power(2,0) //      power(2,2) // 4       power(2,4) // 16
// return 2 * 2 * 2 * 2
// Exp -> 3 2 1 0

// Factorial
function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  num = num * factorial(num - 1);
  return num;
}

// factorial(1) // 1  factorial(2) // 2  factorial(4) // 24
// 4 * 3 * 2 * 1 (return 1 at end)

// ProductOfArray
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  arr = arr * productOfArray(arr.splice(1));
  return arr;
}
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// RecursiveRange
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// Fibonacci sequence
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// fib(4) // 3
// fib(10) // 55

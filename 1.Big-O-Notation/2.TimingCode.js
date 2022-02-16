// suppose we want to write a function that calculates the sum of all numbers
// from 1 up to (and including) some number n

// version 1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
// 1.251 seconds
// bound to multiple of n O(n)

// version 2
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

var time1 = performance.now();
addUpTo2(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
// 0.0001 seconds
// Always 3 operations O(1)

// Problem with time
//  - different machines will record diff times
//  - same machine will record different times
//  - fast algos, speed measurements may not be precise

//  Counting number of simple operations a computer has to perform
//  1st func - Scale with n (numb of operations grow roughly proportional with n)
//  2nd func - 3 operations regardless of n size

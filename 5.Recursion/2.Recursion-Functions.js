// base case- the condition when the function ends
// different input - function gets called with different values every time (like reducing length of arr)

// first function
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// second function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// base case -- num = 1
// diff input -- num - 1
// without return -- would keep running

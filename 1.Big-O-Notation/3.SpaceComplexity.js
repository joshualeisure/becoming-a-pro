// How much additional memormy do we need to allocate in order to run the code in our alg

// Auxiliary space complexity to refer to space required by algo, not including space taken up
// by the inputs

// Space complexity in Js - rules of thumb
// most primitives (booleans, numbers, undefined, null) are constant space
// Strings require O(n) space (where n is string length)
// Reference types are generally O(n), where n is th lenght (for arrays ) or number of keys (for objects)

// Example
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
// variable declarations (total and i) only take 2 spaces -> O(1) space

// another example
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
//  O(n) space

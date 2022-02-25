// how do we search? look at every element and check if its value we want
// built in methods
// --indexOf
// --includes
// --find
// --findIndex

// Linear search
// --loop through array and check if current arr element is equal to value, if it is return index, if not return -1

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

// Big O --- O(n)

// binary is much faster frorm of search, you eliminate half of remaining elements at time.
// has to be sorted tho

// write a function that accepts a sorrted array and a value
// create a left pointer (start) and right pointer (end) of array
// while left pointer comes before the right pointer: create middle pointer
// return index, if no value retuurn -1

function binarySearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  let mid = Math.floor((min + max) / 2);
  while (arr[mid] !== num && min <= max) {
    if (num < arr[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
    mid = Math.floor((min + max) / 2);
  }
  if (arr[mid] === num) {
    return mid;
  }
  return -1;
}

// Big O
// O(log n) - worst and avg case
// O(1) - best case

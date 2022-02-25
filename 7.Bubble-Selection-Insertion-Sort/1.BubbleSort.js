// sorting is the process of rearranging the items in a collection in order (like an array from small to large)
// sorting is an incredily common task - good to know
// different methods have their own advantages and disadvantages

// Built in javascript sorting
// -> array.sort
// -> takes a comparator to tell javascript how u want to sort
// -> for example -
function numbercompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numbercompare);
// [4, 6, 10, 15]
// -> can also do with str length

// Bubble sort
// -> the largest values bubble up to the top
// -> compare to next val, swap. compare to next val again, swap

// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// Bubble sort question
// -> swapping numbs

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
bubbleSort([37, 45, 29, 8]);

// Bubble sort es5 answer
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

// Bubble sort question (optimized)
// -> swapping numbs

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
bubbleSort([37, 45, 29, 8]);

// Time complexity n^2 (best case is linear n)

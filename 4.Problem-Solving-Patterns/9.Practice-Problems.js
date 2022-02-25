// 1. Given 2 positive intgeres. Find out if 2 numbers have same frequency of digits (time should be O(N))

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// 2. Implement a function that accepts a variable number of args, and checks whether there are any duplicates among args passed in.
// Time - O(n), Space - O(n)

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// One liner
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// 3. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the avg of the pair equals the target avg
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

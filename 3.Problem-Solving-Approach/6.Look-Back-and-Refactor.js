// Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
}

// refactor
function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
}

charCount("hello"); // {h:1, e:1, l:2, o:1}

// if char is something else (space, period, etc) dont do anything

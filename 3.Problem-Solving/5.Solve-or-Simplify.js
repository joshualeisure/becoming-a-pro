// Write a function which takes in a string and returns counts of each character in the string.

// broad
function charCount(string) {
  // do something
  // return object with keys that are lowercase alphanumeric in string
}

// specific
function charCount(string) {
  // make object to return at end
  let result = {};
  // loop over string, for each char...
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    // if char is a numb/ltter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
      // if char is not a numb/letter AND not in object, add it and set value to 1
    } else {
      result[char] = 1;
    }
  }
  // return object at end
  return result;
}

charCount("hello"); // {h:1, e:1, l:2, o:1}

// if char is something else (space, period, etc) dont do anything

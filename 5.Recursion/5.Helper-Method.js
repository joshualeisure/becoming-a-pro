// Helper function
function outer(input) {
  var outerScopedVariable = [];
  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}

function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

// Pure recursion
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// Pure recursion tips
// --For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
// --Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
// --To make copies of objects use Object.assign, or the spread operator
// Big O
// --Measuring time complexity is relatively simple.
// ---time complexity of a recursive function is measured as the number of recursive calls you need to make relative to the input
// --Measuring space complexity is a bit more challenging.
// ---You can measure the space complexity of a recursive function as the maximum number of functions on the call stack at a given time,
// ---since the call stack requires memory.

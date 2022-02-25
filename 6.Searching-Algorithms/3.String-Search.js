// count number of substrings within a string

// loop over longer string
// loop over shorter string
// if chars dont match, break out of inner loop. if match, keep going
// if all chars match, increment count. Return count

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");

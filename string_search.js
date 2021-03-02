// Define a function that takes 2 strings. The large one and the patern we're looking for
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, breack out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match,
// increment the count of matches.
// Return the count

function stringSearch(longerStr, shorterStr) {
  let count = 0;
  for (let i = 0; i < longerStr.length; i++) {
    for (let j = 0; j < longerStr.length; j++) {
      if (shorterStr[j] !== longerStr[i + j]) break;
      if (j === shorterStr.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch("akgjfjhuyutomatokajkhgsvkjrtomato", "tomato"));

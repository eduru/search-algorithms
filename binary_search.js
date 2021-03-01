//big caveat: only works on sorted arrays!
// divide and conquer!

// PSEUDOCODE
// Write a function that accepts a sorted array and a value.
// Create a left pointer at the start of the array and
// a right ponter at the end.
// While the left pointer comes before the right pointer:
// Create a pointer in the middle
// If you find the value you want, return the index.
// If the value is too small, move the left pointer up.
// If the value is too large, move the right pointer down.
// Return -1 if the value is never found.

const binarySearch = (sortedArr, value) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (sortedArr[middle] !== value) {
    if (value < sortedArr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
    console.log(start, middle, end);
  }
  return middle;
};

const arr = [2, 5, 6, 9, 13, 15, 28, 30];

console.log(binarySearch(arr, 28));

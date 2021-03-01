// indexOf, includes,find, findIndex (they're using linear search)

// Time Complexity:
// BEST CASE = > O(1)
// WORST CASE,AVERAGE => O(n)
// Space Complexity: O(1)

// This function accepts an array and a value.
// Loop through the array and check if the current array element is equal to the value.
// If it is, return the index at wich the element is found.
// If the value is never found, return -1

const linearSearch = (arr, value) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

const array = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

console.log(linearSearch(array, "e"));

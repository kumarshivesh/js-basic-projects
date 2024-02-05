/*
// create a function that replicates the `split()` method
function split(str, delimiter) {
  let array = [];
  let current = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === delimiter) {
      array.push(current);
      current = "";
    } else {
      current = current + char;
    }
  }

  // Push the last substring, even if it doesn't end with the delimiter
  array.push(current);

  return array;
}

const originalString = '2024-01-28'
let newString = split(originalString, "-")
console.log(newString) // [ '2024', '01', '28' ]
*/

/*
// create a function that replicates the `join()` method
function join(array, separator) {
  let joinedString = ""

  for (let i = 0; i < array.length; i++) {
    joinedString = joinedString + array[i]
    if (i !== array.length - 1) {
      joinedString = joinedString + separator
    }
  }
  return joinedString
}

const originalArray = [ '2024', '01', '28' ]
let myString = join(originalArray, " ")
console.log(myString) // 2024 01 28
*/

//
function myPush(array, ...elements) {
  for (let i = 0; i < elements.length; i++) {
    array[array.length] = elements[i];
  }
  return array.length;
}

let myArray = ["apple", "banana"];
let newLength = myPush(myArray, "orange", "grape");
console.log(myArray); // Output: ["apple", "banana", "orange", "grape"]
console.log(newLength); // Output: 4

/*
// create a function that replicates the `replaceAll()` method
function replaceAll(str, searchValue, replaceValue) {
  return str.split(searchValue).join(replaceValue)
}

const originalString = '2024-01-28'
let newString = replaceAll(originalString, "-", "")
console.log(newString) // 20240128
*/


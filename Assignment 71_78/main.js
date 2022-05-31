let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let result = mix
  .map(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  })
  .reduce((acc, curr) => acc + curr);

console.log(result);

// Assignment 2

let myString = "EElllzzzzzzzeroo";

let result2 = myString.split("").reduce(function (acc, curr) {
  return acc.length > 0
    ? acc[acc.length - 1] === curr
      ? `${acc}`
      : `${acc}${curr}`
    : `${acc}${curr}`;
});

console.log(result2);

// Elzero

// Assignment 3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result3 = myArray.reduce(function (acc, curr) {
  return Array.isArray(curr)
    ? `${acc}${curr.reduce((ac, cur) => `${ac}${cur}`)}`
    : `${acc}${curr}`;
});
console.log(result3);
// Elzero

// Assignment 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result4 = numsAndStrings
  .filter((element) => !isNaN(parseInt(element)))
  .map((element) => -element);
console.log(result4);
// [-1, -10, 10, 20, -5, -3]

let nums = [2, 12, 11, 5, 10, 1, 99];

let result5 = nums.reduce(function(acc ,curr){
   return (curr%2==0) ? acc*curr : acc+curr;
},1)
console.log(result5);
// 500

//Assignment 1
function sayHello(theName, theGender) {
  if (theGender === undefined) {
    console.log(`Hello ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello Mr ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//Assignment 2

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else if (operation === undefined || operation === "add") {
    console.log(`${firstNum + secondNum}`);
  } else if (operation === "subtract") {
    console.log(`${firstNum - secondNum}`);
  } else if (operation === "multiply") {
    console.log(`${firstNum * secondNum}`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//Assignment 3
function ageInTime(theAge) {
  if (theAge > 0 && theAge <= 100) {
    console.log(`Your Age In Month : ${theAge * 12}`);
    console.log(`Your Age In day : ${theAge * 12 * 4}`);
    console.log(`Your Age In day : ${theAge * 12 * 4 * 7}`);
  } else {
    console.log(`Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//Assignment 4

function checkStatus(a, b, c) {
  let boolVar = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;
  let strVar = typeof a === "string" ? a : typeof b === "string" ? b : c;
  let intVar = typeof a === "number" ? a : typeof b === "number" ? b : c;
  console.log(
    `Hello ${strVar}, Your Age Is ${intVar}, You Are ${
      boolVar ? "Available" : "Not Available"
    } For Hire`
  );
}

//Assignment 5
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//Assignment 5
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

//Assignment 6
function multiply(...arr) {
  let result = 1 ;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {
      if (!Number.isInteger(arr[i])) {
        result *= +(parseInt(arr[i]));
      } else {
        result *= arr[i];
      }
    }

  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.1, 10, "B"); // 1000
console.log(typeof 100.5);